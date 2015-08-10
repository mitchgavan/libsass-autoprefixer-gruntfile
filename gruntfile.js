module.exports = function (grunt) {

    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'main.css': 'main.scss'
                }
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({browsers: ['last 2 versions', 'ie 9'})
                ]
            },
            dist: {
                src: 'main.css'
            }
        },

        watch: {
            css: {
                files: ['main.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            }
        }
    });


    // Where we tell Grunt we plan to use this plug-in
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'autoprefixer']);

};
