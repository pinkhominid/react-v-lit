import { LitElement, html } from '../web_modules/lit-element.js'

// A Stateful Component
class Timer extends LitElement {
  static get properties() {
    return {
      state: { type: Object }
    }
  }

  constructor() {
    super()
    this.state = { seconds: 0 }
  }

  tick() {
    this.state = {
      seconds: this.state.seconds + 1
    }
  }

  connectedCallback() {
    super.connectedCallback()
    this.interval = setInterval(() => this.tick(), 1000)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    clearInterval(this.interval)
  }

  render() {
    return html`
      <div>
        Seconds: ${this.state.seconds}
      </div>
    `
  }
}

customElements.define('timer-example', Timer)
// <timer-example></timer-example>
