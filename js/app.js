"use strict";
var canvas__nav = document.getElementById('canvas__nav'),
	body = document.getElementsByTagName("body")[0],
	header = document.getElementsByTagName("header")[0],
	navmenu__icon = document.getElementById('navmenu__icon'),
	navOpen = false,
	menuOpen = document.getElementsByClassName('menu-open');

function openNav(){
	header.removeAttribute("class");
	header.classList.add('canvas__open');
	if(navOpen){
		//canvas__nav.classList.remove('open');
		header.removeAttribute("class");
		body.classList.remove('scroll--disabled');
		navmenu__icon.classList.remove('icon-close');
		navOpen = false;
	} else {
		//canvas__nav.classList.add('open');
		body.classList.add('scroll--disabled');
		navmenu__icon.classList.add('icon-close');
		navOpen = true;
	}
}
function closeSearch(){
	header.removeAttribute("class");
}
function openSearch(){
	header.removeAttribute("class");
	header.classList.add('search__open');
}

var submenu = function(e) {
	var ele = e.target,
		classList = ele.parentElement.classList
	if(classList.contains('open-submenu')){
		ele.parentElement.classList.remove('open-submenu');
	} else {
		ele.parentElement.classList.add('open-submenu');
	}
};
for (var i = 0; i < menuOpen.length; i++) {
    menuOpen[i].addEventListener('click', submenu, false);
}
