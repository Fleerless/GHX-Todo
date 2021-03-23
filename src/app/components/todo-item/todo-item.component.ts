import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'

import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() Todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private tdS:TodoService) { 
    this.Todo = {
      id: 0,
      title: '',
      completed: false
    }
  }

  ngOnInit(): void {
  }

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete ': this.Todo.completed
    }
    return classes;
  }

  onToggle(Todo:any) {
    Todo.completed = !Todo.completed
  }
  onDelete(Todo:any) {
    this.deleteTodo.emit(Todo)
    
  }

}
