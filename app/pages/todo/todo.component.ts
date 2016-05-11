import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/todo/todo.html'
})

export class Todo {
    constructor(private nav: NavController, private params: NavParams) {

    }
    
    newTodo: string;

    todoList: Array<{ title: string, priority: string, isDone: boolean }> = [{
        title:"Easy",
        priority: "black",
        isDone: false
    }];

    addToList(title: string) {
        this.todoList.push({ title: title, priority: "black", isDone: false });
    }
    
    deleteTodo(index: number){
        this.todoList.splice(index,1);
    }
}