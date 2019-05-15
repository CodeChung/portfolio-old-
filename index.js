function navbarAnimate() {
    //animation for clicking different nav links
    $('header ul li').click(function(event) {
        event.preventDefault();
        $('.current').toggleClass('current');
        $(this).toggleClass('current');
    })
}

function slideMain() {
	//slide main on click
	$('header ul li').click(function(event) {
		event.preventDefault();
		console.log($(this).children("a").attr("href"))
		let position = $($(this).children("a").attr("href")).offset().top;
		$("body, html").animate({
			scrollTop: position
		});
	});
}

// function scrollMainDown() {
// 	if (findCurrentView().attr("href") !== "contact") {

// 	}
// }

// check if element is in viewport
$.fn.isInViewport = function() {
	let elementTop = $(this).offset().top;
	let elementBottom = elementTop + $(this).height();
	let viewportTop = $(window).scrollTop();
	let viewportBottom = viewportTop + $('section').height();
	return Math.abs(elementTop-viewportTop) + Math.abs(elementBottom-viewportBottom);
}

function findCurrentView() {
	let min = 100000;
	let currentSection = null;
	let sections = $('section');
	sections.each(function() {
		if ($(this).isInViewport() < min) {
			min = $(this).isInViewport();
			currentSection = $(this);
		}
	});
	console.log(currentSection.attr("id"))
	return currentSection;
}

function setCurrentNav() {
	$(window).on('resize scroll', function() {
		$('header ul li').each(function() {
			if ($(this).children("a").attr("href") === "#" + findCurrentView().attr("id")) {
				$(this).addClass('current')
			} else {
				$(this).removeClass("current")
			}
		});
	})
}

$(navbarAnimate);
$(slideMain);
$(setCurrentNav);
$(findCurrentView);