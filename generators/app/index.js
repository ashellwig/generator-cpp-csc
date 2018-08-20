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

    const answers = await this.prompt([{
      type: 'input',
      name: 'modnum',
      message: 'Which module are we in?'
    }, {
      type: 'input',
      name: 'chapnum',
      message: 'Which chapter are we in?'
    }]).then(props => {
      this.props.modnum = props.modnum
      this.props.chapnum = props.chapnum
    })

    this.log('Module number', answers.modnum)
    this.log('Chapter number', answers.chapnum)
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

  todos () {
    this.log('Please check Makefile and doc/assigned/main.tex for any \'TODO\' marks.')
    this.log('Wherever you find these, enter the chapter/module number where applicable.')
    this.log('On UNIX, simply using the command `sed -i \'s/TODO:/<number>/g\' Makefile` should suffice.')
  }

  install () {
    this.spawnCommand('sed', ['-i', 's/TODO:MODNUM/' + this.props.modnum + '/g', 'Makefile'])
    this.spawnCommand('sed', ['-i', 's/TODO:MODNUM/' + this.props.modnum + '/g', 'doc/assigned/main.tex'])
    this.spawnCommand('sed', ['-i', 's/TODO:CHAPNUM/' + this.props.chapnum + '/g', 'Makefile'])
    this.spawnCommand('sed', ['-i', 's/TODO:CHAPNUM/' + this.props.chapnum + '/g', 'doc/assigned/main.tex'])
    this.log('Replaced placeholders with:')
    this.log('Module number: ', this.props.chapnum)
    this.log('Chapter number: ', this.props.modnum)
    this.log('Enjoy!')
  }
}
