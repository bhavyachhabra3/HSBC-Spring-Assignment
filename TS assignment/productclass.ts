class product{
    prodcode:number;
    prodcost:number;

    constructor(prodcode:number,prodcost:number){
        this.prodcode=prodcode;
        this.prodcost=prodcost;
    }
    /*function display(){
     console.log(this.prodcode+this.prodcost);   
    }*/

    disp(){
        console.log(this.prodcode+" "+this.prodcost);
    }
}
function caller4(){
    var list:product[]=[new product(1,70),new product(2,99),new product(3,199),new product(4,55)];
    list.forEach((prod) => {
        prod.disp();
    });
}
caller4()
