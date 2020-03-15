module.exports = {
    title: 'ironc',
    description: 'ironc的文档, vuepress 文档',
    base:"/vpblog/",
    themeConfig: {
        repo: 'SuYxh/vpblog',  
        editLinks: true,
        editLinkText: '编辑文档',
        docsDir: 'docs',
        lastUpdated: '最近更新',
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