import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!:Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter()

  onClickDelete(todo: Todo){
    this.todoDelete.emit(todo)
  }

  onClickCheckBox(todo: Todo){
    this.todoDone.emit(todo)
  }

}
