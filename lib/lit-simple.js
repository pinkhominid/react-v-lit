import { LitElement, html } from '/web_modules/lit-element.js'

// A Simple Component
class HelloMessage extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    }
  }

  render() {
    return html`
      <div>
        Hello ${this.name}
      </div>
    `
  }
}

customElements.define('hello-example', HelloMessage)
// <hello-example name=Taylor></hello-example>
