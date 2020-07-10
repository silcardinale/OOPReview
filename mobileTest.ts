import {Mobile} from "./mobile";

let mobile1 = new Mobile ("Nokia","3210","Nokia","2GB","Black",false,0,66);
let mobile2 = new Mobile ("Iphone","3","Apple","2GB","Gold",false,1,120);
let mobile3 = new Mobile ("Samsung","Galaxy 10","Samsung","2GB","White",true,2,970);

console.log(mobile1.getName() +" " + mobile1.getModel() + " " +  mobile1.getTrademark() + " " + mobile1.getColor() + " " + mobile1.getIs5G() + " " + mobile1.getCameraNumber() + " " + "Eur" + mobile1.getPrice());

mobile1.setCameraNumber(4);
console.log(mobile1.getCameraNumber());
mobile1.setIs5G(true);
console.log(mobile1.getIs5G());

console.log(mobile1.mostrarTodos());
console.log(mobile2.mostrarTodos());
console.log(mobile3.mostrarTodos());

console.log(mobile1.Caracteristicas());
console.log(mobile2.Caracteristicas());
console.log(mobile3.Caracteristicas());
