/**
 * @module filesize
 */
'use strict'
const STAT = require('fs').stat
const SIZE = require('filesize')

/**
 * Asynchronously report file size for a given path in a human-friendly format.
 * @function
 * @param {string} path - path to a file to get size for
 * @param {object} [options] - optional object containing options
 * @param {fileSizeCallback} callback - function to handle the returned size
 *
 * @example
 * const FS = require('@delucis/filesize')
 *
 * FS('README.md', function (error, size) {
 *   if (error) {
 *     console.error('Couldn’t get the file size...')
 *     return
 *   }
 *   console.log('File size: ' + size)
 *   return
 * })
 */
module.exports = function (path, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }
  if (!options) {
    options = {}
  }
  STAT(path, function handleStats (e, stats) {
    if (e) {
      callback(e, null)
      return
    } else {
      callback(null, SIZE(stats.size, options))
      return
    }
  })
}

/**
 * A callback function to handle the result of a file size request.
 *
 * @callback fileSizeCallback
 * @param {?object} error - An object holding details of any errors thrown. null if successful.
 * @param {?string} fileSize - A string describing the file size if successful.
 */
