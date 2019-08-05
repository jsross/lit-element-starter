import { LitElement, html, customElement, property } from 'lit-element';
import * as view from "./template.html";
import {TodoItem} from "../../models/todo-item"

@customElement('todo-item')
export class TodoItemElement extends LitElement {
  
  @property()
  Model: TodoItem = null;

  private _html: any;

  constructor(){
    super();
    this._html = html;
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