module.exports = function(grunt) {
	grunt.initConfig({
   		concat: {
			js: {
				src: [
					'src/*.js'
				],
				dest: 'builds/hacks.full.js'
			}
   		},
	    jshint: {
	      	files: ['builds/hacks.full.js'],
	    },   		
   		uglify: {
   			js: {
   				src: 'builds/hacks.full.js',
   				dest: 'builds/hacks.min.js'
   			},
   		}
	});

 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

 	grunt.registerTask('default', ['concat', 'uglify']);
}