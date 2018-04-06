 class DPCreator{

  //=== Elements whitin DP =====================================================

  createDPArray(){
    var dataPassVars = $("#dataPassVaribles").val().split('\n');
    var arr = [];
    for(var i = 0;i < dataPassVars.length;i++){
      var member = xmlEl.getMemberElement();
      var trueElement = xmlEl.getTrueElement();
      var id = xmlEl.getIdElement(dataPassVars[i]);
      member.append(id)
      member.append(trueElement)
      arr.push(member);
    }
    return arr;
  }

  createDP(){
    var mapEl = xmlEl.getMapElement();
    var key = xmlEl.getKeyElement();
    var stringEl = xmlEl.getStringElement();
    var dpMap = this.createDPArray();
    var dpContentGroupID = xmlEl.getIdElement(dpConentGroup.val());
    var innerObject = xmlEl.getObjectCreate();
    var value = xmlEl.getValueElement();
    var member = xmlEl.getMemberElement();
    var outerObject = xmlEl.getObjectCreate();

    stringEl.textContent = dpEventName.val();
    key.append(stringEl)
    mapEl.append(key)
    member.append(dpContentGroupID);

    for(var i = 0; i<dpMap.length;i++){
      innerObject.append(dpMap[i])
    }

    member.append(innerObject);
    outerObject.append(member)
    value.append(outerObject);
    mapEl.append(value);

    var output = mapEl.outerHTML.toString().replaceAll("<true></true>","<true/>");
    console.log(output)
    $("#dpOutput").val(output)
  }

}


var dpCreator = new DPCreator();
var dpEventName = $('#dataPassEvent');
var dpConentGroup = $('#dataPassCG');
var dpEventVariables = $('#dataPassVaribles')
var createDPButton = $("#createDP");

var xmlEl = new XMLElements();

createDPButton.click(()=>{
  console.log(dpCreator.createDP())
})
