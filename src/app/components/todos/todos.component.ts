import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'

import { Todo } from '../../models/Todos';

@Component({
  // render components by selector
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  randomTodos:Todo[];
  constructor(private tS:TodoService) { 
    this.todos = [];
    this.randomTodos = [];
  }

  ngOnInit():void {
    this.todos = this.tS.getTodos()
  }

  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id)
  }

  addTodo(todo:Todo) {
    this.todos.push(todo)
  }
}
