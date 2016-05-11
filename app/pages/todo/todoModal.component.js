"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var TodoModal = (function () {
    function TodoModal(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.data = params.get('data');
    }
    TodoModal.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TodoModal = __decorate([
        ionic_angular_1.Page({
            template: "\n  <ion-content padding>\n    <h2>Todo title: {{data.title}}</h2>\n    <h2 [style.color]=\"data.priority\"> And my color is {{data.priority}} </h2>\n    <button (click)=\"close()\">Close</button>\n  </ion-content>"
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.ViewController, ionic_angular_1.NavParams])
    ], TodoModal);
    return TodoModal;
}());
exports.TodoModal = TodoModal;
