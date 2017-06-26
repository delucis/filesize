# @delucis/filesize

A minimal, asynchronous library that returns human-friendly file sizes. Wraps [`filesize`][d98c819c] and uses Node’s `fs.stat` to retrieve sizes from the file system.

  [d98c819c]: https://www.npmjs.com/package/filesize "The filesize package on NPM"



## Installation

```sh
npm install @delucis/filesize
```



## Usage

```js
const FS = require('@delucis/filesize')

// Use with a callback to handle the returned string.
FS('my-file.txt', function (error, size) {
  if (error) {
    console.error('Couldn’t get file size...')
    return
  }
  console.log('Size of my-file.txt: ' + size);
  return
})
```



## API

### `@delucis/filesize(path, [options,] callback)`

#### path

Type: `string`, `Buffer`, `URL`

The path to the file you want to get the size for, which is passed to [`fs.stat`][180ac10b].

  [180ac10b]: https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_stat_path_callback "fs.stat(path, callback) documentation"

#### options

Type: `object`  
Default: `{}`

If included, this will be passed as [`filesize`’s options object](https://www.npmjs.com/package/filesize#optional-settings).

#### callback

Type: `function`

A function to handle the returned value.

##### Passed arguments

1. An error object, which will be `null` if all goes well.
2. The output of `filesize`. By default this is a `string`, but can also be of other types depending on the options you pass in.



## Tests

```sh
npm test
```
