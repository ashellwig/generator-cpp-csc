# generator-cpp-csc [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Scaffolds a project based on specifications in FRCC&#39;s CSC160 course

## Installation

First, install [Yeoman](http://yeoman.io) and generator-cpp-csc using [yarn](https://www.yarnpkg.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

This generator also depends on GNU's version of `sed` to be able to replace the placeholders in the `Makefile` and the docs. If `sed` is not on your path, you will need
to add it. As of now, there is no way to point to another location for `sed` as we use `this.spawnCommand` to replace the placeholders.

```bash
yarn global add yo
yarn global add generator-cpp-csc
```

Then generate your new project
`MODULE_NUMBER` is the module you are in.
`CHAPTER_NUMBER` is the chapter you are in.
Both are required.

```bash
mkdir <my-project>
cd <my-project>
yo cpp-csc <MODULE_NUMBER> <CHAPTER_NUMBER>
```

Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Ashton Hellwig](https://github.com/ashellwig)


[npm-image]: https://badge.fury.io/js/generator-cpp-csc.svg
[npm-url]: https://npmjs.org/package/generator-cpp-csc
[travis-image]: https://travis-ci.org/ashellwig/generator-cpp-csc.svg?branch=master
[travis-url]: https://travis-ci.org/ashellwig/generator-cpp-csc
[daviddm-image]: https://david-dm.org/ashellwig/generator-cpp-csc.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ashellwig/generator-cpp-csc
[coveralls-image]: https://coveralls.io/repos/ashellwig/generator-cpp-csc/badge.svg
[coveralls-url]: https://coveralls.io/r/ashellwig/generator-cpp-csc
