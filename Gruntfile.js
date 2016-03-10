// Generated on 2016-03-10 using generator-wix-angular 1.0.54
'use strict';

module.exports = function (grunt) {
  require('wix-gruntfile')(grunt, {
    version: '1.0.54',
    port: 9000,
    livereload: 35729,
    preloadModule: 'documentsPreload',
    translationsModule: 'documentsTranslations',
    svgFontName: 'documents',
    karmaConf: require('./karma.conf.js'),
    protractor: true
  });

  grunt.modifyTask('yeoman', {
    //the address to which your local /_api is proxied to (to workaround CORS issues)
    api: 'http://www.pizza.wixpress.com/_api/',
    //api: 'http://localhost:3000',

    //this is the node.js fake server that e2e tests will use
    e2eTestServer: 'http://localhost:3333/',

    //the address that opens in your browser in grunt serve
    //(domain should be the same as staging so cookies will be sent in api requests)
    local: 'http://local.pizza.wixpress.com:<%= connect.options.port %>/'
  });

  //override sauce labs browser list
  //process.env.SAUCE_BROWSERS = 'Chrome FF';
  process.env.USE_JASMINE2 = 'true';

  //Follow this URL for instructions on how to override built-in definitions:
  //https://github.com/wix/wix-gruntfile/blob/master/README.md

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.config('gh-pages', {
    options: {
      base: 'dist'
    },
    src: ['**']
  });
  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);
};
