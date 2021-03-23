import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Todo } from '../models/Todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

  constructor(private http:HttpClient) { 
    this.todosUrl
  }

  getTodos() {
    return [
      {
        id: 1,
        title: "Look for jobs I'd be great at",
        completed:true
      },
      {
        id: 2,
        title: "Apply, and let them know you'll be a great employee",
        completed:true
      },
      {
        id: 3,
        title: "Interview, and show them how committed you are",
        completed:true
      },
      {
        id: 3,
        title: "Land the Job",
        completed: false
      },
      {
        id: 3,
        title: "Be the best hire all year.",
        completed: false
      }
    ]

  }
  
  getRandomTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);

  }
}
