// Stuff

class singleElements {
  constructor(element) {
    this.element = element;
    this.id = element.id;
    this.className = element.className;
    this.hasAnimations = false;
  }

  //==== Element Manipulation ==================================================

  height() {
    return this.element.offsetHeight;
  }

  width() {
    return this.element.offsetWidth;
  }

  text(text) {
    return this.element.innerText = text;
  }

  append(el) {
    if (el instanceof singleElements) {
      this.element.append(el.element);
    }
  }

  html(html) {

  }

  val(val){
    if(val != undefined){
      this.element.value = val;
    }else{
        return this.element.value;
    }
  }

  //==== Style/CSS Manipulation ================================================

  checkForStyleSheet() {
    if (this.hasAnimations) {
      return;
    } else {
      this.addStyleSheet('animate-liteQuery');
    }
  }

  addStyleSheet(title) {
    var x = document.createElement('style');
    x.title = title;
    document.body.append(x);
  }

  addClassToStyleSheet(obj) {
    //
  }

  removeClassFromStyleSheet(obj) {
    // remove class from style sheet
  }

  removeClass(className) {
    var reg = new RegExp(className + /\s/g);
    this.element.className = this.element.className.split(reg).join("");
  }

  addClass(className) {
    this.element.className = this.element.className + " " + className;
  }

  //==== Events ================================================================

  onClick(fn) {
    this.element.addEventListener("click", fn);
  }

  onDoubleClick(fn) {
    this.element.addEventListener("dblclick", fn);
  }

  onChange(){
    // event for on change
  }

  onLoad(){
    // event for onload
  }

  createEvent(evt,fn){
    if(fn === undefined){
      return new Event(evt);
    } else {
      return new Event(evt , fn)
    }
  }

  //==== animation Events ======================================================

  animationEnd(fn) {
    this.element.addEventListener("webkitAnimationEnd", fn);
    this.element.addEventListener("animationend", fn);
  }

  animationStart(fn) {
    this.element.addEventListener("webkitAnimationEnd", fn);
    this.element.addEventListener("animationend", fn);
  }

  animationIteration(fn) {
    this.element.addEventListener("webkitAnimationEnd", fn);
    this.element.addEventListener("animationend", fn);
  }

  //==== animation Events ======================================================


  animate(duratian, direction, css) {
    //var my_css_class = { backgroundColor : 'blue', color : '#fff' };
    this.element.className = this.element.className + my_css_class;
  }

  animateClass(direction, duration) {
    var test = "";
  }

  // ==== Events ===============================================================

}

function $(x) {
  if (x.includes("<")) {
    return new singleElements(document.createElement(x.split("<")[1].split('>')[0]));
  } else if (x.includes(".")) {
    return document.getElementsByClassName(x.split('.')[0]);
  } else if (x.includes("#")) {
    return new singleElements(document.getElementById(x.split("#")[1]));
  } else if (x === undefined){
    return new singleElements(document.body);
  }
}
