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
var Todo = (function () {
    function Todo(nav, params) {
        this.nav = nav;
        this.params = params;
        this.todoList = [{
                title: "Easy",
                priority: "black",
                isDone: false
            }];
    }
    Todo.prototype.addToList = function (title) {
        this.todoList.push({ title: title, priority: "black", isDone: false });
    };
    Todo.prototype.deleteTodo = function (index) {
        this.showDeletePrompt(index);
    };
    Todo.prototype.showDeletePrompt = function (index) {
        var _this = this;
        var actionSheet = ionic_angular_1.ActionSheet.create({
            title: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.todoList.splice(index, 1);
                    }
                }, {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    };
    Todo = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/todo/todo.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], Todo);
    return Todo;
}());
exports.Todo = Todo;
