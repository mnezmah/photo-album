import React, { Component } from 'react'
import PropTypes from 'prop-types' 

export default class Button extends Component {
  static propTypes = {
    onclick: PropTypes.func.isRequired,
  }
  render() {
    return (
    <button>
      click me
    </button>
    )
  }
}
