document.addEventListener("DOMContentLoaded", function() {
	window.onscroll = function() { myFunction(); };

	var nav = document.getElementById("nav");
	var hero = document.getElementById("hero");

	function myFunction() {
		if (window.pageYOffset > 0) {
			nav.classList.add("nav--sticky");
			hero.classList.add("hero__container--offset");
		} else {
			nav.classList.remove("nav--sticky");
			hero.classList.remove("hero__container--offset");
		}
	}

	// const links = document.querySelectorAll(".nav__link");
	//
	// for (const link of links) {
	// 	link.addEventListener("click", clickHandler);
	// }
	//
	// function clickHandler(e) {
	// 	e.preventDefault();
	// 	const href = this.getAttribute("href");
	//
	// 	document.querySelector(href).scrollIntoView({
	// 		behavior: "smooth"
	// 	});
	// }

	const hamburger = document.querySelector(".nav__hamburger");
	const navMenu = document.querySelector(".nav__list");
	const navLink = document.querySelectorAll(".nav__link");

	hamburger.addEventListener("click", mobileMenu);
	navLink.forEach(n => n.addEventListener("click", closeMenu));

	function mobileMenu() {
	    hamburger.classList.toggle("nav__hamburger--active");
	    navMenu.classList.toggle("nav__list--active");
	}

	function closeMenu() {
	    hamburger.classList.remove("nav__hamburger--active");
	    navMenu.classList.remove("nav__list--active");
	}
});
