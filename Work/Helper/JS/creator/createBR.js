
function initHiding() {
  $("#proactive-choices").hide();
  $("#reactive-choices").hide();
  $("#onPageLandingDelay").hide();
  $('#qThresholdArea').hide();
  $("#abRuleType").hide();
  $("#chatSpecNameRow").hide();
  $("#actionListRow").hide();
}

function hideAllRuleChoices() {
  $("#reactive-choices").hide();
  $("#proactive-choices").hide();
  $("#ABRule-choices").hide();
  $("#rule-choices").hide();
  $("#abRuleType").hide();
  $("#chatSpecNameRow").hide();
  $("#actionListRow").hide();
}

function initClickHandling() {
  createBRButton.click(() => {
    console.log("test")
    brCreator.createBR();
  })

  eventTypeSelector.change(() => {
    var eventType = eventTypeSelector.val();
    brState.eventType = eventType;
    if (eventType === 'onPageLanding') {
      brState.haeventDelay = true;
      $("#onPageLandingDelay").show();
    } else {
      brState.haseventDelay = false;
      $("#onPageLandingDelay").hide();
    }
  })

  eventDelaySelector.change(() => {
    brState.eventDelayValue = $('#eventDelay').val();
  })

  ruleTypeSelector.change(() => {
    var type = $('#ruleType').val();
    brState.brType = type;
    hideAllRuleChoices();
    switch (type) {
      case 'reactive':
        $("#reactive-choices").show();
        $("#chatSpecNameRow").show();
        break;
      case 'proactive':
        $("#proactive-choices").show();
        $("#chatSpecNameRow").show();
        break;
      case 'ABChat':
        ("#abRuleType").show();
        $("#ABChat-choices").show();
        $("#chatSpecNameRow").show();
        break;
      case 'rule':
        $("#rule-choices").show();
        $("#chatSpecNameRow").show();
        break;
      case 'actionList':
        $("#actionListRow").show();
        break;
      default:
        alert("invalid")
        break;
    }
  })

  qThresholdSelector.change(() => {
    var hasQThresh = qThresholdSelector.val();
    if (hasQThresh === 'true') {
      console.log('in True')
      $("#qThresholdArea").show();
      brState.hasQThreshold = true;
    } else {
      $("#qThresholdArea").hide();
      brState.hasQThreshold = false;
    }
  })

  automatonSelector.change(() => {
    var hasAuto = $("#hasAutomaton").val();
    if (hasAuto === 'true') {
      brState.hasAutomaton = true;
    } else {
      brState.hasAutomaton = false;
    }
  })

  funnelLevelSelctor.change(() => {
    if (funnelLevelSelctor.val() !== 0) {
      brState.hasFunnelLevel = true;
    } else {
      brState.hasFunnelLevel = false;
    }
  })

}

//=== Classes ==================================================================

class BRCreator {

  constructor() {
    this.br;
    this.values;
  }

  setAttribute(obj) {
    obj.el.setAttribute(obj.type, obj.val)
  }

  //=== Reactive Chat ==========================================================

  getReactiveChat() {
    var actions = xmlEl.getActionsElement();
    var showChat = xmlEl.getShowC2CChatElement();
    var c2cSpec = xmlEl.getC2CSpecElement();
    c2cSpec.append(this.getC2CSpec());
    c2cSpec.append(this.getC2CTheme());
    c2cSpec.append(this.getChatSpec());
    showChat.append(c2cSpec);
    actions.append(showChat);
    return actions;
  }

  getC2CTheme() {
    var themVal = $("#c2cThemeName").val();
    var ValueOfTheme = inqFrame.Inq.PM.getVar(themVal);
    var c2cThemeRef;
    var c2cTheme = xmlEl.getC2CThemeElement();

    if (ValueOfTheme !== null) {
      if (helper.isNumber(ValueOfTheme.z0())) {
        c2cThemeRef = xmlEl.getNumVariableRef(themVal);
      } else {
        c2cThemeRef = xmlEl.getStringVarRef(themVal);
      }
    } else {
      c2cThemeRef = xmlEl.getStringElement(themVal);
    }
    c2cTheme.append(c2cThemeRef);
    return c2cTheme;
  }

  getChatSpec() {
    var chatSpec = xmlEl.getChatSpecElement();
    var chatSpecName = xmlEl.getChatSpecNameElement();
    var specVal = $("#chatSpecName").val();
    var ValueOfSpec = inqFrame.Inq.PM.getVar(specVal);
    var chatSpecRef;

    if (ValueOfSpec !== null) {
      if (helper.isNumber(ValueOfSpec.z0())) {
        chatSpecRef = xmlEl.getNumVariableRef(specVal);
      } else {
        chatSpecRef = xmlEl.getStringVarRef(specVal);
      }
    } else {
      chatSpecRef = xmlEl.getStringVarRef(specVal);
    }

    chatSpecName.append(chatSpecRef);
    chatSpec.append(chatSpecName)

    if (brState.hasAutomaton) {
      chatSpec.append(xmlEl.getAutomaton());
    }

    return chatSpec;
  }

  getC2CSpec() {
    var specValue = $("#c2cSpecName").val();
    var valueOfSpec = inqFrame.Inq.PM.getVar(specValue);
    var themeName = xmlEl.getC2CThemeName();
    var c2cSpecRef;

    if (valueOfSpec !== null) {
      if (helper.isNumber(valueOfSpec.z0())) {
        var c2cSpec = xmlEl.getC2CSpecIdElement();
        c2cSpecRef = xmlEl.getNumVariableRef(specValue);
      } else {
        var c2cSpec = xmlEl.getC2CSpecNameElement();
        c2cSpecRef = xmlEl.getStringVarRef(specValue);
      }
    } else {
      var c2cSpec = xmlEl.getC2CSpecNameElement();
      c2cSpecRef = xmlEl.getStringElement(specValue);
    }
    themeName.append(c2cSpecRef);
    c2cSpec.append(themeName);
    return c2cSpec;
  }

