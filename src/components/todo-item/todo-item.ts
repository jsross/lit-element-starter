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

  public render() {
    return this.__getTemplateResult();
  }

  public updated() {
    var checkbox = this.shadowRoot.getElementById('is-complete-checkbox') as HTMLInputElement;

    checkbox.checked = this.value.isComplete;
  }

  private _handleChange(event: Event) {
    var target = event.target as HTMLInputElement;
    
    this.value.isComplete = target.checked;

    var changEvent = new Event('change');

    this.dispatchEvent(changEvent);
  }

  private __getTemplateResult(){
    let code: string = 'this._html`' + view + "`";

    var result = eval(code);

    return result;
  }

}