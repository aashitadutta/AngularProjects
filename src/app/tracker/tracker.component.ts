import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  done : boolean;
  todos : any;
  newToDo : string;
  newToDoObj : any;
  error : boolean;
  TODOS = [];
  constructor(){
    this.todos = [];
    this.newToDo = '';
    this.error = false;
  }
  addMore(){
if(this.newToDo){
  this.todos.push({
    desc: this.newToDo
  });
}
  }

clearAll(){
  this.todos = [];
}
  }
  //Define your variables done,todos,newToDo,newToDoObj,error
  //Define your constructor here with todos as [] ,newToDo as '' and error as false
  //Define your addMore function here
  //Define your clearAll function here


