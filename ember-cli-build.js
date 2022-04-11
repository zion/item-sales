'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        extension: 'scss',
        enabled: true,
        parser: require('postcss-scss'),
        // track changes in template, css, scss, and tailwind config files
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\/config\.js$/],
        plugins: [
          {
            module: require('@csstools/postcss-sass'),
            options: {
              includePaths: ['node_modules/tachyons-sass'],
            },
          },
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          {
            module: autoprefixer,
            options: {},
          },
          {
            module: tailwind,
            options: {
              config: './config/tailwind.js',
            },
          },
        ],
      },
    },
  });

  return app.toTree();
};
