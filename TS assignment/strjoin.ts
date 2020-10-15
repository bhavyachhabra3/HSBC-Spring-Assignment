//method 1
function acs(arr){
    var latest=new Array();
    for(var i=1;i<arr.length;i++){
        latest.push(arr[i]);
    }
    var sorted=latest.sort();
    var final=new Array();
    for(var j=0;j<sorted.length;j++){
        final.push(sorted[j]);
        final.push(arr[0]);
    }
    final.pop();
    /*for(var a=0;a<final.length;a++){
        console.log(final[a]);
    }*/
    console.log(...final);
}
function caller3(){
    var arr=["#","bh","av","ya"];
    acs(arr);
}
caller3()

//method 2
function strJoin(delimiter:string,...names:string[]):string{
    return names.sort().join(delimiter);
}
console.log(strJoin("-","bh","av","ya"));
