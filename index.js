const sectionList = {
	'intro': ['.intro', '.projects'],
	'projects': ['.intro', '.about'], 
	'about': ['.projects', '.contact'], 
	'contact': ['.about', '.contact']
};


function navbarAnimate() {
    //animation for clicking different nav links
    $('header ul li').click(function(event) {
        event.preventDefault();
        $('.current').toggleClass('current');
        $(this).toggleClass('current');
    })
}

function slideMain(position) {
	$('main').css("overflow","visible");
	$("body, html").animate({
		scrollTop: position
	});
	$('main').css("overflow","scoll");
}

function slideOnClick() {
	$('header ul li').click(function(event) {
		event.preventDefault();
		let position = $($(this).children("a").attr("href")).offset().top;
		slideMain(position);
	});
}

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

let position = $(window).scrollTop();  


$(document).keydown(function(e) {
	$('main').css("overflow","visible");
	currentSection = findCurrentView().attr("id");
	console.log(currentSection)
	switch (e.which) {
		case 38: 
			console.log("Up")
			scrollSnap(currentSection, "up");
			break;
		case 40: 
			console.log("down")
			scrollSnap(currentSection, "down");
			break;
		
		default: return;
	}
	e.preventDefault();
	$('main').css("overflow","auto");
})

function scrollSnap(currentSection, direction) {
	console.log(sectionList[currentSection][0],sectionList[currentSection][1])
	const sectionToSlide = direction === "up" ? sectionList[currentSection][0] : sectionList[currentSection][1];
	let position = $(sectionToSlide).offset().top;
	slideMain(position);
};

$(navbarAnimate);
$(slideOnClick);
$(setCurrentNav);
$(findCurrentView);