import * as ts from "typescript";
import {
  LitElement, html, customElement, property
} from 'lit-element';
import * as view from "./template.html"
import {TodoItem} from '../todo-item/todo-item.js';

export class TodoList extends LitElement {
  render() {
    return this.getTemplate();
  }

  getTemplate(){
    let code: string = 'lit_element_1.html`' + view + "`";
    let jsCode: string = ts.transpile(code);

    var result = eval(jsCode);

    return result;
  }
}

customElements.define('todo-view', TodoList);
