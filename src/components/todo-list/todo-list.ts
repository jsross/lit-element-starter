import {
  LitElement, html, customElement, property
} from 'lit-element';
import * as view from "./template.html"
import {TodoItemElement} from '../todo-item/todo-item.js';
import {TodoItem} from '../../models/todo-item';
var cloneDeep = require('lodash.clonedeep');

@customElement('todo-list')
export class TodoList extends LitElement {

  @property({type: Array})
  private _todos: Array<TodoItem> = [];

  private _html: any;

  constructor(){
    super();
    this._html = html;
  }

  get value(): Array<TodoItem> {
    return cloneDeep(this._todos);
  }

  set value(value: Array<TodoItem>) {
      this._todos = cloneDeep(value);
  }

  public addTask(value: string) {
    this._todos.push({task: value, isComplete: false});
    this.requestUpdate();
  }

  private _handleChange_todoItem(event: Event) {
    console.log(event);

    var changEvent = new Event('change');

    this.dispatchEvent(changEvent);
  }

  render() {
    return this.getTemplateResult();
  }

  private getTemplateResult(){
    let code: string = 'this._html`' + view + "`";

    var result = eval(code);

    return result;
  }
}