import * as ts from "typescript";
import { LitElement, html, customElement, property } from 'lit-element';
import * as view from "./template.html";

@customElement('todo-item')
export class TodoItemElement extends LitElement {
  @property()
  foo: string = "bar";

  render() {
    return this.getTemplateResult();
  }

  getTemplateResult(){
    var tag = html;

    let code: string = 'tag`' + view + "`";

    var result = eval(code);

    return result;
  }

}