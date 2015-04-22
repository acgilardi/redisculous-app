module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            init: {
                files: {
                    src: [ '**' ],
                    dest: 'build/vendor/',
                    cwd: 'vendor',
                    expand: true
                }
            },
            build: {
                files: [
                    {
                        src: [ '**' ],
                        dest: 'build/',
                        cwd: 'src',
                        expand: true
                    }
                ]
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: 'src/vendor',
                    layout: 'byComponent'
                }
            }
        },
        watch: {
            dev: {
                files: ['src/**/*.*'],
                tasks: ['build']
            },
            options: {
                livereload: true
            }
        }
    });

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default Task
    grunt.registerTask('default', ['bower']);
    grunt.registerTask('build', ['copy:build']);
    grunt.registerTask('serve', ['build', 'watch']);
};