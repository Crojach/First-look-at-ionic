import {Page,ViewController, NavParams} from 'ionic-angular'

@Page({
  template: `
  <ion-content padding>
    <h2>Todo title: {{data.title}}</h2>
    <h2 [style.color]="data.priority"> And my color is {{data.priority}} </h2>
    <button (click)="close()">Close</button>
  </ion-content>`
})
export class TodoModal {
  data: any;
  constructor(private viewCtrl: ViewController, private params: NavParams) {
    this.viewCtrl = viewCtrl;
    this.data = params.get('data');
  }
  
  close() {
    this.viewCtrl.dismiss();
  }
}