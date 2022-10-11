import { Component } from '@angular/core';
import {TodoModel} from "./models/todo-model";
import {TodoStorageService} from "./services/todo-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoItems: TodoModel[] = [];

  constructor(private todoStorage: TodoStorageService) {
  }

  addTodo(title: string){
    this.todoItems.push({title})
  }
}
