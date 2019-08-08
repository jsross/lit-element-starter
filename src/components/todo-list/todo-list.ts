import {
  LitElement, html, customElement, property
} from 'lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
import * as view from "./template.html"
import {TodoItemElement} from '../todo-item/todo-item.js';
import {TodoItem} from '../../models/todo-item';
const cloneDeep = require('lodash.clonedeep');
const uuidv1 = require('uuid/v1');

@customElement('todo-list')
export class TodoList extends LitElement {

  @property({type: Array})
  private _todos: Array<TodoItem> = [];

  private _html: any;
  private _repeat: any;

  constructor(){
    super();
    this._html = html;
    this._repeat = repeat;
  }

  get value(): Array<TodoItem> {
    return cloneDeep(this._todos);
  }

  set value(value: Array<TodoItem>) {
      this._todos = cloneDeep(value);
  }

  public addTask(value: string) {
    var item = {
      id: uuidv1(),
      task: value,
      isComplete: false
    };

    this._todos.push(item);

    this.requestUpdate();
  }

  public render() {
    return this.__getTemplateResult();
  }

  private _handleClick_delete(todo: TodoItem, event: Event) {
    var index = this._todos.indexOf(todo);
    
    this._todos = this._todos.filter(function(val, i){
      return i !== index;
    });

    this.requestUpdate();
    this._sendChangEvent();
  }

  private _handleChange_todoItem(event: Event) {
    console.log(event);

    this._sendChangEvent();
  }

  private _sendChangEvent(){
    var changEvent = new Event('change');

    this.dispatchEvent(changEvent);
  }

  private __getTemplateResult(){
    let code: string = 'this._html`' + view + "`";

    var result = eval(code);

    return result;
  }
}