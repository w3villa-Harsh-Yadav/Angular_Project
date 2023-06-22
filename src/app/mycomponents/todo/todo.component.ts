import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  localItem: string
  name:String = "Hello";
  todos:Todo[];
  constructor(){
    this.todos = []
    this.localItem = localStorage.getItem('todos') || ""
    if(this.localItem == null){
      this.todos = []
    }else{
      console.log(this.localItem)
      this.todos = JSON.parse(this.localItem)
    }
    // this.todos = [
    //   {
    //     sno:1,
    //     title:"This is title1",
    //     desc:"this is desc1",
    //     active: true
    //   },
    //   {
    //     sno:2,
    //     title:"This is title2",
    //     desc:"this is desc2",
    //     active: true
    //   },
    //   {
    //     sno:3,
    //     title:"This is title3",
    //     desc:"this is desc3",
    //     active: true
    //   }
    // ]
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    console.log(this.todos)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  addToDo(todo: Todo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  taskCompleted(todo: Todo){
    console.log(todo.active)
    todo.active = !todo.active
    console.log(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
