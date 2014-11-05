USPTO Design Patterns
==============

This project is a work in progress.

- [View Pattern Library](https://uspto.github.io/designpatterns/)
- [Contributing](CONTRIBUTING.md)
- [Terms](TERMS.md)
- [License](LICENSE)

### Want to contribute?
See our [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines.

### Building & Running Locally

If you want to build and run the documentation locally, here's what you need to do:

#### Prerequisites
You will first need to have [Node.js](http://nodejs.org/download/) installed. Node.js powers the popular front-end build and dependency management tools [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/).

Once Node.js is installed, ensure you have Grunt and Bower installed globally with:
```
npm install grunt-cli -g
npm install bower -g
```

Then install the project's build and front-end dependencies with:
```
npm install
bower install
```

#### Running Docs
Run the project with Grunt:
```
grunt serve
```
This processes the content Markdown files, LESS files, and starts a local server. 


#### Distribution Builds
To test the distribution build, do:
```
grunt serve:dist
```

To build the project for distribution, do:
```
grunt build
```

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication][CC0].

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

[CC0]: http://creativecommons.org/publicdomain/zero/1.0/
