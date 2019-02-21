import View from './View.js'

const tag = '[MainView]'

const MainView = Object.create(View)

MainView.setup = function (el) {
	this.init(el)
	this.bindClickEvent()
	return this
}

MainView.render = function (data = []) {
	console.log(tag, 'render()', data)
	this.el.innerHTML = data.length ? this.getArticlesHTML(data) : ''
	this.show()
	return this
}

MainView.getArticlesHTML = function (data) {
	return data.reduce((html, item, index) => {
		html += `<div class="content" data-index="${index}">
					<img src="images/${item.img}" data-index="${index}">
					<div data-index="${index}">${item.title}</div>
					<span data-index="${index}">${item.pre}</span>
				</div>`
		return html
	}, '')
}

MainView.bindClickEvent = function () {
	this.el.addEventListener('click', e => {
		this.emit('@click', { e })
	})
}

export default MainView
