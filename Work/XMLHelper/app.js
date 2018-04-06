class XMLParser {
  constructor() {
    this.parsedBRs = {};
    this.parsedVariables = {};
    this.parsedActionlist = {};
    this.c2cSpecs = {
      30000839: 'ATT',
      30000970: 'ATT-MOB',
      30001046: 'ATT-MOB-native',
      30001142: 'MOBS-Anchor',
      30001143: 'MOBS-Anchor-Mobile',
      30001144: 'MOBS-In-Page-Mobile',
      30001164: 'ATT-DTV',
      30001166: 'TSNR-Tablet',
      30001179: 'ATT-DTV2',
      30001186: 'DTV-Anchor-Mobile',
      30001239: 'BL-Round-Embedded',
      30001260: 'BL-Round-Embedded-content-inFlow',
      30001304: 'ATT-Bubble',
      30001325: 'ATT-DTVNow-Body'
    }
  }

  init() {
      $.ajax({
          url: "/ATT.xml",
          method: "GET"})
        .done((data)=>{
          this.parseAll(data);
        })
        .fail(function(xhr) {
          console.error('error', xhr);
        });
      }

  parseAll(data){
    this.parseXML(data)
    this.parseActionLists();
    this.parseBRs();
    this.parseVariables();
  }

  parseXML(XMLDoc) {
    this.businessRules = Array.from(XMLDoc.getElementsByTagName('business')[0].getElementsByTagName('business-rule'))
    this.parseChildern(XMLDoc.getElementsByTagName('business')[0]);
  }

  parseChildern(xmlDoc) {
    Array.from(xmlDoc.children).forEach((obj) => this[obj.localName.split("-").join('')] = obj)
  }

  parseVariables(){
    Array.from(this.variables.children).forEach((vari) => {
      ///this.parsedVariables[vari.getAttribute('name')] = inqFrame.Inq.PM.getVar(vari.getAttribute('name')).z0()
    })
  }

  parseBRs() {
    this.businessRules.forEach((br) => {this.parsedBRs[br.getAttribute('name')] = this.buildBRObject(br) })
  }

  parseActionLists(){
    Array.from(this.actionlists.children).forEach((list)=>{ this.parsedActionlist[list.getAttribute('id')] = list })
  }

  getValue(item){
    if(item.tagName.match(new RegExp('string-variable-ref|number-variable-ref','g'))){
      if(inqFrame.Inq.PM.getVar(item.getAttribute("var-id"))){
        return inqFrame.Inq.PM.getVar(item.getAttribute("var-id")).z0()
      } else {
        return "Value DNE"
      }
    }else if(item.tagName.match(new RegExp('number|string','g'))){
      return item.textContent;
    } else {
      return "Value DNE";
    }
  }

  seachVariables(val){
    return this.parsedVariables[val]
  }
  //filters

  isPhone(br){
    if(br.getElementsByTagName('is-device-type')[0]){
      return br.getElementsByTagName('is-device-type')[0].parentElement.tagName !== "not"?true:false;
    }
  }

  isReactive(br){
    return (br.getElementsByTagName('show-c2chat')[0])?true:false;
  }

  isProactive(br){
    return (br.getElementsByTagName('show-proactive')[0])?true:false;
  }

  hasAuto(br){
    return (br.getElementsByTagName('automaton-spec')[0]) ? true:false;
  }

  hasChildren(el){
    return el.hasChildNodes()
  }

  getChildren(el){
    return el.children;
  }
  // Chat Info
  getChatSpec(br){
    if(br.getElementsByTagName('chat-spec-name')[0]||br.getElementsByTagName('chat-spec-id')[0]){
      if(br.getElementsByTagName('chat-spec-name')[0]){
        return this.getValue(br.getElementsByTagName('chat-spec-name')[0].firstElementChild);
      } else {
        return this.getValue(br.getElementsByTagName('chat-spec-id')[0].firstElementChild);
      }
    } else {
      return "N/A";
    }
  }

  getchatTheme(br){
      if(br.getElementsByTagName('chat-theme-name')[0]||br.getElementsByTagName('chat-theme-id')[0]){
        if(br.getElementsByTagName('chat-theme-name')[0]){
          return this.getValue(br.getElementsByTagName('chat-theme-name')[0].firstElementChild);
        } else {
          return this.getValue(br.getElementsByTagName('chat-theme-id')[0].firstElementChild);
        }
      } else {
        return "N/A";
      }
  }

  getAutomaton(br){
      if(br.getElementsByTagName('automaton-data-map')[0]){
        var dataMap = [...br.getElementsByTagName('automaton-data-map')[0].children];
        var itemObj = {};
        dataMap.forEach((item)=>{
          itemObj[item.getAttribute('name')] = xml.getValue(item.firstElementChild)
        })
        return itemObj;
      } else {
        return { 'automaton' :"N/A"}
      }
  }

  getC2CSpec(br){
    if(br.getElementsByTagName('c2c-spec-name')[0]||br.getElementsByTagName('c2c-spec-id')[0]){
      if(br.getElementsByTagName('c2c-spec-name')[0]){
        return this.getValue(br.getElementsByTagName('c2c-spec-name')[0].firstElementChild);
      } else {
        return this.getValue(br.getElementsByTagName('c2c-spec-id')[0].firstElementChild);
      }
    } else {
      return "N/A";
    }
  }

  getC2CTheme(br){
    if(br.getElementsByTagName('c2c-theme-name')[0]||br.getElementsByTagName('c2c-theme-id')[0]){
      if(br.getElementsByTagName('c2c-theme-name')[0]){
        return this.getValue(br.getElementsByTagName('c2c-theme-name')[0].firstElementChild);
      } else {
        return this.getValue(br.getElementsByTagName('c2c-theme-id')[0].firstElementChild);
      }
    } else {
      return "N/A";
    }
  }
  // Conditons
  loopChildren(el,obj){
    if (el.hasChildNodes()) {
    var children = [...el.children]
    for (var i = 0; i < children.length; i++) {
        obj[`node${i}`] = {
            name: children[i].tagName,
            node: children[i],
            hasChildNodes: children[i].hasChildNodes(),
            children: {}
        }
        if (obj["nodes"]) {
            obj["nodes"] += i;
        } else {
            obj["nodes"] = 1;
        }
        if(obj[`node${i}`].hasChildNodes){
            obj[`node${i}`].children = this.loopChildren(obj[`node${i}`].node,obj[`node${i}`].children)
        }
    }
}
return obj;
  }

  getConditions(br){
    if(br.getElementsByTagName('condition')[0]){
      return this.loopChildren(br.getElementsByTagName('condition')[0],{})
    }else{
      return false;
    }
  }

  buildBRObject(br){
    if(br.getElementsByTagName('do-business-rule-action-list')[0]){
      var actionListName = br.getElementsByTagName('do-business-rule-action-list')[0].getAttribute('action-list-id')
      return {
          hasActionList : actionListName,
          chatSpecName : this.getChatSpec(this.parsedActionlist[actionListName]) ,
          chatThemeName : this.getchatTheme(this.parsedActionlist[actionListName]) ,
          c2cThemeName : this.getC2CTheme(this.parsedActionlist[actionListName]) ,
          c2cSpecName : this.getC2CSpec(this.parsedActionlist[actionListName]) ,
          automatonInfo : this.getAutomaton(this.parsedActionlist[actionListName])
      }
    } else {
      return {
        chatSpecName : this.getChatSpec(br) ,
        chatThemeName : this.getchatTheme(br) ,
        c2cThemeName : this.getC2CTheme(br) ,
        c2cSpecName : this.getC2CSpec(br) ,
        automatonInfo : this.getAutomaton(br),
        conditions : this.getConditions(br)
      }
    }
  }
}

