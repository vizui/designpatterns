'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    require('./tasks/patterns')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var _ = require('lodash');

    // Configurable paths
    var paths = {
        tmp: '.tmp',
        docs: 'docs',
        docsDist: 'docs/dist',
        libDist: 'dist'
    };

    var pkg = grunt.file.readJSON('package.json');

    var config = grunt.file.readYAML('./config.yaml');

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        paths: paths,
        pkg: pkg,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= paths.docs %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            patterns: {
                files: ['<%= paths.docs %>/*.ejs', '<%= paths.docs %>/content/**/*.md'],
                tasks: ['copy:tpl', 'template', 'patterns:server']
            },
            less: {
                files: ['less/**/*.less', '<%= paths.docs %>/styles/**/*.less'],
                tasks: ['less:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= paths.docs %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= paths.tmp %>/{,*/}*.html',
                    '<%= paths.tmp %>/styles/{,*/}*.css',
                    '<%= paths.docs %>/images/{,*/}*'
                ]
            }
        },

        template: {
            server: {
                engine: 'ejs',
                variables: { globals: config, pkg: pkg },
                files: [{
                    expand: true,
                    cwd: '<%= paths.tmp %>',
                    dest: '<%= paths.tmp %>',
                    src: '{index,resources,changelog,example-preexam}.tpl.ejs',
                    ext: '.html'
                }]
            },
            dist: {
                engine: 'ejs',
                variables: { globals: config, pkg: pkg, env: 'prod' },
                files: [{
                    expand: true,
                    cwd: '<%= paths.tmp %>',
                    dest: '<%= paths.tmp %>',
                    src: '{index,resources,changelog,example-preexam}.tpl.ejs',
                    ext: '.html'
                }]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: grunt.option('port') || 9000,
                open: true,
                livereload: 35729,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static(paths.tmp),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(paths.docs)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: '<%= paths.docsDist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= paths.tmp %>',
                        '<%= paths.libDist %>',
                        '<%= paths.docsDist %>/*',
                        '!<%= paths.docsDist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        lesslint: {
            src: ['less/**/_*.less', '<%= paths.docs %>/styles/**/_*.less'],
            options: {
                csslint: {
                    'box-model': false,
                    'adjoining-classes': false,
                    'qualified-headings': false,
                    'empty-rules': false,
                    'outline-none': false,
                    'unique-headings': false
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= paths.docs %>/scripts/{,*/}*.js',
                '!<%= paths.docs %>/scripts/vendor/*'
            ]
        },

        // Compiles LESS to CSS and generates necessary files if requested
        less: {
            theme: {
                options: {
                    compress: true,
                },
                files: [{
                    expand: true,
                    cwd: 'less',
                    src: ['usptostrap.less'],
                    dest: '<%= paths.libDist %>/css/',
                    ext: '.min.css'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.docs %>/styles',
                    src: ['pattern-library.less'],
                    dest: '<%= paths.tmp %>/styles',
                    ext: '.css'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.docs %>/styles',
                    src: ['pattern-library.less'],
                    dest: '<%= paths.tmp %>/styles',
                    ext: '.css'
                }]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.tmp %>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%= paths.tmp %>/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        bowerInstall: {
            app: {
                src: ['<%= paths.docs %>/header.ejs', '<%= paths.docs %>/footer.ejs'],
                exclude: ['bower_components/bootstrap/js/bootstrap.js', 'bower_components/bootstrap/dist/css/bootstrap.css', 'bower_components/bootstrap/dist/js/bootstrap.js']
            },
            less: {
                src: ['<%= paths.docs %>/styles/{,*/}*.{less}']
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= paths.docsDist %>/scripts/{,*/}*.js',
                        '<%= paths.docsDist %>/styles/{,*/}*.css',
                        '<%= paths.docsDist %>/images/{,*/}*.*',
                        '<%= paths.docsDist %>/styles/fonts/{,*/}*.*',
                        '<%= paths.docsDist %>/*.{ico,png}'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= paths.docsDist %>'
            },
            html: ['<%= paths.tmp %>/**/*.ejs']
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= paths.docsDist %>', '<%= paths.docsDist %>/images']
            },
            html: ['<%= paths.tmp %>/**/*.ejs'],
            css: ['<%= paths.docsDist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= paths.libDist %>/images'
                }]
            }
        },

        // was breaking svg sprite
        // svgmin: {
        //     dist: {
        //         files: [{
        //             expand: true,
        //             cwd: 'images',
        //             src: '{,*/}*.svg',
        //             dest: '<%= paths.libDist %>/images'
        //         }]
        //     }
        // },

        htmlmin: {
            dist: {
                options: {
                    // collapseBooleanAttributes: true,
                    // collapseWhitespace: true,
                    // removeAttributeQuotes: true,
                    // removeCommentsFromCDATA: true,
                    // removeEmptyAttributes: true,
                    // removeOptionalTags: true,
                    // removeRedundantAttributes: true,
                    // useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp',
                    src: '{,*/}*.html',
                    dest: '<%= paths.docsDist %>'
                }]
            }
        },

        patterns: {
            server: {
                options: {
                    variables: config,
                    patternRoot: '<%= paths.docs %>/content',
                    urlRoot: '',
                    template: '<%= paths.tmp %>/pattern.tpl.ejs'
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.docs %>/content',
                    src: '**/*.md',
                    dest: '<%= paths.tmp %>'
                }]
            },
            dist: {
                options: {
                    variables: _.extend({ env: 'prod' }, config),
                    patternRoot: '<%= paths.docs %>/content',
                    urlRoot: '',
                    template: '<%= paths.tmp %>/pattern.tpl.ejs'
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.docs %>/content',
                    src: '**/*.md',
                    dest: '<%= paths.tmp %>'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {

            // copy the tpl to the tmp folder so we can usemin it
            tpl: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= paths.docs %>',
                    dest: '<%= paths.tmp %>',
                    src: '*.ejs'
                }]
            },

            dist: {
                files: [{ // htmlshiv to docsDist for < IE9
                    dot: true,
                    expand: true,
                    cwd: '<%= paths.docs %>/vendor/html5shiv/',
                    dest: '<%= paths.docsDist %>/vendor/html5shiv/',
                    src: ['html5shiv.min.js'],
                }, { // icon sprite to docsDist folder
                    expand: true,
                    dot: true,
                    cwd: 'images',
                    dest: '<%= paths.docsDist %>/images/icons',
                    src: '*.svg'
                }, { // src less to libDist folder
                    dot: true,
                    expand: true,
                    cwd: 'less',
                    dest: '<%= paths.libDist %>/less',
                    src: ['**/*.less']
                }, { // icons to libDist folder
                    dot: true,
                    expand: true,
                    dest: '<%= paths.libDist %>',
                    src: ['images/**/*.svg'],
                }, { // icons to docDist folder
                    dot: true,
                    expand: true,
                    dest: '<%= paths.docsDist %>',
                    src: ['images/**/*.svg'],
                }]
            },
            release: { // move the libDist folder under the docsDist folder for access from io page
                dot: true,
                expand: true,
                cwd: '<%= paths.libDist %>',
                src: ['*.*'],
                dest: '<%= paths.docsDist %>/dist/'
            },
            styles: { // copy non-less files to tmp
                expand: true,
                dot: true,
                cwd: '<%= paths.docs %>/styles',
                dest: '<%= paths.tmp %>/styles/',
                src: '{,*/}*.css'
            },
            images: { // copy root images to tmp for serving
                expand: true,
                dot: true,
                cwd: 'images',
                dest: '<%= paths.tmp %>/images/',
                src: '**/*.*'
            }
        },

        // zips up src less files, images, and minified css
        zip: {
            '<%= paths.libDist %>/usptostrap-<%= pkg.version %>.zip': ['<%= paths.libDist %>/**/*']
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                // 'lesslint',
                'jshint',
                'less:server',
                'patterns:server',
                'template:server',
                'copy:styles',
                'copy:images'
            ],
            dist: [
                // 'lesslint',
                'jshint',
                'less:dist',
                'less:theme',
                'copy:styles',
                'imagemin'
                // 'svgmin'
            ]
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'copy:tpl',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'copy:tpl',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'copy:dist',
        'rev',
        'usemin',
        'patterns:dist',
        'template:dist',
        'htmlmin',
        'zip',
        'copy:release'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);
};
