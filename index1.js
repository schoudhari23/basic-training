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


var picked_numbers1 = [];
var picked_numbers2 = [];
var picked_numbers3 = [];
var check = new Array(30).fill(0);
var check1 = new Array(30).fill(0);
var check2 = new Array(30).fill(0);

var first_row = 0,
    second_row = 0,
    third_row = 0;
var fr = false,
    sr = false,
    tr = false;

var first_row1 = 0,
    second_row1 = 0,
    third_row1 = 0;
var fr1 = false,
    sr1 = false,
    tr1 = false;

var first_row2 = 0,
    second_row2 = 0,
    third_row2 = 0;
var fr2 = false,
    sr2 = false,
    tr2 = false;


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
            picked_numbers1.push(map11.get(rnd));
            check[rnd] = 1;
            sz1++;
        }
    }

    for (i = 0; i < 10; i++) {
        first_row += check[i];
    }
    for (i = 10; i < 20; i++) {
        second_row += check[i];
    }
    for (i = 20; i < 30; i++) {
        third_row += check[i]
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
            picked_numbers2.push(map22.get(rnd));
            check1[rnd] = 1;
            sz2++;
        }
    }

    for (i = 0; i < 10; i++) {
        first_row1 += check1[i];
    }
    for (i = 10; i < 20; i++) {
        second_row1 += check1[i];
    }
    for (i = 20; i < 30; i++) {
        third_row1 += check1[i]
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
            picked_numbers2.push(map33.get(rnd));
            check2[rnd] = 1;
            sz2++;
        }
    }

    for (i = 0; i < 10; i++) {
        first_row2 += check2[i];
    }
    for (i = 10; i < 20; i++) {
        second_row2 += check2[i];
    }
    for (i = 20; i < 30; i++) {
        third_row2 += check2[i]
    }

    for (i = 0; i < n.length; i++) {
        document.getElementById("sqae" + i).innerHTML = nums[i];
    }
}


function gen() {
    if (picked_numbers1.length == 30) {
        alert("Player-1 wins the game!")
    } else if (picked_numbers2.length == 30) {
        alert("Player-2 wins the game!")
    } else if (picked_numbers3.length == 30) {
        alert("Player-3 wins the game!")
    } else {

        var sel_num = Math.floor(Math.random() * 50);
        document.getElementById("selected_num").innerHTML = sel_num;
        if (map1.has(sel_num) && picked_numbers1.indexOf(sel_num) == -1) {
            picked_numbers1.push(sel_num);
            var k = map1.get(sel_num);
            var style1 = document.getElementById("square" + k);
            style1.classList.add('sel-cell');
            check[k] = 1;
            if (k >= 0 && k < 10)
                first_row += 1;
            if (k >= 10 && k < 20)
                second_row += 1;
            if (k >= 20 && k < 30)
                third_row += 1;

            if (first_row == 10 && fr == false) {
                fr = true;
                alert("Player-1 : First Row");
            }
            if (second_row == 10 && sr == false) {
                sr = true;
                alert("Player-1 : Second Row");
            }
            if (third_row == 10 && tr == false) {
                tr = true;
                alert("Player-1 : Third Row");
            }
        }
        if (map2.has(sel_num) && picked_numbers2.indexOf(sel_num) == -1) {
            picked_numbers2.push(sel_num);
            var k = map2.get(sel_num);
            var style2 = document.getElementById("sqa" + k);
            style2.classList.add('sel-cell');
            check1[k] = 1;
            if (k >= 0 && k < 10)
                first_row1 += 1;
            if (k >= 10 && k < 20)
                second_row1 += 1;
            if (k >= 20 && k < 30)
                third_row1 += 1;

            if (first_row1 == 10 && fr1 == false) {
                fr1 = true;
                alert("Player-2 : First Row");
            }
            if (second_row == 10 && sr == false) {
                sr = true;
                alert("Player-2 : Second Row");
            }
            if (third_row == 10 && tr == false) {
                tr = true;
                alert("Player-2 : Third Row");
            }
        }
        if (map3.has(sel_num) && picked_numbers3.indexOf(sel_num) == -1) {
            picked_numbers3.push(sel_num);
            var k = map3.get(sel_num);
            var style1 = document.getElementById("sqae" + k);
            style1.classList.add('sel-cell');
            check2[k] = 1;
            if (k >= 0 && k < 10)
                first_row2 += 1;
            if (k >= 10 && k < 20)
                second_row2 += 1;
            if (k >= 20 && k < 30)
                third_row2 += 1;

            if (first_row2 == 10 && fr2 == false) {
                fr2 = true;
                alert("Player-3 : First Row");
            }
            if (second_row2 == 10 && sr2 == false) {
                sr2 = true;
                alert("Player-3 : Second Row");
            }
            if (third_row2 == 10 && tr2 == false) {
                tr2 = true;
                alert("Player-3 : Third Row");
            }
        }
    }
}