import React from '/web_modules/react.js'
import ReactDOM from '/web_modules/react-dom.js'
import htm from '/web_modules/htm.js'

// React + htm
const html = htm.bind(React.createElement)

// A Stateful Component
class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { seconds: 0 }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
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

ReactDOM.render(
  html`<${Timer} />`,
  document.getElementById('timer-example')
)
// <div id=timer-example></div>
