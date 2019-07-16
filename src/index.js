'use strict'

import utils from './utils'

import Err from './res/error'
import Elem from './element'

import Evt from './event'
import Str from './res/string'
import Lng from './res/language'

var app = window.app = {
  about: {
    version: '0.0.1'
  },

  utils,

  Err,
  Elem,
  create: Elem.create,

  Evt,
  Str,
  Lng
}

export default app
