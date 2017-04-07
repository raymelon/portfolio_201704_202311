
var introAnimation = function() {
	
	var	typingAnimation = $.Deferred();
	var	exposingAnimation = $.Deferred();
	var	statusBarAnimation = $.Deferred();

	var coderAnimation = $.Deferred();
	var explorerAnimation = $.Deferred();

	var panelsAnimation = $.Deferred();

	setTimeout(function() {
		slickTyping();
		typingAnimation.resolve();
	}, 25);

	setTimeout(function() {
		slickExpose();
		exposingAnimation.resolve();
	}, 3000);

	setTimeout(function() {
		slickStatusBar();
		statusBarAnimation.resolve();
	}, 3000);

	setTimeout(function() {
		$('#coder').animate({'marginRight': '170'}, {
		 	duration: 1000,
		});
		$('#coder').css('display', 'flex');
		// $('.intro-des').css('display', 'flex');
		$('body').css('background-color', '#4B0082');
		coderAnimation.resolve();

	}, 4000);

	setTimeout(function() {
		$('#golfer').animate({'marginLeft': '220'}, {
		 	duration: 1000,
		});
		$('#golfer').css('display', 'flex');
		$('body').css('background-color', '#2E8B57');
		//$('body').css('background-color', '#D2691E');
		$('#box1').css('background-color', 'transparent');
		$('#box2').css('background-color', 'transparent');
		//$('#box').css('display', 'flex');

		//$('.intro-des').css('display', 'flex');
		explorerAnimation.resolve();

	}, 5000);

	setTimeout(function() {
		// $('.box').animate({'top': '170'}, {
		// 	duration: 1000,
		// });
		// $('.intro-des').animate({'top': '470'}, {
		// 	duration: 1000,
		// });

		$('#box1').animate({'marginRight': '170'}, {
			duration: 1000,
		});
		$('#box2').animate({'marginLeft': '170'}, {
			duration: 1000,
		});
		$('#box3').animate({'top': '270'}, {
			duration: 1000,
		});

		$('.box').css('display', 'flex');
		$('.intro-des').css('display', 'none');

		// $('#coder').text("+");

		// $('#coder').animate({'marginLeft': '270'}, {
		// 	duration: 1000,
		// });

		// $('#golfer').text("");
		// $('#golfer').css('display', 'none');
		$('body').css('background-color', '#D2691E');
		
		$('.github-corner').css('display', 'flex');
		$('.personal').css('display', 'flex');
		$('.college').css('display', 'flex');
		$('.created-with').css('display', 'flex');
		$('#cd-timeline').css('display', 'table');

		panelsAnimation.resolve();

	}, 7000);

	return $.Deferred(function (def) {
		$.when(typingAnimation)
			.done(exposingAnimation)
				.done(statusBarAnimation)
					.done(coderAnimation)
						.done(explorerAnimation)
							.done(panelsAnimation);
	});
};

function slickTyping() {
	$(".intro-text").typed({
		strings: ["•••", "Hi! I'm Raymel."],
		typeSpeed: 75
	});
}

function slickExpose() {
	$('.container').animate({'bottom': '500'}, {
		duration: 1000,
	});
}

function slickStatusBar() {
    var width = 0;
    var id = setInterval(frame, 15);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            $('.slick-progressbar').css('width', '0%');
        	$('.footer').css('height', '40px');
        } else {
            width += 1;
            $('.slick-progressbar').css('width', width + '%');
        }
    }
}

// function showMyRepos() {
// 	$(".mah-github-repos").loadRepositories("raymelon");
// 	$('.mah-github-repos').animate({'top': '150'}, {
// 		duration: 1000,
// 	});
// }
