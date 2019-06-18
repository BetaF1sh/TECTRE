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
		html += `<div class="content" data-id="${index}">
					<img src="images/${item.img}" data-id="${index}">
					<div data-id="${index}">${item.title}</div>
					<span data-id="${index}">${item.pre}</span>
				</div>`
		return html
	}, '')
}

MainView.bindClickEvent = function () {
	this.el.addEventListener('click', e => {
		const target = e.target || e.srcElement
		const { dataset } = target
		if (dataset.id === undefined) return
		this.emit('@click', { dataset })
	})
}

export default MainView
