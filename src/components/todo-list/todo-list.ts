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

    var changEvent = new Event('change');

    this.dispatchEvent(changEvent);
  }

  private _handleChange_taskInput(event: Event){
    var target = event.target as HTMLInputElement;

    this.Task = target.value;
  }

  private _handleChange_todoItem(event: Event) {
    console.log(event);

    var changEvent = new Event('change');

    this.dispatchEvent(changEvent);
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

  private getTemplateResult(){
    let code: string = 'this._html`' + view + "`";

    var result = eval(code);

    return result;
  }
}

customElements.define('todo-view', TodoList);
