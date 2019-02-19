// Problem 3 : Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(obj) {
    var newObj = {};
    for(var key in obj) {
        if(obj[key].value !== null && typeof obj[key] === 'object') {
            var temp = flatten(obj[key]);
            for (var key2 in temp) {
                newObj[key+"."+key2] = temp[key2];
            }
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
