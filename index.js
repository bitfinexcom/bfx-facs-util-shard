'use strict'

const Base = require('bfx-facs-base')
const UtilShardLib = require('@bitfinexcom/lib-js-util-shard')

class UtilShard extends Base {
  constructor (caller, opts, ctx) {
    super(caller, opts, ctx)

    this.name = 'util-shard'

    this.init()
  }

  init () {
    this.us = new UtilShardLib()
  }

  getRingIx (...args) {
    return this.us.getRingIx.apply(this.us, args)
  }

  getStrRingIx (...args) {
    return this.us.getStrRingIx.apply(this.us, args)
  }

  getStrVal (...args) {
    return this.us.getStrVal.apply(this.us, args)
  }
}

module.exports = UtilShard
