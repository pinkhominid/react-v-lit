import { LitElement, html } from '/web_modules/lit-element.js'
import { Remarkable } from '/web_modules/remarkable.js'

class MarkdownEditor extends LitElement {
  static get properties() {
    return {
      state: { type: Object }
    }
  }

  constructor() {
    super()
    this.state = { value: 'Hello, **world**!' }
  }

  handleChange(e) {
    this.state = { value: e.target.value }
  }

  getRawMarkup() {
    const md = new Remarkable()
    return md.render(this.state.value)
  }

  render() {
    return html`
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          @input=${this.handleChange}
          .defaultValue=${this.state.value}
        ></textarea>
        <h3>Output</h3>
        <div
          className="content"
          .innerHTML=${this.getRawMarkup()}
        />
      </div>
    `
  }
}

customElements.define('markdown-example', MarkdownEditor)
// <markdown-example></markdown-example>
