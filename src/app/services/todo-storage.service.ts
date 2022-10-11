import { Injectable } from '@angular/core';
import {TodoModel} from "../models/todo-model";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todoItems: TodoModel[] = [
    {title: 'angular'},
    {title: 'react'},
  ];

  constructor() { }

  addTodo(title: string){
    this.todoItems.push({title})
  }
}
