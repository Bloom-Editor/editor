import React, { Component, PropTypes } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, onStart, onStop, onReset } = this.props
    return (
      <p>
        Time: {value} times
        {' '}
        <button onClick={onStart}>
          +
        </button>
        {' '}
        <button onClick={onStop}>
          -
        </button>
        {' '}
        <button onClick={onReset}>
          Reset
        </button>
      </p>
    )
  }
}

Clock.propTypes = {
  value: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

export default Clock
