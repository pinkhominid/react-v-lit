import { html, component, useState } from '/web_modules/haunted.js';

function HooksExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return html`
    <div>
      <p>You clicked ${count} times</p>
      <button @click=${() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  `
}

customElements.define('hooks-example', component(HooksExample))
// <hooks-example></hooks-example>
