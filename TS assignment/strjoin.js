//method 1
function strJoin(delimiter) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return names.sort().join(delimiter);
}
console.log(strJoin("-", "bh", "av", "ya"));
//method 2
function acs(arr) {
    var latest = new Array();
    for (var i = 1; i < arr.length; i++) {
        latest.push(arr[i]);
    }
    var sorted = latest.sort();
    var final = new Array();
    for (var j = 0; j < sorted.length; j++) {
        final.push(sorted[j]);
        final.push(arr[0]);
    }
    final.pop();
    /*for(var a=0;a<final.length;a++){
        console.log(final[a]);
    }*/
    console.log.apply(console, final);
}
function caller3() {
    var arr = ["#", "bh", "av", "ya"];
    acs(arr);
}
caller3();
