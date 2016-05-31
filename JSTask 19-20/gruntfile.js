
module.exports = function(grunt) {

  grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dist/script.main.js'
    }
  },
  uglify: {
      dist: {
      src: ['js/dist/script.main.js'],
      dest: 'js/dist/script.main.min.js'
    }
  },
  sass: {
      dist: {
          files: [{
              expland: true,
              src: ['css/*.scss'],
              dest: 'css/main.css',
          }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  
  
  grunt.registerTask('default', ['concat','uglify','sass']);
  
};