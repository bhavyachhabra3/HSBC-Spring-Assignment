function findmin(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
function findmax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
function avg(arr) {
    var sum = 0;
    for (var j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    var r = sum / arr.length;
    console.log(r);
}
function caller1() {
    var arr = [10, 20, 30, 40, 50];
    findmin(arr);
    findmax(arr);
    avg(arr);
}
caller1();
