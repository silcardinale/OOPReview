"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobileA = new mobile_1.Mobile("Nokia", "3210", "Nokia", "2GB", "Black", false, 0, 66);
var mobileB = new mobile_1.Mobile("Iphone", "3", "Apple", "2GB", "Gold", false, 1, 120);
var mobileC = new mobile_1.Mobile("Samsung", "Galaxy 10", "Samsung", "2GB", "White", true, 2, 970);
console.log(mobileA.mostrarTodos());
console.log(mobileB.mostrarTodos());
console.log(mobileC.mostrarTodos());
var mobiles = [mobileA, mobileB, mobileC];
for (var i = 0; i < mobiles.length; i++) {
    console.log(mobiles[i].Caracteristicas());
}
