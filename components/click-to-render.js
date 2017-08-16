import React, {Component} from 'react'

class ClickToRender extends Component {
  state = {shouldRender: false}
  setRender = () => {
    if (this.state.shouldRender) {
      // if we've already rendered
      // then we'll never reset the render state
      // The original use case was for codesandbox iframes to not have
      // to reload every time you click to expand them.
      return
    }
    setTimeout(() => {
      this.setState({shouldRender: this._details.open})
    })
  }
  render() {
    const {shouldRender} = this.state
    const {render, component, props} = this.props
    return (
      <details ref={n => (this._details = n)} onClick={this.setRender}>
        <summary>
          {this.props.summary}
        </summary>
        {shouldRender && render ? render(props) : null}
        {shouldRender && component ?
          React.createElement(component, props) :
          null}
      </details>
    )
  }
}

export default ClickToRender

// I think jsx-a11y is mistaken with <details></details> elements
/*
eslint
  jsx-a11y/no-noninteractive-element-interactions:0,
  jsx-a11y/click-events-have-key-events:0
*/
