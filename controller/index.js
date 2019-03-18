'use strict';

const models = require('../models');

let food = [`chocolates`, `chocolate`]
let medicine = [`headache`];

let abc = new String;

const method = (problem) => {
  if (IsJsonString(problem)) {
    let obj = JSON.parse(problem);
    printR(obj);
  } else {
    let obj = StringToJSON(problem);
    printR(obj);
  }
  return abc;
}

const IsJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

let output = {};

let StringToJSON = (problem) => {
  let strings = problem.split(`\n`);
  let arrayObj = new Array();

  strings[0] = strings[0].replace(/(\r\n|\n|\r)/gm, ``);
  output[`name`] = strings[0];

  for (let i = 1; i < strings.length; i++) {
    let wor = strings[i].split(` `);
    let taxObj = {};

    taxObj[`quantity`] = wor[0];

    if (wor.includes(`imported`)) {
      taxObj[`imported`] = true;
      let index = wor.indexOf(`imported`);
      wor.splice(index, 1);
    } else {
      taxObj[`imported`] = false;
    }


    let objName = wor.slice(1, wor.length - 2);
    objName = objName.join(` `);
    taxObj[`name`] = objName;


    if (wor.includes(`chocolate`) || wor.includes(`chocolates`)) {
      taxObj[`category`] = `food`;
    } else if (wor.includes(`book`) || wor.includes(`books`)) {
      taxObj[`category`] = `book`;
    } else if (wor.includes(`pills`) || wor.includes(`pill`) || wor.includes(`headache`)) {
      taxObj[`category`] = `medicine`;
    } else {
      taxObj[`category`] = `payTax`;
    }

    let pri = wor[wor.length - 1].replace(/(\r\n|\n|\r)/, "");
    taxObj[`price`] = parseFloat(pri);
    arrayObj.push(taxObj);
  }
  output[`items`] = arrayObj;
  return output;
}

let totalSalesTax = 0;

let printR = (jsObj) => {
  let factor = 0.05;
  let totalPrice = 0;
  //console.log(jsObj);

  abc += `${jsObj["name"]}`;
  for (let i = 0; i < jsObj.items.length; i++) {
    let currItem = jsObj.items[i];
    let {quantity, imported, name, category, price} = currItem;
    if (imported == true) {
      if (category == `food` || category == `medicine` || category == `book`) {
        price = calc(price, quantity, 0.05)
      } else {
        price = calc(price, quantity, 0.15)
      }
      abc += `\n${quantity} imported ${name} : ${price}`;
      totalPrice += price;
    } else {
      if (category == `food` || category == `medicine` || category == `book`) {
        price = calc(price, quantity, 0)
      } else {
        price = calc(price, quantity, 0.1)
      }
      abc += `\n${quantity} ${name} : ${price}`;
      totalPrice += price;
    }
  }
  abc += `\nSales Taxes: ${Math.round(totalSalesTax * 100) / 100}`;
  abc += `\nTotal: ${totalPrice}`;
}

let calc = (price, quant, rate) => {
  let factor = 0.05;
  let x = Math.round((price * quant * rate) / factor) * factor;
  totalSalesTax += x;
  let y = price * quant + x;
  return Math.round(y * 100) / 100;
}

module.exports = {
  method
};