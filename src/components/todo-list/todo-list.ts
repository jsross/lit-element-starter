import {
  LitElement, html, customElement, property
} from 'lit-element';
import * as view from "./template.html"
import {TodoItem} from '../todo-item/todo-item.js';

export class TodoList extends LitElement {
  render() {
    const stringArray = [`${view}`] as any;
    stringArray.raw = [`${view}`];

    return html(stringArray as TemplateStringsArray);
  }
}

customElements.define('todo-view', TodoList);
