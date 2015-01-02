module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      sample: {
        files: {
          "dest.js": ["src.js"]
        },
      }
    }
  });
  grunt.loadNpmTasks("grunt-browserify");
  grunt.registerTask("default", ["browserify"]);
};
