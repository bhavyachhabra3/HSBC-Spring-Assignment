function sqrarr(arr){
var sqr= new Array();
for(var i=0;i<arr.length;i++){
    var sq=arr[i]*arr[i];
    sqr.push(sq);
}
console.log(sqr);
}
function caller2(){
    var arr:number[]=[1,2,3,4,5];
    sqrarr(arr);
}
caller2()
