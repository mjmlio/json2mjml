# JSON2MJML

## Purpose

Converts a MJML template from a `JSON` syntax to a valid `XML` syntax.

## Installation

`npm install`

Optional: if you get an error like `command not found: babel-node` when running it, run `npm install babel-cli -g`.

## Usage

Input and output filenames must be set, both with their extensions.

`babel-node mjml2json.js input output [-s]`

You can run a test on the provided styleguide with `npm run test`.

## MJML2JSON

If you need to convert a MJML template from a `XML` syntax to a valid `JSON` syntax, check [MJML2JSON](https://github.com/ngarnier/mjml2json).