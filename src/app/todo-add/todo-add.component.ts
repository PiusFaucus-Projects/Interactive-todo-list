import { Component, OnInit } from '@angular/core';
import {Output, EventEm}

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  newTodo = '';

  constructor() { }

  ngOnInit() {
  }

}
