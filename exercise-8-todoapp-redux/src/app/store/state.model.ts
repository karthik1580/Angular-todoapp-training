import { TodoListState } from '@app/core/todo-list/redux-api/todo-list.state';

/* The model of the store */
export class AppState {

    constructor() {
        this.todoList = new TodoListState();
    }

    todoList?: TodoListState;
}
