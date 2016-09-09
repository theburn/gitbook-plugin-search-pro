'use strict';
var

    fs = require('fs'),
    path = require('path'),

    _ = require('lodash'),
    // fork 自 hiant/gitbook-plugin-search-pro。
    // 但是他使用了盘古分词，我这里已经安装了jieba，就继续使用
    Segment = require('nodejieba'),
    segment = new Segment(),
    /**
     * 页面索引容器
     * @type object
     */
    pageId = 1,
    pageIndex = {},
    /**
     * 搜索词索引map容器
     * @type object
     */
    searchIndexMap = {}
    ;


module.exports = {

    website: {
        assets: './assets',
        js: [
            'search-pro.js'
        ],
        css: [
            'search-pro.css'
        ]
    },

    hooks: {

        "init" : function(){
            segment.useDefault();
        },
        "page": function(page){
            // 建立页面内容索引
            pageIndex[pageId] = {
                path : page.path.replace(/readme\.md$/i,'index.html').replace(/\.md$/,'.html'),
                title : page.title,
                level : page.level
            }

            // 分词
            var words = _.uniq( segment.doSegment(page.content, {
                simple: true,
                stripPunctuation: true
            }) );
            // 去重
            _(words).forEach(function(word) {
                // 转为大写
                word = word.toUpperCase();
                // 如果没有这个词的索引空间
                if(!searchIndexMap[word]) {
                    searchIndexMap[word] = [];
                }
                // 搜索词容器推入
                searchIndexMap[word].push(pageId);
            }).value();
            // pageId 自增长
            pageId++;
            // 返回page对象
            return page;
        },
        "finish": function() {
            // 最终写入索引数据
            fs.writeFileSync(path.join(this.output.root() , './search_pro_index.json'),
                JSON.stringify(
                    {
                        pageIndex : pageIndex,
                        searchIndexMap : searchIndexMap
                    }
                )
            );

        }
    }
};
