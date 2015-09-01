'use strict'

var test = require('tape')
var assertOk = require('./')

test(function (t) {
  t.doesNotThrow(assertOk.bind(null, 1))
  t.doesNotThrow(assertOk.bind(null, true))
  t.throws(assertOk)
  t.throws(assertOk.bind(null, 0))
  t.end()
})
