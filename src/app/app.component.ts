import { Component } from '@angular/core';
import {TodoModel} from "./models/todo-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoItems: TodoModel[] = [
    {title: 'angular'},
    {title: 'react'},
  ];
}
