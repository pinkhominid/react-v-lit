import React from '../web_modules/react.js'
import ReactDOM from '../web_modules/react-dom.js'
import htm from '../web_modules/htm.js'
import { Remarkable } from '../web_modules/remarkable.js'

// React + htm
const html = htm.bind(React.createElement)

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: 'Hello, **world**!' }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  getRawMarkup() {
    const md = new Remarkable()
    return { __html: md.render(this.state.value) }
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
          onChange=${this.handleChange}
          defaultValue=${this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML=${this.getRawMarkup()}
        />
      </div>
    `
  }
}

ReactDOM.render(
  html`<${MarkdownEditor} />`,
  document.getElementById('markdown-example')
)
// <div id=markdown-example></div>
