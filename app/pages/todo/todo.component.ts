import {Page, NavController, NavParams, ActionSheet} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/todo/todo.html'
})

export class Todo {
    constructor(private nav: NavController, private params: NavParams) {

    }

    newTodo: string;

    todoList: Array<{ title: string, priority: string, isDone: boolean }> = [{
        title: "Easy",
        priority: "black",
        isDone: false
    }];

    addToList(title: string) {
        this.todoList.push({ title: title, priority: "black", isDone: false });
    }

    deleteTodo(index: number) {
        this.showDeletePrompt(index);        
    }

    showDeletePrompt(index: number) {
        let actionSheet = ActionSheet.create({
            title: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.todoList.splice(index, 1);
                    }
                }, {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                        
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    }

}