"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (newName) {
        return this.name = newName;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (newModel) {
        return this.model = newModel;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        return this.trademark = newTrademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        return this.sdSize = sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (newcolor) {
        return this.color = newcolor;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setIs5G = function (is5g) {
        return this.is5G = is5g;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNumber = function (newcamera) {
        return this.cameraNumber = newcamera;
    };
    Mobile.prototype.mostrarTodos = function () {
        return this.name + " " + this.model + " " + this.trademark + " " + this.color + " " + this.is5G + " " + this.cameraNumber + " " + "Eur" + this.price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
