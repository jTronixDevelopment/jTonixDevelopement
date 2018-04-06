class j {
  constructor(val) {
    console.log(val.includes("#"))
    if (val.includes("#")) {
      console.log('In ID')
      this.el = document.getElementById(val.split('#')[1])
      return this;
    } else if (val.includes(".")) {
      this.el = document.getElementsByClassName(val.split(".")[1])
      return this;
    } else if (val.includes("<")) {
      this.el = document.createElement("div")
      return this;
    } else {
      throw "Invalid input"
    }
  }

  print() {
    console.log("this");
    return this;
  }

  html(html){
    if(html){
      if(typeof html === "object"&&html.nodeName){
        this.el.append(html)
      }else {
        this.el.innerHTML = html;
      }
      return this;
    } else {
      return this.el.innerHTML;
    }
  }

  text(txt){
    if(txt){
      this.el.textContent = txt;
      return this;
    } else {
      return this.el.textContent;
    }
  }

}

var t1, t2;
var test = document.createElement('div')
test.id = "test";
document.body.append(test)

var x = new j("#test")
