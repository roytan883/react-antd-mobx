import React, { Component } from 'react'
import './index.less'

import { Link } from 'react-router-dom'

import img1 from '../../static/img/flexed-biceps_1f4aa.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <img src={img1} alt="hi" />
        <Link to="/about">About</Link>
      </div>
    )
  }
}
