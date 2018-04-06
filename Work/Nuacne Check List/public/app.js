class Item {
  constructor(content, index, url) {
    this.content = content;
    this.url = url;
    this.index = list.length;
  }
}

class List {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  addItem(content, url) {
    var item = new Item(content, this.length, url);
    list.addItemToDom(item)
    this.list.push(item)
    this.length++;
    this.updateList();
  }

  removeItem(index) {
    this.list.splice(index, 1);
  }

  getListFromServer() {
    $.ajax({
      url: '/list',
      success: function(d) {
        for (var i = 0; i < d.list.length; i++) {
          window.list.addItem(d.list[i].content, d.list[i].url);
        }
      },
    });
  }

  addItemToDom(obj) {
    var con = $("<tr>").attr("id", "item" + obj.index);
    var text = $("<td>").text(obj.content).addClass('center');
    var link = $("<a>").attr("href", "https://jira.touchcommerce.com/browse/CMRATT-" + obj.url).text(obj.url)
    var urlCon = $("<td>");
    var checkBox = $("<input>").prop("type", "checkbox").attr("index", obj.index);

    $("#checkList").append(con);
    checkBox.click(function(e) {
      var i = e.target.getAttribute('index');
      $("#item" + i).remove()
      window.list.removeItem(i)
      window.list.updateList();
    });
    var check = $("<td>").append(checkBox);
    urlCon.append(link);
    con.append(check, text, urlCon);
  }

  updateList() {
    $.ajax({
      type: "POST",
      url: "/savedata",
      data: JSON.stringify(window.list)
    }).done(function(d) {
      console.log("Yes" ,d )
    });
  }
}

class Task {
  constructor() {
    this.tasks = [];
  }
  addTasks(task) {
    this.tasks.push(task)
  }
}


'use strict';

$("#addItem").click(function() {
  list.addItem($("#itemInput").val(), $("#cmr").val());
});



var list = new List();
list.getListFromServer()
var tasks = new Task();
tasks.addTasks(list)


var canvas = document.getElementById("html-canvas");
var circles = [];
var radius = 50;
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
var context = canvas.getContext("2d");
context.beginPath();
context.arc(50,10,10,0,2*Math.PI)
context.closePath();
context.stroke();
