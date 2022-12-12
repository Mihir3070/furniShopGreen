$(document).ready(function () {
	//Prevent Page Reload on all # links
	$("body").on("click", "a[href='#']", function (e) {
		e.preventDefault();
	});

	//placeholder
	$("[placeholder]").each(function () {
		$(this).attr("data-placeholder", this.placeholder);
		$(this).bind("focus", function () {
			this.placeholder = '';
		});
		$(this).bind("blur", function () {
			this.placeholder = $(this).attr("data-placeholder");
		});
	});

	// On scroll Add Class
	$(window).scroll(function (e) {
		if ($(window).scrollTop() > 40) {
			$(".wrapper").addClass('page-scrolled');
		}
		else {
			$(".wrapper").removeClass('page-scrolled');
		}
	});

	// Footer margin set for stick to bottom
	function footerAdj() {
		var footerH = $(".footer").innerHeight();
		$(".footer").css({ "margin-top": -footerH });
		$(".main-content").css({ "padding-bottom": footerH });
	};
	footerAdj();
	$(window).resize(function () {
		footerAdj();
	});

	// Add remove class when window resize finished
	var $resizeTimer;
	$(window).on("resize", function (e) {
		if (!$("body").hasClass("window-resizing")) {
			$("body").addClass("window-resizing");
		}
		clearTimeout($resizeTimer);
		$resizeTimer = setTimeout(function () {
			$("body").removeClass("window-resizing");
		}, 250);
	});

	// Add new js functions here -----------------------------------------------------------------
	let sortBtn = document.querySelector('.filter-menu').children;
	let sortItem = document.querySelector('.filter-item').children;

	for (let i = 0; i < sortBtn.length; i++) {
		sortBtn[i].addEventListener('click', function () {
			for (let j = 0; j < sortBtn.length; j++) {
				sortBtn[j].classList.remove('current');
			}

			this.classList.add('current');

			let targetData = this.getAttribute('data-target');
			for (let k = 0; k < sortItem.length; k++) {
				sortItem[k].classList.remove('active');
				sortItem[k].classList.add('delete');

				if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
					sortItem[k].classList.remove('delete');
					sortItem[k].classList.add('active');
				}
			}
		});
	}

	$('.search-toggler,.search-overlay').on('click',function(){
		$('body').toggleClass('show-searchbar');
	});
	$('.navbar-toggler,.sidebar-overlay').on('click',function(){
		$('body').toggleClass('show-sidebar');
	});

	var themeToggler = document.getElementById("themeToggler");
	var themeTogglerIcon = document.getElementById("themeTogglerIcon");
	// themeToggler.onclick = function(){
	// 	document.body.classList.toggle("theme-dark");
	// 	if(document.body.classList.contains("theme-dark")){
	// 		themeTogglerIcon.src = "images/dark-mode-ic.svg";
	// 	}
	// 	else{
	// 		themeTogglerIcon.src = "images/light-mode-ic.svg";
	// 	}
	// }

	// Theme Settings
	if (!localStorage.getItem("myTheme")){
		localStorage.setItem("myTheme", "theme-light");
	}
	$("body").addClass(localStorage.getItem("myTheme"));
	if (localStorage.getItem("myTheme") == "theme-dark"){
		document.body.classList.add("theme-dark");
		themeTogglerIcon.src = "images/dark-mode-ic.svg";
	}
		

	themeToggler.onclick = function () {
		// document.body.classList.remove(localStorage.getItem("myTheme"));
		document.body.classList.toggle("theme-dark");
		if (document.body.classList.contains("theme-dark")){
			document.body.classList.remove("theme-light");
			localStorage.setItem("myTheme", "theme-dark");
			themeTogglerIcon.src = "images/dark-mode-ic.svg";
		}
		else{
			localStorage.setItem("myTheme", "theme-light");
			themeTogglerIcon.src = "images/light-mode-ic.svg";
		}

		// $("body").addClass(localStorage.getItem("myTheme"));
	};

	// Don't add anything below this --------------------------------------------------------------
	// Add Class on Window Load
	$("body").addClass("page-loaded");
});