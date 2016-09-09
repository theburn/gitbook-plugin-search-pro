## gitbook-plugin-search-pro

Gitbook search engine pro. (支持中文搜索)
从 gitbook-plugins/gitbook-plugin-search-pro  Fork，然后参考了hiant/gitbook-plugin-search-pro 的语法，因为老的语法有问题      

现在结合一下，工作算是正常了

### Demo preview

![](https://raw.githubusercontent.com/gitbook-plugins/gitbook-plugin-search-pro/master/demo/show-1.gif)

### Usage

Put this in your book.json:

```js
{
    "plugins": [
      "search",   //这里如果关闭的话，搜索框都没有了，可以打开，并且可以共存
      "search-pro"  // gitbook install以后（gitbook-plugin原版）,再用我的去覆盖即可
    ]
}
```

