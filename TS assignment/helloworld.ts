var message:string="Hello World";
var arr:number[]=[1,3,4,5,6];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(var i of arr)
    console.log(i);
console.log("check "+message);