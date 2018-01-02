import moment from 'moment';

const _isDev = process.env.NODE_ENV === 'development' ? true : false

export function isDev() {
  return _isDev
}

export function initStaticPath() {
  if (window.require && window.require('electron')) {
    const app = window.require('electron').remote.app
    window.__static = app.__static
  }
}

export function getStaticPath(val) {
  if (_isDev) {
    return val
  } else {
    return window.require ? window.__static + val : val
  }
}
