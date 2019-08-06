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
  Todos: Array<TodoItem> = [{Task: 'Task 1', IsComplete: false}];

  @property({type: String})
  Filter: string = VisibilityFilters.SHOW_ALL;
  
  @property({type: String})
  Task: string = '';

  private _html: any;

  constructor(){
    super();
    this._html = html;
  }

  public _addCurrentTask(){
    this.Todos.push({Task: this.Task, IsComplete: false});
    this.Task = '';

    this.requestUpdate();
  }

  private _handleChange(event: any){
    this.Task = event.target.value;
  }

  private _handleClick(event: any) {
    this._addCurrentTask();
  }

  private _handleKeyUp_taskInput(event: any) : void {
    if(event.key === "Enter"){
      this._addCurrentTask();
    }
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
