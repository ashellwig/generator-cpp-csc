'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('generator-csc160-program')} generator!`)
    )

    const prompts = [
      {
        type: 'input',
        name: 'moduleNumber',
        message: 'which module are we working on?'
      },
      {
        type: 'input',
        name: 'moduleNumber',
        message: 'which chapter are we working on?'
      },
      {
        type: 'list',
        name: 'compiler',
        message: 'Which compiler would you like to use?',
        default: 'clang',
        choices: [
          'clang',
          'gcc',
          'msbuild'
        ]
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing () {
    // Docs
    this.fs.copy(
      this.templatePath('doc/assignment/main.tex'),
      this.destinationPath('doc/assignment/main.tex'),
      { moduleNumber: this.moduleNumber },
      { chapterNumber: this.chapterNumber }
    )
    // Makefile
    this.fs.copy(
      this.templatePath('Makefile'),
      this.destinationPath('Makefile'),
      { moduleNumber: this.moduleNumber },
      { chapterNumber: this.chapterNumber }
    )
    // src
    this.fs.copy(
      this.templatePath('src/main.cpp'),
      this.destinationPath('src/main.cpp')
    )
    this.fs.copy(
      this.templatePath('src/GenFuncs.cpp'),
      this.destinationPath('src/GenFuncs.cpp')
    )
    // include
    this.fs.copy(
      this.templatePath('include/GenFuncs.h'),
      this.destinationPath('include/GenFuncs.h')
    )
    // screenshots
    this.fs.copy(
      this.templatePath('screenshots/.gitignore'),
      this.destinationPath('screenshots/.gitignore')
    )
    // settings
    this.fs.copy(
      this.templatePath('.vscode/c_cpp_properties.json'),
      this.destinationPath('.vscode/c_cpp_properties.json')
    )
    this.fs.copy(
      this.templatePath('.vscode/launch.json'),
      this.destinationPath('.vscode/launch.json')
    )
    this.fs.copy(
      this.templatePath('.vscode/tasks.json'),
      this.destinationPath('.vscode/tasks.json')
    )
    this.fs.copy(
      this.templatePath('.vscode/settings.json'),
      this.destinationPath('.vscode/settings.json')
    )
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    )
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    )
  }

  install () {
    this.installDependencies()
  }
}
