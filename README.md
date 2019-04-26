# webpack学习总结项目

--------------------
webpack打包工具学习记录
--------------------


## 安装webpack

```js
npm install --save-dev webpack webpack-cli
```

## 打包命令

```js
//package.json
"scripts":{
    "build":"webpack --config webpack.config.js" 
}
```

## entry配置

```js
//对象属性值为字符串，函数返回字符串或字符串数组
entry:string|[string]|object|function
```

> 默认

    默认值为“./src/index.js”,对应chunk名为main，即打包后对应的bundle为main.js

> 修改为entry值为对象

```js
   entry:{
        app:"./src/index.js"
    }
```

## output配置

> 语法

```js
    output:{
        //bundle输出的绝对路径
        path:string,
        //bundle的名称
        filename:string|function
    }
```

> 简单配置

```js
output: {
        path: path.join(__dirname, "dist/"),
        filename: "[name].bundle.js"
    }
```
