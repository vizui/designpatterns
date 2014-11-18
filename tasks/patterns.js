'use strict';

module.exports = function(grunt) {

    var metaRemarkable = require('meta-remarkable');

    var ejs = require('ejs');
    var path = require('path');
    var highlight = require('highlight.js');
    var _ = require('lodash');

    var md = new metaRemarkable('commonmark', {
        html: true,
        langPrefix: 'hljs ',
        highlight: function(code, lang) {
            return highlight.highlightAuto(code, [lang]).value;
        }
    });

    // converts [preview] and [pattern] tags to properly classed divs
    var replaceMarkup = function (text) {
        text = text.replace(/\[preview\]/g, '<div class="pl-preview"><div class="pl-toggle-code"><i class="fa fa-code"></i></div>\n');
        text = text.replace(/\[\/preview\]/g, '</div>\n');
        text = text.replace(/\[pattern\]/g, '<div class="pl-pattern">\n');
        text = text.replace(/\[\/pattern\]/g, '</div>\n');
        return text;
    };

    // pre-processes markdown text and converts ### to h3s with anchors in them.
    var linkifyHeadings = function (text) {
        var re = /^###\s?([^\#\n\r]+)/gm;
        var result;
        while ((result = re.exec(text)) !== null) {
            var escapedTitle = result[1].toLowerCase().replace(/[^\w]+/g, '-');
            text = text.replace(result[0], '<h3><a class="pl-heading-link" id="' + escapedTitle + '" href="#' + escapedTitle + '"><i class="fa fa-link"></i></a> ' + result[1] + '</h3>');
        }
        return text;
    };

    grunt.registerMultiTask('patterns', 'Gather and compile patterns.', function() {

        var options = this.options({
            patternRoot: 'content',
            urlRoot: ''
        });

        options.patternRoot = appendTrailingSlash(options.patternRoot);

        var tplString = grunt.file.read(options.template, 'utf8');

        // generate content map
        var contentMap = {};
        var nav = {};
        this.files.forEach(function (f) {

            var validFiles = removeInvalidFiles(f);
            var paths = createOutputPaths(f);
            validFiles.forEach(function (filePath) {

                var text = grunt.file.read(filePath, 'utf8');
                var text = replaceMarkup(text);

                // collect all the h3s (###) from the file and put them in an array for subnav
                var h3Regex = /^###\s?([^\#\n\r]+)/gm;
                var h3s = [];
                var match;
                while (match = h3Regex.exec(text)) {
                    h3s.push(match[1]);
                }

                var text = linkifyHeadings(text);

                var md = compileMarkdown(text);

                // shortpath is the trimmed path (only the relevant organizational path, e.g., patterns/component/file.md rather than app/content/patterns/component/file.md)
                var shortPath = filePath.substr(options.patternRoot.length);

                var category = shortPath.split(path.sep)[0];

                if (shortPath.split(path.sep).length > 2) {
                    var subCategory = shortPath.split(path.sep)[1];
                }

                category = category.substr(0, 1).toUpperCase() + category.substr(1);

                if (subCategory) {
                    subCategory = subCategory.substr(0, 1).toUpperCase() + subCategory.substr(1);
                }

                contentMap[filePath] = {
                    url: options.urlRoot + filePath.substr(options.patternRoot.length).replace(".md", ".html").replace(/\//g, '-'),
                    dest: paths.destDir + paths.destName,
                    template: tplString,
                    nav: nav,
                    meta: md.meta,
                    title: md.meta.title,
                    category: category,
                    subCategory: subCategory,
                    content: md.html,
                    subNav: h3s,
                    globals: options.variables
                };

                if (path.basename(filePath, '.md') != 'index') {
                    nav[category] = nav[category] || {};
                    nav[category][subCategory] = nav[category][subCategory] || [];
                    nav[category][subCategory].push(contentMap[filePath]);
                }
                // console.log(category, subCategory);
            });
        });

        // render templates with locals
        Object.keys(contentMap).forEach(function (key, i, arr) {
            var c = contentMap[key];

            // add prev/next indicators
            if (i > 0) { c.prev = contentMap[arr[i-1]]; }
            if (i < arr.length - 1) { c.next = contentMap[arr[i+1]]; }

            var output = renderTemplate(c.template, c, options.template);
            grunt.file.write(c.dest, output);
        });

    });


    /**
     * Compile a string of markdown, including metadata.
     */

    var compileMarkdown = function(text) {
        var comp = md.render(text);
        comp.meta = comp.meta || {};
        return comp;
    };


    /**
     * Render a template with globals
     */

    var renderTemplate = function (tpl, globals, tplPath) {
        return ejs.render(tpl, _.extend(globals, {filename: tplPath}));
    };


    /**
     * Strip out files that don't exist and log warnings
     */

    var removeInvalidFiles = function(files) {
        return files.src.filter(function(filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Source file "' + filepath + '" not found.');
                return false;
            } else {
                return true;
            }
        });
    };


    /**
     * Takes a grunt file descriptor object and returns a
     */

    var createOutputPaths = function(f) {
        var fileName = f.dest.substring(f.dest.indexOf(f.orig.dest) + f.orig.dest.length + 1).replace(/\//g, '-').replace('.md', '.html');
        return {
            dest: appendTrailingSlash(f.orig.dest),
            destName: fileName,
            destDir: appendTrailingSlash(f.orig.dest)
        };
    };


    /**
     * Appends a trailing slash to a directory name if it doesn't already have one
     */

    var appendTrailingSlash = function(dirname) {
        if (dirname.length > 0 && dirname.slice(-1) !== path.sep) {
            return dirname + path.sep;
        } else {
            return dirname;
        }
    };
}