  //=== Proactive Chat =========================================================

  getProactiveChat() {
    var actions = xmlEl.getActionsElement();
    var proactive = xmlEl.getProactiveChatElement();
    var chatSpecName = this.getProactiveChatSpec();
    proactive.append(chatSpecName);
    actions.append(proactive);
    return actions;
  }

  getProactiveChatSpec() {
    var chatSpec = xmlEl.getChatSpecElement();
    var chatSpecName = xmlEl.getChatSpecNameElement();
    var specVal = $("#chatSpecName").val();
    var ValueOfSpec = inqFrame.Inq.PM.getVar(specVal);
    var chatSpecRef;

    if (ValueOfSpec !== null) {
      if (helper.isNumber(ValueOfSpec.z0())) {
        chatSpecRef = xmlEl.getNumVariableRef(specVal);
      } else {
        chatSpecRef = xmlEl.getStringVarRef(specVal);
      }
    } else {
      chatSpecRef = xmlEl.getStringVarRef(specVal);
    }

    chatSpecName.append(chatSpecRef);
    chatSpec.append(chatSpecName)

    if (brState.hasAutomaton) {
      console.log('in')
      chatSpec.append(xmlEl.getAutomaton());
    }

    return chatSpec;

  }

  getBusinessActionList(){

  }
  //=== Automaton Creation =====================================================

  getPreChat() {

  }

  getPostChat() {

  }

  //=== BR ALL =================================================================

  setBusinessRuleName(val) {
    this.setAttribute({
      el: this.br,
      type: 'name',
      val: val
    });
  }

  setBusinessRuleID(val) {
    this.setAttribute({
      el: this.br,
      type: 'id',
      val: val
    });
  }

  setBusinessRuleFunnelLevel() {
    this.setAttribute({
      el: this.br,
      type: 'funnel-level',
      val: $("#funnelLevel").val()
    });
  }

  getEventObj() {
    if (brState.hasEventDelay) {
      return {
        event: brState.eventType
      }
    } else {
      return {
        event: brState.eventType,
        eventDelayValue: brState.eventDelayValue
      }
    }

  }

  //=== Create BR ====================================================================

  createBR() {
    this.values = new GenericInputs();
    this.br = xmlEl.getBusinessRule();
    var actions = xmlEl.getActionsElement();

    //=== setting BR Props ===========================================================
    this.setBusinessRuleName(this.values.brName);
    this.setBusinessRuleID(this.values.brID);
    if (brState.hasFunnelLevel) {
      this.setBusinessRuleFunnelLevel();
    }
    //=== BU and AG ==================================================================
    this.br.append(xmlEl.getBusinessUnitElement(this.values.businessUnit));
    this.br.append(xmlEl.getAgentGroupElement(this.values.agentGroupId));
    // adding q threshold values
    if (brState.hasQThreshold) {
      this.br.append(xmlEl.getQThresholdElement($("#qThresholdInput").val()))
    }

    //=== set event condition ========================================================
    if (this.values.deviceType === 'phone') {
      var obj = this.getEventObj();
      obj.dtype = 'phone';
      this.br.append(xmlEl.getConditionElement(obj));
    } else {
      var obj = this.getEventObj();
      obj.dtype = 'desktop';
      this.br.append(xmlEl.getConditionElement(obj));
    }
    //=== Setting rule type ==========================================================
    if (brState.brType === 'reactive') {
      this.br.append(this.getReactiveChat());
    } else if (brState.brType === 'proactive') {
      console.log('isproactive')
      this.br.append(this.getProactiveChat());
    } else if( brState.brType === 'actionList' ) {
      tthis.br.append(this.getBusinessActionList());
    } else {
      alert('Choose BR Type')
    }

    console.log(this.br)
    brOutput.val(this.br.outerHTML)
  }

}

class GenericInputs {
  constructor() {
    this.agentGroupId = $("#agentGroup").val();
    this.businessUnit = $("#businessUnit").val();
    this.brName = $("#ruleName").val();
    this.brID = $("#ruleID").val();
    this.deviceType = $("#deviceType").val();
    this.ruleType = $('#ruleType').val();
  }
}

class BRState {
  constructor() {
    this.brType;
    this.hasQThreshold;
    this.hasAutomaton;
    this.hasFunnelLevel;
    this.eventDelay;
    this.eventType;
  }
}

class BALCreator{
  constructor(){

  }
  createBAC(id){
    var BAC = xmlEl.el('do-business-rule-action-list');
    BAC.setAttribute('action-list-id','id')
  }
}

//=== Variables ================================================================

var brCreator = new BRCreator();
var helper = new Helper();
var brState = new BRState();
var xmlEl = new XMLElements();

//buttons

var createBRButton = $("#createBR");
var brOutput = $("#ruleOuput");

//inputs

var eventTypeSelector = $('#eventType');
var ruleTypeSelector = $('#ruleType');
var qThresholdSelector = $('#qThresholdSelector');
var automatonSelector = $('#hasAutomaton');
var eventDelaySelector = $('#eventDelay');
var funnelLevelSelctor = $("#funnelLevel")

initClickHandling();
initHiding();
