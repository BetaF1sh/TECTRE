import View from './View.js'

const tag = '[ArticleView]'

const ArticleView = Object.create(View)

ArticleView.setup = function (el) {
	this.init(el)
	return this
}

ArticleView.render = function (data = []) {
	console.log(tag, 'render()', data)
	this.el.innerHTML = data.length ? this.getArticleHTML(data[0]) : ''
	this.show()
	return this
}

ArticleView.getArticleHTML = function (item) {
	return `<h1>${item.title}</h1>
	${item.article}`
}

export default ArticleView
