
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
// const pluginsConf = require('./config/pluginsConf.js');

module.exports = {
	title: "Kaikeba_Note",
	description: "开课吧、学习笔记",
	base:"/vpBlog/",
	head: [
		["link", { rel: "icon", href: "/kaikeba_icon.jpg" }],
	],
	locales: {
        '/': {
            lang: 'zh-CN' // 将会被设置为 <html> 的 lang 属性
        }
	},
	
	themeConfig: {
		repo: 'SuYxh/vpBlog',
        editLinks: true,
        editLinkText: '在Github上编辑此页！',
        docsDir: 'docs',
		lastUpdated: '最近更新：',
		nav:navConf,
		sidebar: sidebarConf
	},


	plugins: {
		'@vuepress/back-to-top':true
	}
	

}