import * as ts from "typescript";
import { LitElement, html, customElement, property } from 'lit-element';
import * as view from "./template.html"

@customElement('todo-item')
export class TodoItem extends LitElement {
  @property()
  foo = 'foo';

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