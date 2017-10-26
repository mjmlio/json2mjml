import fs from 'fs'
import path from 'path'

import json2mjml from '../src/json2mjml'

const fakeJSON = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'styleguide.json'))

test('converts JSON input to mjml', () => {
  const input = JSON.parse(fakeJSON)
  const result = json2mjml(input)
  expect(typeof result).toBe('string')
  expect(result.startsWith('<mjml>')).toBe(true)
})
