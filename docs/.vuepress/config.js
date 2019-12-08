module.exports = {
  "title": "tortoise",
  "description": "a litle tortoise can do anything",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    noFoundPageByTencent: false,
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      { text: 'Notes', link: '/note/', icon: 'reco-document' },
      {
        "text": "TimeLine",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "NPM",
            "link": "https://www.npmjs.com/~reco_luan",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/taisoulx",
            "icon": "reco-github"
          },
          {
            "text": "博客圆",
            "link": "https://www.cnblogs.com/luanhewei/",
            "icon": "reco-bokeyuan"
          },
          {
            "text": "WeChat",
            "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/header.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "taisoulx",
    // "record": "xxx",
    "startYear": "2019",

    valineConfig: {
      appId: 'k0A6vSEaFqCKiTigJDokEa5g-gzGzoHsz',// your appId
      appKey: '4GENP8SL8SerImRoX9SrQU9h', // your appKey
      placeholder: '是时候展现真正的技术了',
      avatar: 'wavatar',
      // serverUrl: 'https://leanserver.smallsunnyfox.com'
    }
  },
  // "markdown": {
  //   "lineNumbers": true
  // },
  "markdown": {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it'))
    }
  },
  "plugins": [
    "@vuepress/medium-zoom",
    "flowchart",
    "extract-code"
  ]
}