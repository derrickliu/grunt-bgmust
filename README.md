# grunt-bgmust 

> image in css cache control

使用grunt-rev，md5图片文件，然后使用grunt-bgmust替换css有引用到的背景图片名称


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
Default value: `''`

要匹配的图片文件夹.


### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  bgmust: {
    options: {
      images: 'release/css/images/'
    },
    files:  [
      {
        src: 'release/css/contact.css'
      }
    ]
  },
});
```

#### Custom Options
大致的流程是这样：

1、cssmin，把src的css打包到release；

2、clean，清掉release下面的图片，不然会被二次md5；

3、copy，把src的图片复制一份到release下面；（如果图片有多级目录，设置expand=true，全部拷贝到一级目录下）

4、rev，把release下面的图片md5；

5、bgmust，根据md5的图片名称去匹配css里面的background-image名称，进行替换。
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
