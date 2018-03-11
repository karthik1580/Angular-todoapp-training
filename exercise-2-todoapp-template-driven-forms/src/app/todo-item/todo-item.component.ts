import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TODOItem } from '../shared/models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() public todoItem: TODOItem;
  @Output() public todoDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem.title);
  }
}
