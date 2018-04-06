//==============================================================================
//=== Business Rule ============================================================
//==============================================================================
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

//=== Classes ==================================================================

class Helper {
  isNumber(x) {
    return Number.isInteger(parseInt(x));
  }

  getVal(el) {
    return el.value;
  }
}

class XMLElements {
  el(type) {
    return document.createElement(type)
  }

  // Variable Refenece Elements
  //=== Variable Refs ==========================================================

  getStringVarRef(varRef) {
    var stringRef = this.el('string-constant-ref');
    stringRef.setAttribute("var-id", varRef);
    return stringRef;
  }

  getNumVariableRef(varRef) {
    var stringRef = this.el('number-variable-ref');
    stringRef.setAttribute("var-id", varRef);
    return stringRef;
  }

  getBoolVariableRef(varRef) {
    var stringRef = this.el('string-constant-ref');
    stringRef.setAttribute("var-id", varRef);
    return stringRef;
  }

  getDateVariableRef(varRef) {
    var stringRef = this.el('string-constant-ref');
    stringRef.setAttribute("var-id", varRef);
    return stringRef;
  }

  getDateVariableRef(varRef) {
    var stringRef = this.el('string-constant-ref');
    stringRef.setAttribute("var-id", varRef);
    return stringRef;
  }

  getStringElement(val) {
    var string = this.el('string');
    string.textContent = val;
    return string;
  }

  // Business ruleTypeSelector

  getBusinessRule() {
    return this.el('business-rule');
  }

  //=== element getters =======================================================

  getItemElement(name) {
    var item = this.el('item');
    item.setAttribute('name', name);
    return item;
  }

  getNotElement(el) {
    var not = this.el('not')
    not.append(el);
    return not;
  }

  getNameElement() {
    return this.el('name')
  }

  getAttributeElement() {
    return this.el('attribute');
  }

  getIsPhoneElement() {
    var devType = this.el('is-device-type');
    devType.setAttribute('type', "Phone")
    return devType;
  }

  getIsDesktopElement() {
    var devType = this.el('is-device-type');
    devType.setAttribute('type', "Phone");
    return this.getNotElement(devType);
  }

  getDeviceType(dtype) {
    if (dtype === 'phone') {
      return this.getIsPhoneElement()
    } else {
      return this.getIsDesktopElement()
    }
  }

  getBusinessUnitElement(id) {
    var businessUnitID = this.el('business-unit-id');
    businessUnitID.textContent = $("#businessUnit").val();
    return businessUnitID;
  }

  getAgentGroupElement(id) {
    var agentProfile = this.el('agent-profile');
    var agentGroupId = this.el('agent-group-id');
    agentGroupId.textContent = id;
    agentProfile.append(agentGroupId);
    return agentProfile;
  }

  getConditionElement(obj) {
    var andEl = this.el('and');
    var when = this.el('when');
    var condition = this.el('condition');
    var eventType = this.getEventType(obj);
    var dtype = this.getDeviceType(obj.dtype);

    andEl.append(dtype);
    when.append(eventType);
    condition.append(when);
    condition.append(andEl);

    return condition;
  }

  getEventType(obj) {
    var delay = this.el('delay');
    var dur = this.el('duration');
    if (obj.event === 'onPageLanding') {
      var event = this.el('event');
      event.setAttribute('event-type', obj.event)
      if (obj.eventDelayValue && parseInt(obj.eventDelayValue) > 0) {
        dur.textContent = "PT" + obj.eventDelayValue + "S";
        delay.append(dur)
        event.append(delay)
      }
    } else {
      var event = this.el('custom-event');
      event.setAttribute('event-type', obj.event)
      if (obj.eventDelayValue && parseInt(obj.eventDelayValue) > 0) {
        dur.textContent = "PT" + obj.eventDelayValue + "S";
        delay.append(dur);
        event.append(delay);
      }
    }
    return event
  }

  getActionsElement() {
    return this.el('actions');
  }

  getQThresholdElement(value) {
    var q = this.el('q-threshold');
    q.textContent = value;
    return q;
  }

  // c2c specific

  getShowC2CChatElement() {
    return this.el('show-c2chat');
  }

  getC2CSpecElement() {
    return this.el('c2c-spec');
  }

  getC2CSpecIdElement() {
    return this.el('c2c-spec-id');
  }

  getC2CSpecNameElement() {
    return this.el('c2c-spec-name');
  }

  getC2CThemeElement() {
    return this.el('c2c-theme');
  }

  getChatSpecElement() {
    return this.el('chat-spec');
  }

