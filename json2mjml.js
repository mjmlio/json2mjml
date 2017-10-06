import json2xml from './parser'
import fs from 'fs'

const input = process.argv[2]
const output = process.argv[3]
let i = 0

// Read MJML from input
async function readMjml(mjmlJSON) {
    return new Promise(resolve => {
        fs.readFile(mjmlJSON, 'utf8', (err, mjmlContent) => {
            resolve(mjmlContent)
        })
    })
}

// Write the output in a (specified) file
const outputXML = (mjml) => {
    writeMjml(json2xml(mjml), output)
}

const writeMjml = (outputMjml, outputLocation) => {
    fs.writeFile(outputLocation, outputMjml, err => {
        if (err) { console.log(err) }
    })
}

async function outputAll(input, output) {
    if (input && output) {
        const inputMjml = await readMjml(input)
        outputXML(JSON.parse(inputMjml))
        
        console.log(`${input} was converted to XML format in ${output}`)
    }
    else {
        console.log('usage: babel-node json2mjml.js input output')
        return false
    }
}

outputAll(input, output)
