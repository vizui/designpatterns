USPTO Design Guide
==============

- [View the Design Guide](https://uspto.github.io/designpatterns/)
- [Contributing](CONTRIBUTING.md)
- [Terms](TERMS.md)
- [License](LICENSE)

Have feedback or questions about the design guide? [Create an issue!](https://github.com/USPTO/designpatterns/issues)

#### About this repository

This is the source code repository for the [USPTO Design Guide](https://uspto.github.io/designpatterns/). This source code generates the documentation, CSS, and other resources. The generated site is then pushed to the [gh-pages](https://github.com/USPTO/designpatterns/tree/gh-pages) branch.

#### Want to contribute?
See our [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines.

---

### Building & running locally

If you want to build and run the documentation locally, here's what you need to do:

##### Prerequisites
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

##### Running documentation
Run the project with Grunt:
```
grunt serve
```
This processes the content Markdown files, LESS files, and starts a local server. 


##### Distribution Builds
To test the distribution build, do:
```
grunt serve:dist
```

To build a draft version for distribution, do:
```
grunt build
```

To build a release version, do
```
grunt release
```
which ouputs to:
```
docs/dist/{version}/
docs/dist/draft/
docs/dist/
```



## License

Software code created by U.S. Government employees is not subject to copyright in the United States (17 U.S.C. §105). The United States/Department of Commerce reserve all rights to seek and obtain copyright protection in countries other than the United States for Software authored in its entirety by the Department of Commerce.  To this end, the Department of Commerce hereby grants to Recipient a royalty-free, nonexclusive license to use, copy, and create derivative works of the Software outside of the United States.

## Disclaimer

The United States Department of Commerce (DOC) GitHub project code is provided on an ‘as is’ basis and the user assumes responsibility for its use. DOC has relinquished control of the information and no longer has responsibility to protect the integrity, confidentiality, or availability of the information. Any claims against the Department of Commerce stemming from the use of its GitHub project will be governed by all applicable Federal law. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by the Department of Commerce. The Department of Commerce seal and logo, or the seal and logo of a DOC bureau, shall not be used in any manner to imply endorsement of any commercial product or activity by DOC or the United States Government.
