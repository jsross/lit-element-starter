import { LitElement, html } from 'lit-element';

export class TodoItem extends LitElement {
  render() {
    return html`
      Child Element
    `;
  }
}

customElements.define('todo-item', TodoItem);
