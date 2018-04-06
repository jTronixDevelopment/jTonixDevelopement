function initHiding() {
  $('#gsArea').hide();
  $('#varArea').hide();
  $('#pmArea').hide();
  $('#frArea').hide();

}

function initClickHandling() {
  firRuleButton.click(() => {
    fireRule();
    console.log("Fire Rule")
  })

  $("#gsAreaButton").click(() => {
    console.log('gs area')
    $('#gsArea').toggle();
  });

  $("#showvarAreaButton").click(() => {
    $('#varArea').toggle();
  });

  $("#pmAreaButton").click(() => {
    $('#pmArea').toggle();
  });

  $("#showfrAreaButton").click(() => {
    $('#frArea').toggle();
  });

  reinitChatButton.click(() => {
    Inq.reinit()
  });

  pageMarkerButton.click(function(){
    var URL = $("#pmURL").val();
    console.log(URL)
    window.location.href = "http://localhost:8080/testing.html?" + URL;
    Inq.reinit();
  })
  console.log("fdsa")
}

//=== Event Handleds ===========================================================
var fireRule = () => {
  for (var e = inqFrame.Inq.BRM.rules, t = $("#ruleToFireInput").val(), t = t || t.trim(), n = 0, r = e.length; n < r; n++)
    if (t === e[n].name) {
      e[n].doActions(e[n]);
      return
    }
  alert("Rule not found: " + t)
}

var checkPageMarker = () => {
  var URL = $("#pmURL").val();
  window.location.href = "http://localhost:8080/testing.html?" + URL;
  Inq.reinit();
}



//=== Varibles =================================================================

//buttons
var showCGAreaButton = $("#showCGAreaButton");
var reinitChatButton = $("#reinitChatButton");
var pageMarkerButton = $("#pmURLButton");
var firRuleButton = $("#fireRuleButton");
//
// var getVariableButton = $("#");
// var setVariableButton = $("#");
// var getVariableButton = $("#");

initHiding();
initClickHandling();
