const pluginConf = require('./config/pluginsConf.js');
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');


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
    plugins: pluginConf,

    themeConfig: {
        repo: 'SuYxh/vpblog',
        editLinks: true,
        editLinkText: '编辑文档',
        docsDir: 'docs',
        lastUpdated: '最近更新',
        serviceWorker: {
            updatePopup: {
                message: "内容已更新！",
                buttonText: "刷新"
            }

        },
        nav: navConf,
        sidebar: sidebarConf
    }
}