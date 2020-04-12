module.exports =  [
        { text: '首页', link: '/' },
        {
                text: '学习记录',
                items: [
                        {text:'任务单',link:'/task/'},
                        {text:'文档',link:'/document/'},
                        {text:'笔记',link:'/homework/'}
                ]
        },
        {
                text: '前端工具',
                items: [
                        {text:'git',link:'/tool/git/'},
                        {text:'webpack',link:'/tool/webpack/'},
                        {text:'vscode',link:'/tool/vscode/'},
                        {text:'PicGo',link:'/tool/PicGo/'},
                        {text:'vuepress',link:'/tool/vuepress/'}
                ]
        },
        { text: '项目记录', link: '/project/' },
        { text: '常用代码', link: '/ofen_code/' },
        { text: '每周一记', link: '/blog/' },
        {
                text: '面试经验',
                items: [
                        {text:'面试经验',link:'/interview/'},
                        {text:'html',link:'/interview/html/'},
                        {text:'css',link:'/interview/css/'},
                        {text:'JavaScript',link:'/interview/JavaScript/'},
                        {text:'算法',link:'/interview/arithmetic/'},
                        {text:'网络',link:'/interview/network/'}
                ]
        }, 
        {
                text: '图书',
                items: [
                        { text: '一本好书', link: '/book/' },
                        { text: '读书感悟', link: '/book/book_study/' },
                        { text: '语录', link: '/book/saying/' }    
                ]
        }
]