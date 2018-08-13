'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  async prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('generator-csc160-program')} generator!`)
    )

    // this.answers = await this.prompt([
    //   {
    //     type: 'input',
    //     name: 'moduleNumber',
    //     message: 'which module are we working on?'
    //   },
    //   {
    //     type: 'input',
    //     name: 'chapterNumber',
    //     message: 'which chapter are we working on?'
    //   }
    // ])
  }

  writing () {
    // Docs
    this.fs.copy(
      this.templatePath('doc/assigned/main.tex'),
      this.destinationPath('doc/assigned/main.tex')
      // [
      //   { moduleNumber: this.prompts.moduleNumber },
      //   { chapterNumber: this.prompts.chapterNumber }
      // ]
    )
    // Makefile
    this.fs.copy(
      this.templatePath('Makefile'),
      this.destinationPath('Makefile')
      // [
      //   { moduleNumber: this.prompts.moduleNumber },
      //   { chapterNumber: this.prompts.chapterNumber }
      // ]
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
      this.templatePath('doc/assigned/screenshots/.gitkeep'),
      this.destinationPath('doc/assigned/screenshots/.gitkeep')
    )
    // bin
    this.fs.copy(
      this.templatePath('target/debug'),
      this.destinationPath('target/debug')
    )
    this.fs.copy(
      this.templatePath('obj/debug'),
      this.destinationPath('obj/debug')
    )
    this.fs.copy(
      this.templatePath('target/release'),
      this.destinationPath('target/release')
    )
    this.fs.copy(
      this.templatePath('obj/release'),
      this.destinationPath('obj/release')
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
}
