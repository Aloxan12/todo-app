import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoTitle: string = '';
  @Output() todoTitleSubmit = new EventEmitter<string>()
  constructor() {}

  ngOnInit(): void {
  }

  submitTodo(){
    this.todoTitleSubmit.emit(this.todoTitle)
  }

}
