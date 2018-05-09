'use strict'
/* eslint-env mocha */

const UtilShard = require('../')
var assert = require('assert')
const CRC = require('crc-32')

let utilShard = new UtilShard()

describe('UtilShard:getRingIx', () => {
  it('should return 0 when first parameter of getRingIx is null', () => {
    assert.equal(utilShard.getRingIx(null, 5), 0)
  })
  it('should return 0 when second parameter of getRingIx is null', () => {
    assert.equal(utilShard.getRingIx(5, 0), 0)
  })
  it('should return 2 when utilShard.getRingIx(5, 3) because is equivalent to 5 % 3', () => {
    assert.equal(utilShard.getRingIx(5, 3), 2)
  })
})

describe('UtilShard:getStrVal', () => {
  const s = 'String to test'
  const t1 = process.hrtime()
  const strVal = utilShard.getStrVal(s)
  const timeProcess1 = process.hrtime(t1)[1]
  const t2 = process.hrtime()
  const strVal2 = utilShard.getStrVal(s)
  const timeProcess2 = process.hrtime(t2)[1]
  it('utilShard.getStrVal(s) should return hash of the UTF-8 encoding', () => {
    assert.equal(strVal, Math.abs(CRC.str(s)))
  })
  it('If utilShard.getStrVal gets called two times with the same values it should return the same value', () => {
    assert.equal(strVal, strVal2)
  })
  it('Second call should be faster because it brings the result from memory', () => {
    assert.ok(timeProcess1 > timeProcess2)
  })
})

describe('UtilShard:getStrRingIx', () => {
  it('utilShard.getStrRingIx(s, n) should be equal to utilShard.getRingIx(this.getStrVal(s), n)', () => {
    const s = 'Some string to test'
    const n = 5
    assert.equal(utilShard.getStrRingIx(s, n), utilShard.getRingIx(utilShard.getStrVal(s), n))
  })
})
