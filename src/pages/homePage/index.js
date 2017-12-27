import React, { Component } from 'react'
import './index.less'

import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link to="/about">About</Link>
      </div>
    )
  }
}
