/* eslint-disable */
'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-cpp-csc:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments(['modnum-1', 'chapnum-1'])
  })

  it('creates files', () => {
    assert.file(['doc/assigned/main.tex'])
    assert.file(['Makefile'])
    assert.file(['src/main.cpp'])
    assert.file(['src/GenFuncs.cpp'])
    assert.file(['include/GenFuncs.h'])
    assert.file(['doc/assigned/screenshots/.gitkeep'])
    assert.file(['target/debug/.gitkeep'])
    assert.file(['obj/debug/.gitkeep'])
    assert.file(['target/release/.gitkeep'])
    assert.file(['obj/release/.gitkeep'])
    assert.file(['.vscode/c_cpp_properties.json'])
    assert.file(['.vscode/launch.json'])
    assert.file(['.vscode/tasks.json'])
    assert.file(['.vscode/settings.json'])
    assert.file(['.editorconfig'])
    assert.file(['.gitignore'])
  })
})
