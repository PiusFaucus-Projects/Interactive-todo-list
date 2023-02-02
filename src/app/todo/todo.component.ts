import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Output, EvenEmitter} from @a

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;

  constructor() { }

  ngOnInit() {
  }

}
