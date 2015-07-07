module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "public/javascripts/es6.js": "public/javascripts/es6-test.js"
                }
            }
        }
    });

    grunt.registerTask("babelize", ["babel"]);
};
