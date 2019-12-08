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
            "text": "GitHub",
            "link": "https://github.com/taisoulx",
            "icon": "reco-github"
          },
          
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
    // sidebarDepth: 1,
    // displayAllHeaders: false,
    "lastUpdated": "Last Updated",
    "author": "taisoulx",
    // "record": "xxx",
    "startYear": "2019",
    sidebar:{
      '/note/':[
        {
          title: '数据分析',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '数据分析/数据分析导学篇',
            '数据分析/建模公式',
            '数据分析/数据分析思维'
          ]
        }
      ]
    },
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
    },
    "lineNumbers": true
  },
  "plugins": [
    "@vuepress/medium-zoom",
    "flowchart",
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios:[
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]
        
      },
    ],
  ]
}