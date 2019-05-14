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

$(navbarAnimate);
$(slideMain);