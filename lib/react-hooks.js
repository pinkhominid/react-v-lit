import React, { useState } from '../web_modules/react.js'
import ReactDOM from '../web_modules/react-dom.js'
import htm from '../web_modules/htm.js'

// React + htm
const html = htm.bind(React.createElement)

function HooksExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return html`
    <div>
      <p>You clicked ${count} times</p>
      <button onClick=${() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  `
}

ReactDOM.render(
  html`<${HooksExample} />`,
  document.getElementById('hooks-example')
)
// <div id=hooks-example></div>
