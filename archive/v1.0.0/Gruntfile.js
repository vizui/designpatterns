'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // var _ = require('lodash');

    var pkg = grunt.file.readJSON('package.json');

    // var config = grunt.file.readYAML('./config.yaml');

    // Configurable paths
    var paths = {
        tmp: '.tmp',
        assets: 'generated',
        downloads: 'downloads'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        paths: paths,
        pkg: pkg,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['front/scripts/{,*/}*.js'],
                tasks: ['jshint', 'concat:mainjs']
            },
            less: {
                files: ['usptostrap/less/**/*.less', 'front/styles/**/*.less'],
                tasks: ['less', 'concat:maincss', 'autoprefixer']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= paths.tmp %>',
                        '<%= paths.assets %>',
                        '<%= paths.downloads %>/*'
                    ]
                }]
            },
        },

        lesslint: {
            src: ['usptostrap/less/**/*.less', 'front/styles/**/*.less'],
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
                'front/scripts{,*/}*.js'
            ]
        },

        // Compiles LESS to CSS and generates necessary files if requested
        less: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'less',
                    src: ['usptostrap.less'],
                    dest: '<%= paths.downloads %>/css/',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'front/styles',
                    src: ['pattern-library.less'],
                    dest: '<%= paths.assets %>/styles',
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
                    cwd: '<%= paths.assets %>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%= paths.assets %>/styles/'
                }]
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'front/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= paths.assets %>/images'
                }]
            }
        },

        concat: {
            // bootstrap plugins to single js file
            pluginsjs: {
                src: ['bower_components/bootstrap/js/affix.js',
                    'bower_components/bootstrap/js/alert.js',
                    'bower_components/bootstrap/js/dropdown.js',
                    'bower_components/bootstrap/js/tooltip.js',
                    'bower_components/bootstrap/js/modal.js',
                    'bower_components/bootstrap/js/transition.js',
                    'bower_components/bootstrap/js/button.js',
                    'bower_components/bootstrap/js/popover.js',
                    'bower_components/bootstrap/js/carousel.js',
                    'bower_components/bootstrap/js/scrollspy.js',
                    'bower_components/bootstrap/js/collapse.js',
                    'bower_components/bootstrap/js/tab.js'],
                dest: '<%= paths.assets %>/scripts/plugins.js'
            },
            // misc vendor to js file
            vendorjs: {
                src: ['bower_components/modernizr/modernizr.js',
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.extensions.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.date.extensions.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.numeric.extensions.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.phone.extensions.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.regex.extensions.js',
                    'bower_components/select2/select2.js',
                    'bower_components/jquery-bridget/jquery.bridget.js',
                    'bower_components/seiyria-bootstrap-slider/js/bootstrap-slider.js',
                    'front/vendor/jquery-ui-1.11.1.custom/jquery-ui.js'],
                dest: '<%= paths.assets %>/scripts/vendor.js'
            },
            // main js
            mainjs: {
                src: ['front/scripts/main.js'],
                dest: '<%= paths.assets %>/scripts/main.js'
            },
            // vendor css
            vendorcss: {
                src: [
                    'front/vendor/jquery-ui-1.11.1.custom/jquery-ui.structure.css',
                    'bower_components/font-awesome/css/font-awesome.css',
                    'bower_components/select2/select2.css',
                    'bower_components/seiyria-bootstrap-slider/dist/css/bootstrap-slider.css'
                ],
                dest: '<%= paths.assets %>/styles/vendor.css'
            },
            // main css
            maincss: {
                src: ['<%= paths.assets %>/styles/pattern-library.css'],
                dest: '<%= paths.assets %>/styles/main.css'
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{ // htmlshiv to assets for < IE9
                    dot: true,
                    expand: true,
                    cwd: 'front/vendor/html5shiv/',
                    src: ['html5shiv.min.js'],
                    dest: '<%= paths.assets %>/vendor/html5shiv/'
                }, { // icon sprite to assets folder
                    dot: true,
                    expand: true,
                    cwd: 'usptostrap/images/icons',
                    src: '*.svg',
                    dest: '<%= paths.assets %>/images/icons'
                }, { // favicon sprite to assets folder
                    dot: true,
                    expand: true,
                    cwd: 'front/',
                    src: 'favicon.ico',
                    dest: '<%= paths.assets %>/'
                }, { // usptostrap src to downloads folder
                    dot: true,
                    expand: true,
                    src: 'usptostrap',
                    dest: '<%= paths.downloads %>/usptostrap'
                }]
            }
        },

        // zips up src less files, images, and minified css
        zip: {
            '<%= paths.downloads %>/usptostrap-<%= pkg.version %>.zip': ['<%= paths.downloads %>/**/*']
        }

    });

    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
        'less',
        'imagemin',
        'concat',
        'autoprefixer',
        'copy:dist',
        'zip'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);
};