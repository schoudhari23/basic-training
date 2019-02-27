var map1 = new Map();
var map2 = new Map();
var map3 = new Map();

var map11 = new Map();
var map22 = new Map();
var map33 = new Map();

var set1 = new Set();
var set2 = new Set();
var set3 = new Set();

var unq1 = new Set();
var unq2 = new Set();
var unq3 = new Set();


var pickedNumbers1 = [];
var pickedNumbers2 = [];
var pickedNumbers3 = [];

var check = new Array(30).fill(0);
var check1 = new Array(30).fill(0);
var check2 = new Array(30).fill(0);

var firstRow = 0,
    secondRow = 0,
    thirdRow = 0;

var first = false,
    second = false,
    third = false;

var firstRow1 = 0,
    secondRow1 = 0,
    thirdRow1 = 0;

var first1 = false,
    second1 = false,
    third1 = false;

var firstRow2 = 0,
    secondRow2 = 0,
    thirdRow2 = 0;

var first2 = false,
    second2 = false,
    third2 = false;


function randomNumbers() {
    var n = new Array(30);
    var nums = new Array(30);

    var sz = 0,
        sz1 = 0;
    while (set1.size != 30) {
        var randomNumber = Math.floor(Math.random() * 50);
        set1.add(randomNumber);
        if (set1.size == sz + 1) {
            nums[sz] = randomNumber;
            map1.set(nums[sz], sz);
            map11.set(sz, nums[sz]);
            sz++;
        }
    }

    while (unq1.size != 6) {
        var rnd = Math.floor(Math.random() * 30);
        unq1.add(rnd);
        if (unq1.size == sz1 + 1) {
            var style1 = document.getElementById("square" + rnd);
            style1.classList.add('block');
            pickedNumbers1.push(map11.get(rnd));
            check[rnd] = 1;
            sz1++;
        }
    }

    for (i = 0; i < 10; i++) {
        firstRow += check[i];
    }
    for (i = 10; i < 20; i++) {
        secondRow += check[i];
    }
    for (i = 20; i < 30; i++) {
        thirdRow += check[i]
    }


    for (i = 0; i < n.length; i++) {
        document.getElementById("square" + i).innerHTML = nums[i];
    }
}


function randomNumbers1() {
    var n = new Array(30);
    var nums = new Array(30);

    var sz = 0,
        sz2 = 0;
    while (set2.size != 30) {
        var randomNumber = Math.floor(Math.random() * 50);
        set2.add(randomNumber);
        if (set2.size == sz + 1) {
            nums[sz] = randomNumber;
            map2.set(nums[sz], sz);
            map22.set(sz, nums[sz]);
            sz++;
        }
    }

    while (unq2.size != 6) {
        var rnd = Math.floor(Math.random() * 30);
        unq2.add(rnd);
        if (unq2.size == sz2 + 1) {
            var style1 = document.getElementById("sqa" + rnd);
            style1.classList.add('block');
            pickedNumbers2.push(map22.get(rnd));
            check1[rnd] = 1;
            sz2++;
        }
    }

    for (i = 0; i < 10; i++) {
        firstRow1 += check1[i];
    }
    for (i = 10; i < 20; i++) {
        secondRow1 += check1[i];
    }
    for (i = 20; i < 30; i++) {
        thirdRow1 += check1[i]
    }

    for (i = 0; i < n.length; i++) {
        document.getElementById("sqa" + i).innerHTML = nums[i];
    }
}

function randomNumbers2() {
    var n = new Array(30);
    var nums = new Array(30);

    var sz = 0,
        sz2 = 0;
    while (set3.size != 30) {
        var randomNumber = Math.floor(Math.random() * 50);
        set3.add(randomNumber);
        if (set3.size == sz + 1) {
            nums[sz] = randomNumber;
            map3.set(nums[sz], sz);
            map33.set(sz, nums[sz]);
            sz++;
        }
    }

    while (unq3.size != 6) {
        var rnd = Math.floor(Math.random() * 30);
        unq3.add(rnd);
        if (unq3.size == sz2 + 1) {
            var style1 = document.getElementById("sqae" + rnd);
            style1.classList.add('block');
            pickedNumbers2.push(map33.get(rnd));
            check2[rnd] = 1;
            sz2++;
        }
    }

    for (i = 0; i < 10; i++) {
        firstRow2 += check2[i];
    }
    for (i = 10; i < 20; i++) {
        secondRow2 += check2[i];
    }
    for (i = 20; i < 30; i++) {
        thirdRow2 += check2[i]
    }

    for (i = 0; i < n.length; i++) {
        document.getElementById("sqae" + i).innerHTML = nums[i];
    }
}


function gen() {
    if (pickedNumbers1.length == 30) {
        alert("Player-1 wins the game!")
    } else if (pickedNumbers2.length == 30) {
        alert("Player-2 wins the game!")
    } else if (pickedNumbers3.length == 30) {
        alert("Player-3 wins the game!")
    } else {

        var selNum = Math.floor(Math.random() * 50);
        document.getElementById("selected_num").innerHTML = selNum;
        if (map1.has(selNum) && pickedNumbers1.indexOf(selNum) == -1) {
            pickedNumbers1.push(selNum);
            var k = map1.get(selNum);
            var style1 = document.getElementById("square" + k);
            style1.classList.add('sel-cell');
            check[k] = 1;
            if (k >= 0 && k < 10)
                firstRow += 1;
            if (k >= 10 && k < 20)
                secondRow += 1;
            if (k >= 20 && k < 30)
                thirdRow += 1;

            if (firstRow == 10 && first == false) {
                first = true;
                alert("Player-1 : First Row");
            }
            if (secondRow == 10 && second == false) {
                second = true;
                alert("Player-1 : Second Row");
            }
            if (thirdRow == 10 && third == false) {
                third = true;
                alert("Player-1 : Third Row");
            }
        }
        if (map2.has(selNum) && pickedNumbers2.indexOf(selNum) == -1) {
            pickedNumbers2.push(selNum);
            var k = map2.get(selNum);
            var style2 = document.getElementById("sqa" + k);
            style2.classList.add('sel-cell');
            check1[k] = 1;
            if (k >= 0 && k < 10)
                firstRow1 += 1;
            if (k >= 10 && k < 20)
                secondRow1 += 1;
            if (k >= 20 && k < 30)
                thirdRow1 += 1;

            if (firstRow1 == 10 && first1 == false) {
                first1 = true;
                alert("Player-2 : First Row");
            }
            if (secondRow == 10 && second1 == false) {
                second1 = true;
                alert("Player-2 : Second Row");
            }
            if (thirdRow == 10 && third1 == false) {
                third1 = true;
                alert("Player-2 : Third Row");
            }
        }
        if (map3.has(selNum) && pickedNumbers3.indexOf(selNum) == -1) {
            pickedNumbers3.push(selNum);
            var k = map3.get(selNum);
            var style1 = document.getElementById("sqae" + k);
            style1.classList.add('sel-cell');
            check2[k] = 1;
            if (k >= 0 && k < 10)
                firstRow2 += 1;
            if (k >= 10 && k < 20)
                secondRow2 += 1;
            if (k >= 20 && k < 30)
                thirdRow2 += 1;

            if (firstRow2 == 10 && first2 == false) {
                first2 = true;
                alert("Player-3 : First Row");
            }
            if (secondRow2 == 10 && second2 == false) {
                second2 = true;
                alert("Player-3 : Second Row");
            }
            if (thirdRow2 == 10 && third2 == false) {
                third2 = true;
                alert("Player-3 : Third Row");
            }
        }
    }
}