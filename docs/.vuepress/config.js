module.exports = {
    title: 'ironc',
    description: 'ironc的文档, vuepress 文档',
    base: "/vpblog/",
    head: [
        ['link', { rel: 'icon', href: '/tg.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    locales: {
        '/': {
          lang: 'zh-CN' // 将会被设置为 <html> 的 lang 属性
        }   
      },
    plugins: ['@vuepress/pwa', {
        serviceWorker: true
    }
    ],
    themeConfig: {
        repo: 'SuYxh/vpblog',
        editLinks: true,
        editLinkText: '编辑文档',
        docsDir: 'docs',
        lastUpdated: '最近更新',
        serviceWorker:{
            updatePopup:{
                message:"内容已更新！",
                buttonText:"刷新"
            }

        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'vuepress', link: '/vpstudy/' },
            { text: 'Blog', link: 'https://cesi.huat.xyz' },
        ],
        sidebar: {
            "/vpstudy/": ["", "one", "two"]
        }
    }
}