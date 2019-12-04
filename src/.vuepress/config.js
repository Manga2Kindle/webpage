module.exports = {
	title: 'Manga2Kindle',
	description: 'The easyest way to move mangas to your e-reader.',
	dest: './public',
	themeConfig: {
		nav: require('./config/nav')
	},
	extraWatchFiles: [
		'.vuepress/config/nav.js'
	]
}