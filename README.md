## gitbook-plugin-search-pro

Gitbook search engine pro. (支持中文搜索)
从 gitbook-plugins/gitbook-plugin-search-pro fork出来后，把结巴分词改成了盘古分词。结巴分词在windows环境上安装编译失败。

### Demo preview

![](https://raw.githubusercontent.com/gitbook-plugins/gitbook-plugin-search-pro/master/demo/show-1.gif)

### Usage

Put this in your book.json:

```js
{
    "plugins": [
      "-search",
      "search-pro@git+https://github.com:hiant/gitbook-plugin-search-pro.git"
    ]
}
```

And

```
npm install
npm build/serve
```

Thanks: segment(盘古分词中文分词功能)
