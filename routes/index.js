var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

var food = ["chocolates","chocolate"]
var medicine = ["headache"];

router.post('/', function(req, res) {
  var problem = req.body.problem;
  //console.log(typeof problem);
  if(IsJsonString(problem))
  {
    console.log("JSON");
    var obj = JSON.parse(problem);
    //console.log(obj);
    printR(obj);
  } else {
    console.log("plain");
    var strings = problem.split("\n");
    console.log(strings);
    var output = {};
    strings[0] = strings[0].replace(/(\r\n|\n|\r)/gm, "");
    output["name"] = strings[0];
    var arrayObj = new Array();
    for(var i=1;i<strings.length;i++)
    {
      //console.log(strings[i]);
      var wor = strings[i].split(" ");
      //console.log(wor);
      var taxObj = {};
      taxObj["quantity"] = wor[0];
      if(wor.includes("imported")) {
        taxObj["imported"] = 1;
        var index = wor.indexOf("imported");
        wor.splice(index, 1);
        //console.log(wor);
        var objName = wor.slice(1,wor.length-2);
        objName = objName.join(" ");
        //console.log(objName); 
        taxObj["name"] = objName;
      } else {
        var objName = wor.slice(1,wor.length-2);
        objName = objName.join(" ");
        //console.log(objName);
        taxObj["name"] = objName;
      }
      if(wor.includes("chocolate") || wor.includes("chocolates")) {
        taxObj["category"] = "food";
      } else if(wor.includes("book")) {
        taxObj["category"] = "book";
      } else if(wor.includes("pills")) {
        taxObj["category"] = "medicine";
      } else {
        taxObj["category"] = "payTax";
      }

      var pri = wor[wor.length-1].replace(/(\r\n|\n|\r)/gm, "");
      taxObj['price'] = parseFloat(pri);
      //console.log(taxObj);
      arrayObj.push(taxObj);
      //output = jsonConcat(output, json1);
      //console.log(output);
    }
   // console.log("Arrayyyy:"+arrayObj);
    output["items"] = arrayObj;
    //console.log(output);
    printR(output);
  }

  res.render('result');
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

function printR(jsObj)
{
  console.log(jsObj);
  console.log(jsObj["name"]+":");
  for(var i=0;i<jsObj.items.length;i++)
  {
    if(jsObj.items[i].hasOwnProperty("imported")) {
      console.log(jsObj.items[i].quantity+" imported "+jsObj.items[i].name+": "+jsObj.items[i].price);
    } else {
      console.log(jsObj.items[i].quantity+" "+jsObj.items[i].name+": "+jsObj.items[i].price);
    }
  }
}