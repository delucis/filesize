'use strict'

const EXPECT = require('chai').expect
const FILESIZE = require('../index')

describe('filesize()', function () {
  it('should return an error object that is null', function (done) {
    FILESIZE('index.js', function (e, size) {
      EXPECT(e).to.be.null
      done()
    })
  })

  it('should return a string by default', function (done) {
    FILESIZE('index.js', function (e, size) {
      EXPECT(size).to.be.a('string')
      done()
    })
  })

  it('should return a string with a format of <number><space><unit>', function (done) {
    FILESIZE('index.js', function (e, size) {
      EXPECT(size).to.match(/^[\d.]+ [a-zA-Z]+$/)
      done()
    })
  })

  it('should return an array if requested', function (done) {
    let opts = { output: 'array' }
    FILESIZE('index.js', opts, function (e, size) {
      EXPECT(size).to.be.an('array')
      done()
    })
  })

  it('should return an array whose first member is a number', function (done) {
    let opts = { output: 'array' }
    FILESIZE('index.js', opts, function (e, size) {
      EXPECT(size[0]).to.be.a('number')
      done()
    })
  })

  it('should return an object if requested', function (done) {
    let opts = { output: 'object' }
    FILESIZE('index.js', opts, function (e, size) {
      EXPECT(size).to.be.an('object')
      done()
    })
  })

  it('should return an object whose "value" property is a number', function (done) {
    let opts = { output: 'object' }
    FILESIZE('index.js', opts, function (e, size) {
      EXPECT(size).to.have.own.property('value')
      EXPECT(size.value).to.be.a('number')
      done()
    })
  })

  it('should work if the options parameter is null', function (done) {
    FILESIZE('index.js', null, function (e, size) {
      EXPECT(e).to.be.null
      EXPECT(size).to.be.a('string')
      done()
    })
  })

  it('should raise ENOENT error if the passed file does not exist', function (done) {
    FILESIZE('file-that-does-not-exist', function (e, size) {
      EXPECT(e).to.have.own.property('code')
      EXPECT(e.code).to.equal('ENOENT')
      done()
    })
  })
})
