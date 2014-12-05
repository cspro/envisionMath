module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: {
				src: ["build"]
			}
		},
		copy: {
			build: {
				cwd: 'src',
				src: ['**/*', '!**/sass/**'],
				dest: 'build',
				expand: true
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.registerTask('default', ['clean', 'copy']);
};
