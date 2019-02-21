const tag = '[MainController]'
import MainView from '../views/MainView.js'
import ArticleView from '../views/ArticleView.js'
import NavbarView from '../views/NavbarView.js'

import articleModel from '../models/articlesModel.js'
import aboutModel from '../models/aboutModel.js'

export default {
	init() {
		MainView.setup(document.querySelector('#main'))
			.on('@click', e => this.renderArticle(e))
		ArticleView.setup(document.querySelector('article'))
		NavbarView.setup(document.querySelector('nav'))
			.on('@click', e => this.renderNavConent(e))

		this.renderView()
	},

	renderView() {
		ArticleView.hide()
		this.fetchMain()
	},

	fetchMain() {
		articleModel.list().then(data => {
			MainView.render(data)
		})
	},

	renderArticle(e) {
		const id = e.explicitOriginalTarget.dataset.index
		console.log(tag, 'renderArticle()', id)
		MainView.hide()
		this.fetchArticle(id)
	},

	fetchArticle(id) {
		articleModel.searhId(id).then(data => {
			ArticleView.render(data)
		})
	},

	renderNavConent(e) {
		const target = e.explicitOriginalTarget.innerText
		console.log(tag, 'renderNavConent()', target)
		if (target === '<- HOME') {
			this.renderView()
			return
		}
		this.renderAbout()
	},

	renderAbout() {
		MainView.hide()
		aboutModel.list().then(data => {
			ArticleView.render(data)
		})
	}
}
