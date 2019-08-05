import * as ts from "typescript";
import {
  LitElement, html, customElement, property
} from 'lit-element';
import * as view from "./template.html"
import {TodoItemElement} from '../todo-item/todo-item.js';
import {TodoItem} from '../../models/todo-item';

const VisibilityFilters = { 
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

export class TodoList extends LitElement {
  @property()
  Todos: Array<TodoItem> = [{Task: 'Task 1', IsComplete: false}];

  @property()
  Filter: string = VisibilityFilters.SHOW_ALL;

  @property()
  Task: string = '';

  private _html: any;

  constructor(){
    super();
    this._html = html;
  }

  private _handleClick(event: any) {
    this.Todos.push({Task: this.Task, IsComplete: false});
  }

  private _handleKeyUp_taskInput(event: any) : void {
    console.debug('_handleKeyUp_taskInput() ' + event.key);
  }

  private _handleChange_taskInput(event: any) {
    console.debug('_handleChange_taskInput()');

    this.Task = event.target.value;
  }

  render() {
    return this.getTemplateResult();
  }

  getTemplateResult(){
    let code: string = 'this._html`' + view + "`";

    var result = eval(code);

    return result;
  }
}

customElements.define('todo-view', TodoList);
