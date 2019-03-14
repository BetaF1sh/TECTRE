import View from './View.js'
import MainView from './MainView.js';

const tag = '[NaviView]'

const NavbarView = Object.create(View)

NavbarView.setup = function (el) {
	this.init(el)
	this.bindClickEvent()
	return this
}

NavbarView.bindClickEvent = function () {
	this.el.addEventListener('click', e => {
		e.stopPropagation();
		const target = e.target || e.srcEelement
		this.emit('@click', { target })
	})
}

export default NavbarView
