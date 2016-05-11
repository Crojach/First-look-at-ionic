import {Page, NavController, NavParams, ActionSheet, Alert} from 'ionic-angular';

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

    showNewTodoPrompt() {
        let prompt = Alert.create({
            title: 'New todo',
            message: "Enter a name for a new task",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        this.addToList(data.title)
                    }
                }
            ]
        });
        this.nav.present(prompt)
    }
}