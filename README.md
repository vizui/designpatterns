USPTO Design Guide
==============

This project is a work in progress.

- [View Design Guide](https://uspto.github.io/designpatterns/)
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

Software code created by U.S. Government employees is not subject to copyright in the United States (17 U.S.C. §105). The United States/Department of Commerce reserve all rights to seek and obtain copyright protection in countries other than the United States for Software authored in its entirety by the Department of Commerce.  To this end, the Department of Commerce hereby grants to Recipient a royalty-free, nonexclusive license to use, copy, and create derivative works of the Software outside of the United States.
