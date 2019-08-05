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
  todos: Array<TodoItem> = [{Task: 'Task 1', IsComplete: false}];

  @property()
  filter: string = VisibilityFilters.SHOW_ALL;

  @property()
  task: string = '';

  html:any;

  constructor(){
    super();

    this.html = html;
  }

  private _handleClick(event: any) {
    this.todos.push({Task: this.task, IsComplete: false});
  }

  private _handleKeyUp_taskInput(event: any) {
    console.log(event.key);
  }

  private _handleChange_taskInput(event: any) {
    console.log('Change!!');
    this.task = event.target.value;
  }

  render() {
    return this.getTemplateResult();
  }

  getTemplateResult(){
    var tag = html;

    let code: string = 'tag`' + view + "`";

    var result = eval(code);

    return result;
  }
}

customElements.define('todo-view', TodoList);
