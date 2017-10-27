#!/bin/env node

import fs from 'fs'
import program from 'commander'
import json2mjml from './json2mjml'
import { version } from '../package.json'

program
  .version(version)
  .usage('<input-file> <output-file>')
  .parse(process.argv)

if (program.args.length !== 2) {
  program.outputHelp()
  process.exit(1)
}

const [inputFilename, outputFilename] = program.args

const input = fs.readFileSync(inputFilename, 'utf8')
const output = json2mjml(JSON.parse(input))

fs.writeFileSync(outputFilename, output)

console.log(`${inputFilename} was converted to JSON format in ${outputFilename}`) // eslint-disable-line no-console
