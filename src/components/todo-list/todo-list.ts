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

  @property({type: Array})
  private _todos: Array<TodoItem> = [{Task: 'Task 1', IsComplete: false}];

  private _html: any;

  constructor(){
    super();
    this._html = html;
  }

  public addTask(value: string) {
    this._todos.push({Task: value, IsComplete: false});
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

customElements.define('todo-list', TodoList);
