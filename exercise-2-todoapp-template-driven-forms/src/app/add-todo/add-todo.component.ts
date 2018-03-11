import { TodoListService } from './../core/todo-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { TODOItem } from '../shared/models/todo-item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

 private editingIndex = -1;

  private _currentTODO: TODOItem = new TODOItem('', '');
  public get currentTODO(): TODOItem {
    return this._currentTODO;
  }
  @Input() public set currentTODO(value: TODOItem) {
    this._currentTODO = Object.assign({}, value);
    this.editingIndex = this.todoListService.todoList.findIndex(todo => todo.title === value.title);
  }

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  save(form: NgForm) {

    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }

    const currentTODOClone = Object.assign({}, this.currentTODO);
    if (this.isEditing()) {
      this.todoListService.todoList[this.editingIndex] = currentTODOClone;
      this.setAdding();
      return;
    }

    this.todoListService.todoList.push(currentTODOClone);
    this.currentTODO = new TODOItem('', '');
    form.resetForm();
  }

  private setAdding() {
    this.editingIndex = -1;
  }

  private isEditing() {
    return this.editingIndex !== -1;
  }
}
