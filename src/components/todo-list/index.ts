import {
  LitElement, html, customElement, property
} from 'lit-element';

import {TodoItem} from '../todo-item/index';

export class TodoList extends LitElement {
  render() {
    return html`
      <ul>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
      </ul>
    `;
  }
}

customElements.define('todo-view', TodoList);
