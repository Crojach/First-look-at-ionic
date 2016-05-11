import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/todo/todo.html'
})

export class Todo {
    constructor(private nav: NavController, private params: NavParams) {
        
    }
}