'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    require('./tasks/patterns')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var yaml = require('js-yaml'),
        fs = require('fs');

    // Configurable paths
    var paths = {
        tmp: '.tmp',
        app: 'docs',
        dist: 'docs/dist'
    };

    var config = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'));

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        paths: paths,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= paths.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            patterns: {
                files: ['<%= paths.app %>/*.tpl.ejs', '<%= paths.app %>/content/**/*.md'],
                tasks: ['copy:tpl', 'patterns']
            },
            // template: {
            //     files: ['<%= paths.app %>/{,*/}*.html'],
            //     tasks: ['template']
            // },
            less: {
                files: ['less/**.less', '<%= paths.app %>/styles/**.less'],
                tasks: ['less:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= paths.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= paths.tmp %>/{,*/}*.html',
                    '<%= paths.tmp %>/styles/{,*/}*.css',
                    '<%= paths.app %>/images/{,*/}*'
                ]
            }
        },

        template: {
            dist: {
                engine: 'ejs',
                variables: config,
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>',
                    dest: '<%= paths.tmp %>',
                    src: '*.html',
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
                // Change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static(paths.tmp),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(paths.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: '<%= paths.dist %>',
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
                        '<%= paths.dist %>/*',
                        '!<%= paths.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        lesslint: {
            src: ['less/_*.less', '<%= paths.app %>/styles/_*.less'],
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
                '<%= paths.app %>/scripts/{,*/}*.js',
                '!<%= paths.app %>/scripts/vendor/*'
            ]
        },

        // Compiles LESS to CSS and generates necessary files if requested
        less: {
            theme: {
                files: [{
                    expand: true,
                    cwd: 'less',
                    src: ['usptostrap.less'],
                    dest: 'dist',
                    ext: '.css'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/styles',
                    src: ['pattern-library.less'],
                    dest: '<%= paths.tmp %>/styles',
                    ext: '.css'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/styles',
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
                src: ['<%= paths.app %>/index.html'],
                exclude: ['bower_components/bootstrap/js/bootstrap.js']
            },
            less: {
                src: ['<%= paths.app %>/styles/{,*/}*.{less}']
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= paths.dist %>/scripts/{,*/}*.js',
                        '<%= paths.dist %>/styles/{,*/}*.css',
                        '<%= paths.dist %>/images/{,*/}*.*',
                        '<%= paths.dist %>/styles/fonts/{,*/}*.*',
                        '<%= paths.dist %>/*.{ico,png}'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= paths.dist %>'
            },
            html: ['<%= paths.tmp %>/**/*.tpl.ejs']
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= paths.dist %>', '<%= paths.dist %>/images']
            },
            html: ['<%= paths.tmp %>/**/*.tpl.ejs'],
            css: ['<%= paths.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= paths.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= paths.dist %>/images'
                }]
            }
        },

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
                    dest: '<%= paths.dist %>'
                }]
            }
        },

        patterns: {
            server: {
                options: {
                    variables: config,
                    patternRoot: '<%= paths.app %>/content',
                    urlRoot: '/',
                    template: '<%= paths.tmp %>/pattern.tpl.ejs'
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/content',
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
                    cwd: '<%= paths.app %>',
                    dest: '<%= paths.tmp %>',
                    src: '*.tpl.ejs'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= paths.app %>',
                    dest: '<%= paths.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '.',
                    src: ['bower_components/bootstrap/vendor/assets/fonts/bootstrap/*.*'],
                    dest: '<%= paths.dist %>'
                }, {
                    dot: true,
                    expand: true,
                    cwd: 'bower_components/font-awesome/fonts/',
                    src: ['*.*'],
                    dest: '<%= paths.dist %>/fonts/'
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= paths.app %>/styles',
                dest: '<%= paths.tmp %>/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                // 'lesslint',
                'jshint',
                'less:theme',
                'less:server',
                'patterns',
                // 'template',
                'copy:styles'
            ],
            dist: [
                // 'lesslint',
                'jshint',
                'less',
                // 'patterns',
                'copy:styles',
                'imagemin',
                'svgmin'
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
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin',
        'patterns',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);
};
