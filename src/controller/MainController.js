const tag = '[MainController]'
import MainView from '../views/MainView.js'
import ArticleView from '../views/ArticleView.js'
import NavbarView from '../views/NavbarView.js'

import articleModel from '../models/articlesModel.js'
import aboutModel from '../models/aboutModel.js'

export default {
	init() {
		MainView.setup(document.querySelector('#main'))
			.on('@click', e => this.renderArticle(e.detail.dataset.id))
		ArticleView.setup(document.querySelector('article'))
		NavbarView.setup(document.querySelector('nav'))
			.on('@click', e => this.renderNavConent(e.detail.target.innerText))

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

	renderArticle(id) {
		console.log(tag, 'renderArticle()', id)
		MainView.hide()
		this.fetchArticle(id)
	},

	fetchArticle(id) {
		articleModel.searhId(id).then(data => {
			ArticleView.render(data)
		})
	},

	renderNavConent(name) {
		console.log(tag, 'renderNavConent()', name)
		if (name === '<- HOME') {
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
