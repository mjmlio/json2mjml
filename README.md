# json2mjml

## Purpose

Converts a [MJML](https://github.com/mjmlio/mjml) template from JSON to XML.

## Installation

```bash
yarn add json2mjml

# or

npm i json2mjml
```

## Usage

### CLI

Input and output filenames must be set, both with their extensions.

```bash
json2mjml input.json output.mjml
```

### Require hook

```js
import json2mjml from 'json2mjml'

// or

const json2mjml = require('json2mjml')

const input = {
  tagName: 'mjml',
  children: [
    // ... your mjml
  ]
}
const output = json2mjml(input)

console.log(output)
```

## mjml2json

If you need to convert a MJML template from a XML to JSON, check [mjml2json](https://github.com/ngarnier/mjml2json).
