'use strict'

const _ = require('lodash')
const async = require('async')
const CRC = require('crc-32')
const Base = require('bfx-facs-base')

class UtilShard extends Base {
  constructor (caller, opts, ctx) {
    super(caller, opts, ctx)

    this.name = 'util-shard'

    this.init()
  }

  init () {
    this.mem = {}
  }

  getRingIx (v, n) {
    return v && n ? v % n : 0
  }

  getStrRingIx (s, n) {
    const k = `ring-${s}`
    
    let v = this.mem[k]
    if (v !== undefined) {
      return v
    }

    v = this.mem[k] = this.getRingIx(Math.abs(CRC.str(s)), n)
    return v
  }
}

module.exports = UtilShard
