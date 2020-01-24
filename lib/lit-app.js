import { LitElement, html } from '/web_modules/lit-element.js'

// An Application
class TodoApp extends LitElement {
  static get properties() {
    return {
      state: { type: Object }
    }
  }

  constructor() {
    super()
    this.state = { items: [], text: '' }
  }

  render() {
    return html`
      <div>
        <h3>TODO</h3>
        <todo-list .items=${this.state.items}></todo-list>
        <form @submit=${this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            @change=${this.handleChange}
            .value=${this.state.text}
          />
          <button>
            Add #${this.state.items.length + 1}
          </button>
        </form>
      </div>
    `
  }

  handleChange(e) {
    this.state = { items: this.state.items, text: e.target.value }
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
    this.state = {
      items: this.state.items.concat(newItem),
      text: ''
    }
  }
}

customElements.define('todos-example', TodoApp)

class TodoList extends LitElement {
  static get properties() {
    return {
      items: { type: Array }
    }
  }

  constructor() {
    super()
    this.items = []
  }

  render() {
    return html`
      <ul>
        ${this.items.map(item => html`
          <li key=${item.id}>${item.text}</li>
        `)}
      </ul>
    `
  }
}

customElements.define('todo-list', TodoList)
// <todo-list></todo-list>
