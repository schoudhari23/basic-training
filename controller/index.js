var express = require('express');

var food = ["chocolates", "chocolate"]
var medicine = ["headache"];

var abc = new String;

var method = function (problem) {
  if (IsJsonString(problem)) {
    var obj = JSON.parse(problem);
    printR(obj);
  } else {
    var obj = StringToJSON(problem)
    printR(obj);
  }
  return abc;
}

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function StringToJSON(problem) {
  var strings = problem.split("\n");
  var output = {};
  strings[0] = strings[0].replace(/(\r\n|\n|\r)/gm, "");
  output["name"] = strings[0];
  var arrayObj = new Array();
  for (var i = 1; i < strings.length; i++) {
    var wor = strings[i].split(" ");
    var taxObj = {};
    taxObj["quantity"] = wor[0];
    if (wor.includes("imported")) {
      taxObj["imported"] = 1;
      var index = wor.indexOf("imported");
      wor.splice(index, 1);
      var objName = wor.slice(1, wor.length - 2);
      objName = objName.join(" ");
      taxObj["name"] = objName;
    } else {
      var objName = wor.slice(1, wor.length - 2);
      objName = objName.join(" ");
      taxObj["name"] = objName;
    }
    if (wor.includes("chocolate") || wor.includes("chocolates")) {
      taxObj["category"] = "food";
    } else if (wor.includes("book") || wor.includes("books")) {
      taxObj["category"] = "book";
    } else if (wor.includes("pills") || wor.includes("pill") || wor.includes("headache")) {
      taxObj["category"] = "medicine";
    } else {
      taxObj["category"] = "payTax";
    }

    var pri = wor[wor.length - 1].replace(/(\r\n|\n|\r)/gm, "");
    taxObj["price"] = parseFloat(pri);
    arrayObj.push(taxObj);
  }

  output["items"] = arrayObj;
  return output;
}

var totalSalesTax = 0;

function printR(jsObj) {
  var factor = 0.05;
  abc += jsObj["name"];

  var totalPrice = 0;
  for (var i = 0; i < jsObj.items.length; i++) {

    if (jsObj.items[i].hasOwnProperty("imported")) {
      if (jsObj.items[i].category == 'food' || jsObj.items[i].category == 'medicine' || jsObj.items[i].category == 'book') {
        jsObj.items[i].price = calc(jsObj.items[i].price, jsObj.items[i].quantity, 0.05)
      } else {
        jsObj.items[i].price = calc(jsObj.items[i].price, jsObj.items[i].quantity, 0.15)
      }
      abc += "\n" + jsObj.items[i].quantity + " imported " + jsObj.items[i].name + ": " + jsObj.items[i].price;
      totalPrice += jsObj.items[i].price;
    } else {
      if (jsObj.items[i].category == 'food' || jsObj.items[i].category == 'medicine' || jsObj.items[i].category == 'book') {
        jsObj.items[i].price = calc(jsObj.items[i].price, jsObj.items[i].quantity, 0)
      } else {
        jsObj.items[i].price = calc(jsObj.items[i].price, jsObj.items[i].quantity, 0.1)
      }
      abc += "\n" + jsObj.items[i].quantity + " " + jsObj.items[i].name + ": " + jsObj.items[i].price;
      totalPrice += jsObj.items[i].price;
    }
  }
  abc += "\nSales Taxes: " + Math.round(totalSalesTax * 100) / 100;
  abc += "\nTotal: " + totalPrice;
}

function calc(price, quant, rate) {
  var factor = 0.05;
  var x = Math.round((price * quant * rate) / factor) * factor;
  totalSalesTax += x;
  var y = price * quant + x;
  return Math.round(y * 100) / 100;
}

module.exports = method;