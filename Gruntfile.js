'use strict';

var request = require('request');

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	var reloadPort = 35729, files;

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		coveralls: {
			options: {
				force: false
			},

			development: {
				src: 'app/**/*.js',
				options: {}
			}
		},

		develop: {
			server: {
				file: 'app.js'
			}
		},

		manifest: {
			generate: {
				options: {
					basePath: 'public',
					cache: [
						'//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css',
						'//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
						'//cdnjs.cloudflare.com/ajax/libs/tether/1.3.3/js/tether.min.js',
						'//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js'
					],
					network: ['http://*', 'https://*'],
					fallback: ['/ /offline.html'],
					preferOnline: true,
					verbose: false,
					timestamp: true,
					settings: {
						preferOnline: true
					}
				},
				src: [
					'index.html',
					'css/*.css',
					'img/**/*.png',
					'js/*.min.js'
				],
				dest: 'public/manifest.appcache'
			}
		},

		sass: {
			dist: {
				files: {
					'public/css/style.css': 'public/css/style.scss'
				}
			}
		},
		watch: {
			options: {
				nospawn: true,
				livereload: reloadPort
			},
			js: {
				files: [
					'app.js',
					'app/**/*.js',
					'config/*.js'
				],
				tasks: ['develop', 'delayed-livereload']
			},
			css: {
				files: [
					'public/css/*.scss'
				],
				tasks: ['sass'],
				options: {
					livereload: reloadPort
				}
			},
			views: {
				files: [
					'app/views/*.handlebars',
					'app/views/**/*.handlebars'
				],
				options: {livereload: reloadPort}
			}
		}
	});

	grunt.config.requires('watch.js.files');
	files = grunt.config('watch.js.files');
	files = grunt.file.expand(files);

	grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
		var done = this.async();
		setTimeout(function () {
			request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','), function (err, res) {
				var reloaded = !err && res.statusCode === 200;
				if (reloaded)
					grunt.log.ok('Delayed live reload successful.');
				else
					grunt.log.error('Unable to make a delayed live reload.');
				done(reloaded);
			});
		}, 500);
	});

	grunt.registerTask('default', [
		'sass',
		'manifest',
		'develop',
		'watch'
	]);
};
