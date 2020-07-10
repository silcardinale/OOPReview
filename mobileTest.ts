import {Mobile} from "./mobile";

let mobile1 = new Mobile ("Nokia","3210","Nokia","2GB","Black",false,0,66);
let mobile2 = new Mobile ("Iphone","3","Apple","2GB","Gold",false,1,120);
let mobile3 = new Mobile ("Samsung","Galaxy 10","Samsung","2GB","White",true,2,970);

console.log(mobile1.name +" " + mobile1.model + " " +  mobile1.trademark + " " + mobile1.color + " " + mobile1.is5G + " " + mobile1.cameraNumber + " " + "Eur" + mobile1.price);
console.log(mobile2.name +" " + mobile2.model + " " +  mobile2.trademark + " " + mobile2.color + " " + mobile2.is5G + " " + mobile2.cameraNumber + " " + "Eur" + mobile2.price);
console.log(mobile3.name +" " + mobile3.model + " " +  mobile3.trademark + " " + mobile3.color + " " + mobile3.is5G + " " + mobile3.cameraNumber + " " + "Eur" + mobile3.price);

mobile1.setCameraNumber(4);
console.log(mobile1.getCameraNumber());
mobile1.setIs5G(true);
console.log(mobile1.getIs5G());

console.log(mobile1.mostrarTodos());
console.log(mobile2.mostrarTodos());
console.log(mobile3.mostrarTodos());