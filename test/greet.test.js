import test from 'node:test'
import assert from 'node:assert/strict'
import { greet } from '../src/greet.js'

test('greets in English', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!')
})

test('greets in Chinese', () => {
  assert.equal(greet('阿达', 'zh'), '你好，阿达！')
})
