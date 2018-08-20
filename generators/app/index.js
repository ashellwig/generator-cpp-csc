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
  }

  constructor (args, opts) {
    // Arguments for module and chapter number
    super(args, opts)
    this.argument('modnum', { type: String, required: true })
    this.argument('chapnum', { type: String, required: true })
  }

  writing () {
    // Docs
    this.fs.copy(
      this.templatePath('doc/assigned/main.tex'),
      this.destinationPath('doc/assigned/main.tex')
    )
    // Makefile
    this.fs.copy(
      this.templatePath('Makefile'),
      this.destinationPath('Makefile')
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
      this.templatePath('target/debug/.gitkeep'),
      this.destinationPath('target/debug/.gitkeep')
    )
    this.fs.copy(
      this.templatePath('obj/debug/.gitkeep'),
      this.destinationPath('obj/debug/.gitkeep')
    )
    this.fs.copy(
      this.templatePath('target/release/.gitkeep'),
      this.destinationPath('target/release/.gitkeep')
    )
    this.fs.copy(
      this.templatePath('obj/release/.gitkeep'),
      this.destinationPath('obj/release/.gitkeep')
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
    this.spawnCommand('sed', ['-i', 's/TODO:MODNUM/' + this.options.modnum + '/g', 'doc/assigned/main.tex'])
    this.spawnCommand('sed', ['-i', 's/TODO:MODNUM/' + this.options.modnum + '/g', 'Makefile'])
    this.spawnCommand('sed', ['-i', 's/TODO:CHAPNUM/' + this.options.chapnum + '/g', 'Makefile'])
    this.spawnCommand('sed', ['-i', 's/TODO:CHAPNUM/' + this.options.chapnum + '/g', 'doc/assigned/main.tex'])
    this.log('Enjoy!')
  }
}
