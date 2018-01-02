import React, { Component } from 'react'
import './index.less'

import { Link } from 'react-router-dom'

import { getStaticPath } from '../../common/utils'

import img1 from '../../static/img/flexed-biceps_1f4aa.png';

export default class Home extends Component {
  render() {
    const img1Path = getStaticPath(img1)
    return (
      <div>
        Home
        <img src={img1Path} alt="hi" />
        <Link to="/about">About</Link>
      </div>
    )
  }
}
