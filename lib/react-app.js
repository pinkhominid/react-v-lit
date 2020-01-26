import React from '../web_modules/react.js'
import ReactDOM from '../web_modules/react-dom.js'
import htm from '../web_modules/htm.js'

// React + htm
const html = htm.bind(React.createElement)

// An Application
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], text: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return html`
      <div>
        <h3>TODO</h3>
        <${TodoList} items=${this.state.items} />
        <form onSubmit=${this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange=${this.handleChange}
            value=${this.state.text}
          />
          <button>
            Add #${this.state.items.length + 1}
          </button>
        </form>
      </div>
    `
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }
}

class TodoList extends React.Component {
  render() {
    return html`
      <ul>
        ${this.props.items.map(item => html`
          <li key=${item.id}>${item.text}</li>
        `)}
      </ul>
    `
  }
}

ReactDOM.render(
  html`<${TodoApp} />`,
  document.getElementById('todos-example')
)
// <div id=todos-example></div>