class SearchBy {
  constructor() {
    this.search = 'BU';
    this.results = [];
    this.refine = 'BU';
    this.filters = ['isPhone','hasAuto','proactive','reactive','isDesktop'];
  }

  init(){
    $("#searchBy").change((e)=> this.search = e.target.value);
    $("#refineBy").change((e)=>this.refine = e.target.value);
    $("#startSearch").click(()=>{
      $('input:checkbox').removeAttr('checked');
      switch (this.search) {
        case 'BU':
          this.results = this.searchRulesBy("business-unit-id",$("#searchValue").val())
          break;
        case 'AG':
          this.results = this.searchRulesBy("agent-group-id",$("#searchValue").val())
          break;
        case 'phone':
          this.results = this.searchByDeviceType("phone")
          break;
        case 'desktop':
          this.results = this.searchByDeviceType('desktop');
          break;
        default:
          break;
      }
      this.refinedResults = [...this.results]
      this.showResults(this.results);
    })
    $("#startRefine").click(()=>{
      switch (this.refine) {
        case 'BU':
          this.refinedResults = this.refineRulesBy("business-unit-id",$("#refineValue").val())
          break;
        case 'AG':
          this.refinedResults = this.refineRulesBy("agent-group-id",$("#refineValue").val())
          break;
        case 'phone':
          this.refinedResults = this.refineByDeviceType('phone');
          break;
        case 'desktop':
          this.refinedResults = this.refineByDeviceType('desktop');
          break;
        default:
          break;
      }
      this.showResults(this.refinedResults);
    })
    //set up listners for the check boxes
    this.filters.forEach((id)=>{
      $(`#${id}`).change(()=>this.refineAll())
    })
  }

