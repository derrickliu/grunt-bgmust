# grunt-bgmust 

> image in css must

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bgmust --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bgmust');
```

## The "bgmust" task

### Overview
In your project's Gruntfile, add a section named `bgmust` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bgmust: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.images
Type: `String`
Default value: `',  '`

需要匹配的图片文件夹.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  bgmust: {
    module: {
        options: {
          images: 'release/css/images/'
        },
        files: [
          {
            src: 'release/css/module.css'
          }
        ]
      }
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  cssmin: {
     options: {
         keepSpecialComments: 0
     },
     compress: {
         files: {
             'release/css/contact.css': 'src/css/contact.css'
         }
     }
 },
 bgmust: {
    contact: {
      options: {
        images: 'release/css/images/'
      },
      files: [
        {
          src: 'release/css/contact.css'
        }
      ]
    }
 },

 /////////////////////////////
 clean: ['release/css/images/'],
 copy: {
    main: {
        expand: true,
        cwd: 'src/css/images/',
        src: ['**'],
        dest: 'release/css/images/',
    }
 },

 rev: {
    files: {
        src: ['release/css/images/**/*.{png,jpg,gif}']
    }
 }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
