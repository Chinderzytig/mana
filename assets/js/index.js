document.addEventListener("DOMContentLoaded", function() {
	window.onscroll = function() { myFunction(); };

	var nav = document.getElementById("nav");
	var hero = document.getElementById("hero");

	var sticky = nav.offsetTop;

	function myFunction() {
		if (window.pageYOffset > 0) {
			nav.classList.add("nav--sticky");
			hero.classList.add("hero__container--offset");
		} else {
			nav.classList.remove("nav--sticky");
			hero.classList.remove("hero__container--offset");
		}
	}
});
