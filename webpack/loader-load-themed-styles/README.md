# load-themed-styles loader for webpack

## Installation

`npm install @microsoft/loader-load-themed-styles --save-dev`

## Overview

This simple loader wraps the loading of CSS in script equivalent
to `require("load-themed-styles").loadStyles( /* css text */ )`.
It is designed to be a replacement for style-loader.

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

This loader is designed to be used in conjunction with css-loader.

``` javascript
var css = require("@microsoft/loader-load-themed-styles!css!./file.css");
// => returns css code from file.css, uses load-themed-styles to load the CSS on the page.
```

### Example config

``` javascript
        use: [
          {
            loader: "@microsoft/loader-load-themed-styles",  // creates style nodes from JS strings
            options: {
              namedExport: 'default'
            }
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: "sass-loader",
          }
        ]

```

## Options


### namedExport (string, defaults to `undefined`)

By default, css modules will be exported as a commonjs export:

```js
module.exports = { ... };
```

To override this, you may provide a named export to export to a specificly named thing. This is useful in exporting as the default in es6 module import scenarios. For example, providing "default" for the named export will output this:

```js
module.exports.default = { ... };
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
