import React from '../web_modules/react.js'
import ReactDOM from '../web_modules/react-dom.js'
import htm from '../web_modules/htm.js'

// React + htm
const html = htm.bind(React.createElement)

// A Simple Component
class HelloMessage extends React.Component {
  render() {
    return html`
      <div>
        Hello ${this.props.name}
      </div>
    `
  }
}

ReactDOM.render(
  html`<${HelloMessage} name=Taylor />`,
  document.getElementById('hello-example')
)
// <div id=hello-example></div>