  getC2CThemeName() {
    return this.el('c2c-theme-name');
  }

  getChatSpecName() {
    return this.el('chat-spec-name');
  }

  getChatSpecNameElement() {
    return this.el('chat-spec-name');
  }

  // proactive Specific
  getProactiveChatElement() {
    return this.el('show-proactive');
  }


  // Automaton stuff

  getAutoSpec() {
    return this.el('automaton-spec');
  }

  getAutDataMap() {
    return this.el('automaton-data-map');
  }

  getAutoItem(name) {
    var item = this.el('item');
    var s = this.el('string');
    item.setAttribute('name', 'xx');
    s.append(item);
    return item;
  }

  getAutomaton() {
    var autoSpec = this.getAutoSpec();
    var autoDMap = this.getAutDataMap();
    var acifID = this.getAutoItem('acif_id');
    autoDMap.append(acifID);
    autoSpec.append(autoDMap);
    return autoSpec;
  }

  // DataPass

  getMapElement() {
    return this.el('map-element');
  }

  getKeyElement() {
    return this.el('key');
  }

  getValueElement() {
    return this.el('value');
  }

  getMemberElement() {
    return this.el('member');
  }

  getIdElement(id) {
    var idEl = this.el('id');
    idEl.textContent = id;
    return idEl;
  }

  getObjectCreate() {
    return this.el('object-create');
  }

  getTrueElement() {
    return this.el('true');
  }

}



class Ajax {

  post(obj) {
    obj.method = "POST"
    this.request(obj);
  }

  get(obj) {
    obj.method = "GET"
    this.request(obj);
  }

  request(obj) {
    if (obj) {
      if (obj.method && obj.URL) {
        var xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.URL);
        xhr.onload = () => {
          if (xhr.status === 200) {
            console.log("sucess");
            obj.handler(xhr);
          } else {
            console.log("wrong");
            console.log(xhr.status)
          }
        }
        xhr.send();
      }
    } else {
      throw "No object passed in";
    }
  }

  test() {
    var obj = {
      method: 'POST',
      URL: "http://localhost:3000/people",
      handler: (msg) => {
        console.log(msg)
      }
    }
    this.request(obj)
  }
}

function addXML(str) {
  var parser = new DOMParser();
  window.xml = parser.parseFromString(str, 'text/xml')
  checkVars(window.xml)
}

function checkVars() {
  window.rawText = window.xml.getElementsByTagName('business')[0].outerHTML;
  window.vars = window.xml.getElementsByTagName('business')[0].getElementsByTagName('variables')[0];
  Array.from(window.vars.children).forEach((val) => {
    var r = new RegExp(val.getAttribute('name'), 'g')
    if (window.rawText.match(r).length >= 2) {
      varsUsed.push(val)
    } else {
      varsUnUsed.push(val.getAttribute('name'));
    }
  })
}

var varsUsed = [];
var varsUnUsed = [];
var ajax = new Ajax();
ajax.get({
  URL: 'ATT.xml',
  handler: (msg) => {
    addXML(msg.responseText)
  }
});

class XMLParser{
  constructor(){
    this.constants =[];
    this.landingCounters = [];
    this.functions = [];
    this.resources = [];
    this.variables = [];
    this.customEvents = [];
    this.visitorAttributes = [];
    this.contentGroups = [];
    this.landingCounters = [];
  }

  inActiveVars(){

  }
}

class PageMarkerParser {
  constructor() {
    this.pageMakers = []
    this.conflicts = [];
  }

  addPMS(rawText) {
    var parsed = rawText.split('/s')
    console.log(parsed)
    parsed.forEach((val) => {
      var temp = val.split(',');
      return {
        'pageID': temp[0],

      }
    })
  }

  getPageMarkers() {
    ajax.get({
      URL: 'pms.csv',
      handler: (msg) => {
        this.parsePageMarkers(msg.responseText)
      }
    });
  }

  parsePageMarkers(csv) {
    var PMArry = csv.split(/\n/);
    window.test = PMArry
    for (var i = 0; i < PMArry.length; i++) {
      var splitPM = PMArry[i].split(',');
      this.pageMakers.push({
        "pageId": splitPM[0],
        "name": splitPM[1],
        "url": splitPM[2],
        "regExp": splitPM[3],
        "active": splitPM[5]
      })
    }
  }

  checkConflict(pattern) {
    var reg = new RegExp(pattern, 'g');
    this.conflicts = this.pageMakers.filter((pm) => {
      return reg.test(pm.url)
    })
  }
}


var PMS = new PageMarkerParser();
PMS.getPageMarkers();
