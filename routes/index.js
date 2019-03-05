var express = require('express');
var router = express.Router();
require('console.html');
//console.html('<body><h1>Hello, world!</h1></body>');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

var food = ["chocolates", "chocolate"]
var medicine = ["headache"];

router.post('/', function (req, res) {
  var problem = req.body.problem;
  //res.write("Hello");
  //console.log(typeof problem);
  if (IsJsonString(problem)) {
    //console.log("JSON");
    var obj = JSON.parse(problem);
    //console.log(obj);
    printR(obj,res);
  } else {
    //console.log("plain");
    var strings = problem.split("\n");
    console.log(strings);
    var output = {};
    strings[0] = strings[0].replace(/(\r\n|\n|\r)/gm, "");
    output["name"] = strings[0];
    var arrayObj = new Array();
    for (var i = 1; i < strings.length; i++) {
      //console.log(strings[i]);
      var wor = strings[i].split(" ");
      //console.log(wor);
      var taxObj = {};
      taxObj["quantity"] = wor[0];
      if (wor.includes("imported")) {
        taxObj["imported"] = 1;
        var index = wor.indexOf("imported");
        wor.splice(index, 1);
        //console.log(wor);
        var objName = wor.slice(1, wor.length - 2);
        objName = objName.join(" ");
        //console.log(objName); 
        taxObj["name"] = objName;
      } else {
        var objName = wor.slice(1, wor.length - 2);
        objName = objName.join(" ");
        //console.log(objName);
        taxObj["name"] = objName;
      }
      if (wor.includes("chocolate") || wor.includes("chocolates")) {
        taxObj["category"] = "food";
      } else if (wor.includes("book") || wor.includes("books"))  {
        taxObj["category"] = "book";
      } else if (wor.includes("pills") || wor.includes("pill") || wor.includes("headache")) {
        taxObj["category"] = "medicine";
      } else {
        taxObj["category"] = "payTax";
      }

      var pri = wor[wor.length - 1].replace(/(\r\n|\n|\r)/gm, "");
     // console.log("SpePRICE:" + pri);
      taxObj['price'] = parseFloat(pri);
      //console.log(taxObj);
      arrayObj.push(taxObj);
      //output = jsonConcat(output, json1);
      //console.log(output);
    }
    // console.log("Arrayyyy:"+arrayObj);
    output["items"] = arrayObj;
    //console.log(output);
    printR(output,res);
  }

  //res.send('poasd');
});

module.exports = router;

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function printR(jsObj,res) {
  //res.write(jsObj+":");
  var factor = 0.05;
  res.write(jsObj["name"]);
  var totalSalesTax = 0;
  var totalPrice = 0;
  for (var i = 0; i < jsObj.items.length; i++) {

    if (jsObj.items[i].hasOwnProperty("imported")) {
      if (jsObj.items[i].category == 'food' || jsObj.items[i].category == 'medicine' || jsObj.items[i].category == 'book') {
        var x = Math.round((jsObj.items[i].price * jsObj.items[i].quantity * 0.05) / factor) * factor;
        totalSalesTax += x;
        var y = jsObj.items[i].price * jsObj.items[i].quantity + x;
        jsObj.items[i].price = Math.round(y * 100) / 100;
      } else {
        var x = Math.round((jsObj.items[i].price * jsObj.items[i].quantity * 0.15) / factor) * factor;
        totalSalesTax += x;
        var y = jsObj.items[i].quantity * jsObj.items[i].price + x;
        jsObj.items[i].price = Math.round(y * 100) / 100;
      }
      res.write("\n"+jsObj.items[i].quantity + " imported " + jsObj.items[i].name + ": " + jsObj.items[i].price);
      totalPrice += jsObj.items[i].price;
    } else {
      if (jsObj.items[i].category == 'food' || jsObj.items[i].category == 'medicine' || jsObj.items[i].category == 'book') {
        var y = jsObj.items[i].quantity * jsObj.items[i].price ;
        jsObj.items[i].price = Math.round(y * 100) / 100;
      } else {
        var x = Math.round((jsObj.items[i].price * jsObj.items[i].quantity * 0.10) / factor) * factor;
        totalSalesTax += x;
        var y = jsObj.items[i].price * jsObj.items[i].quantity + x;
        jsObj.items[i].price = Math.round(y * 100) / 100;
      }
      res.write("\n"+jsObj.items[i].quantity + " " + jsObj.items[i].name + ": " + jsObj.items[i].price);
      totalPrice += jsObj.items[i].price;
    }
  }
  res.write("\nSales Taxes: " + Math.round(totalSalesTax * 100) / 100);
  res.write("\nTotal: " + totalPrice);
  res.end();
}

function calcSales(itemPrice,quant,taxRate)
{
  var factor = 0.5
  var x = Math.round((itemPrice * quant * taxRate) / factor) * factor;
  totalSalesTax += x;
  var y =Itemprice * quant + x;
  var price = Math.round(y * 100) / 100;
  return price;
}