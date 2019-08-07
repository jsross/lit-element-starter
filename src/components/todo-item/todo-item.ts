import { LitElement, html, customElement, property } from 'lit-element';
import * as view from "./template.html";
import {TodoItem} from "../../models/todo-item"

@customElement('todo-item')
export class TodoItemElement extends LitElement {
  
  @property({type: Object})
  value: TodoItem = null;

  private _html: any;

  constructor(){
    super();
    this._html = html;
  }

  render() {
    return this.getTemplateResult();
  }

  private getTemplateResult(){
    let code: string = 'this._html`' + view + "`";

    var result = eval(code);

    return result;
  }

  private _handleChange(event: Event) {
    var target = event.target as HTMLInputElement;
    
    this.value.isComplete = target.checked;

    var changEvent = new Event('change');

    this.dispatchEvent(changEvent);
  }

}