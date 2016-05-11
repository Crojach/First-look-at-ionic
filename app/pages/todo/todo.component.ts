import {Page, NavController, NavParams, ActionSheet, Alert, Modal, Toast} from 'ionic-angular';
import {TodoModal} from './todoModal.component';

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

    addToList(title: string, priority: string) {
        this.todoList.push({ title: title, priority: priority, isDone: false });
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
                        this.showDeleteMessage();
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
                {
                    name: 'priority',
                    placeholder: 'Priority'
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
                        this.addToList(data.title, data.priority)
                    }
                }
            ]
        });
        this.nav.present(prompt)
    }

    showDeleteMessage() {
        let toast = Toast.create({
            message: 'Task has been deleted',
            duration: 3000
        });

        toast.onDismiss(() => {
            console.log('Dismissed toast');
        });

        this.nav.present(toast);
    }

    showDetails(selectedTodo: any) {
        let modal = Modal.create(TodoModal, { data: selectedTodo });
        this.nav.present(modal)
    }

}