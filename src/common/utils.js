import moment from 'moment';

const isDev = process.env.NODE_ENV === 'development' ? true : false

export function initStaticPath() {
  if (window.require && window.require('electron')) {
    const app = window.require('electron').remote.app
    window.__static = app.__static
  }
}

export function getStaticPath(val) {
  if (isDev) {
    return val
  } else {
    return window.require ? window.__static + val : val
  }
}