  refineAll(){
    var allInputsUnChecked = ()=>{
      return !$('#isPhone').is(":checked")&&!$('#proactive').is(":checked")&&!$('#reactive').is(":checked")&&!$('#hasAuto').is(":checked")&&!$('#isDesktop').is(":checked")
    }
    this.refinedResults = [...this.results]; //reset Values
    if($('#isPhone').is(":checked")){
      this.refinedResults = this.refineByDeviceType('isPhone')
    }
    if($('#proactive').is(":checked")){
      this.refinedResults = this.refineByRuleType('proactive')
    }
    if($('#reactive').is(":checked")){
      this.refinedResults = this.refineByRuleType('reactive')
    }
    if($('#hasAuto').is(":checked")){
      this.refinedResults = this.refineByAutomaton()
    }
    if($('#isDesktop').is(":checked")){
      this.refinedResults = this.refineByDeviceType('isDesktop')
    }

    if(allInputsUnChecked()){
      this.showResults(this.results); // shows normal unrefined results
    } else {
      this.showResults(this.refinedResults)
    }
  }

  searchRulesBy(searchItem,searchVal){
    return xml.businessRules.filter((br)=>{
      if(br.getElementsByTagName(searchItem)[0]){
        return br.getElementsByTagName(searchItem)[0].textContent === searchVal?true:false;
      } else {
        return false;
      }
     })
  }

  refineRulesBy(searchItem,searchVal){
    if(searchVal===''){
      return this.results;
    } else{
      return this.results.filter((br)=>{
        return (br.getElementsByTagName(searchItem)[0])?((br.getElementsByTagName(searchItem)[0].textContent === searchVal)?true:false):(false);
      })
    }
  }

  searchByDeviceType(type){
    return (type === "phone")? xml.businessRules.filter(br=> xml.isPhone(br)): xml.businessRules.filter(br=> !xml.isPhone(br));
  }

  refineByDeviceType(type){
    return (type === "isPhone")?this.refinedResults.filter(br=> xml.isPhone(br)):this.refinedResults.filter(br=> !xml.isPhone(br));
  }

  refineByAutomaton(){
    return this.refinedResults.filter(br=> xml.hasAuto(br))
  }

  refineByRuleType(type){
    return (type === 'proactive')?this.refinedResults.filter(br=> xml.isProactive(br)):this.refinedResults.filter(br=> xml.isReactive(br));
  }

  refineByActionList(){
    return this.refinedResults.filter((br)=>{

    })
  }

  showResults(results){
    $("#searchByResults").empty();
    results.forEach((br)=>{
      var BRName = br.getAttribute('name')
      var infoArea = $(`<div id='${BRName}infoArea'></div>`);
      var showButton = $(`<p><b><button id='${BRName}showButton' class='btn btn-primary'>Details</button>  ${BRName}</b></p>`);
      var li = $(`<li></li>`);
      li.append(showButton, infoArea)
      $("#searchByResults").append(li)

      $(`#${BRName}infoArea`).append(this.createListView(xml.parsedBRs[BRName]));
      $(`#${BRName}infoArea`).hide()
      $(`#${BRName}showButton`).click(()=>{
        $(`#${BRName}infoArea`).toggle();
      })
    })
  }

  createListView(obj) {
    var ul = document.createElement('ul');
    Object.keys(obj).forEach((key) => {
      if(obj[key] !== "N/A"){
        var li = document.createElement('li');
        if (key === 'automatonInfo') {
          li.textContent = "Automaton: ";
          li.append(this.createListView(obj[key]))
          ul.append(li)
        } else if(key.match(new RegExp('BAN|BTN|acif_version','g'))){
          //do nothing
        } else if(key.match(new RegExp('tGuardToken','g'))){
          var d = `${key}: True`;
          li.append(d)
          ul.append(li)
        }else if(key.match(new RegExp('conditions','g'))){
          var d = `${key}: ${JSON.stringify(obj[key])}`;
          li.append(d)
          ul.append(li)
        } else {
          var d = `${key}: ${obj[key]}`;
          li.append(d)
          ul.append(li)
        }
      }
    })
    return ul;
  }
}

function initAll() {// get formatted BR info
  xml.init();
  searchBy.init();
  $("#programStatus").empty().append("<div class=\"alert alert-success\" role=\"alert\">Ready to Use</div>")
}

var searchBy = new SearchBy();
var xml = new XMLParser();

$('#showSearchBy').click(()=>{
  $("#searchByArea").toggle()
})

$("#run").click(() => {
  $("#programStatus").empty().append('<div class="alert alert-warning" role=\"alert\">  Programs is running</div>')
  initAll();
})
