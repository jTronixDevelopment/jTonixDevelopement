//==============================================================================
//=== Business Rule ============================================================
//==============================================================================

function initClickHandling() {
  createCGButton.click(() => {
    var text = $("#contentGroupTextArea").val();
    var cgName = $("#contentGroupName").val();
    var mainCG = cgCreator.createContentGroup(cgName);
    var ar = text.split('\n').map((val) => {
      return cgCreator.createPageMakerCheck(val);
    }).map((val) => {
      mainCG.append(val)
    });
    $("#contentGroupCreated").val(mainCG.outerHTML)
  })
}

//=== Classes ==================================================================

class ContentGroupCreator {
  createPageMakerCheck(id) {
    let pmc = document.createElement("cg-marker-check");
    pmc.setAttribute("op", "equals");
    pmc.innerText = id;
    return pmc;
  }

  createContentGroup(name) {
    let cg = document.createElement('content-group');
    cg.id = name;
    return cg
  }
}
//buttons
var createCGButton = $("#createCG");
var showCGAreaButton = $("#showCGAreaButton");
var cgCreator = new ContentGroupCreator();

initClickHandling();
