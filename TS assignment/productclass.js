var product = /** @class */ (function () {
    function product(prodcode, prodcost) {
        this.prodcode = prodcode;
        this.prodcost = prodcost;
    }
    product.prototype.disp = function () {
        console.log(this.prodcode + " " + this.prodcost);
    };
    return product;
}());
function caller4() {
    var list = [new product(1, 70), new product(2, 99), new product(3, 199), new product(4, 55)];
    list.forEach(function (prod) {
        prod.disp();
    });
}
caller4();
