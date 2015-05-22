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
                    targetDir: 'src/assets/js/vendor',
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
        },
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'path/to/dev/server.js'
                }
            },
            prod: {
                options: {
                    port: 8080,
                    script: 'server.js',
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: 'path/to/test/server.js'
                }
            }
        }

    });

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    // Default Task
    grunt.registerTask('default', ['bower']);
    grunt.registerTask('build', ['copy:build']);
    grunt.registerTask('serve', ['build', 'watch']);
    grunt.registerTask('server', ['build', 'express:prod', 'watch']);
};
