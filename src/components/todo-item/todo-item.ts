import { LitElement, html, customElement, property } from 'lit-element';
import * as view from "./template.html"

@customElement('todo-item')
export class TodoItem extends LitElement {
  @property()
  foo = 'foo';

  render() {
    const stringArray = [view] as any;
    stringArray.raw = view;

    return html(stringArray as TemplateStringsArray);
  }
}