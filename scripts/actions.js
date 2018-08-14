var bindTooltips = function () {
	$(".tooltip").each(function () {
		var tooltip = $(this);

		var targetSelector = tooltip.attr('data-target');
		var maxWidth = tooltip.attr('data-maxWidth') || 200;
		var animation = tooltip.attr('data-animation') || 'grow';

		var target = $(targetSelector);

		target.tooltipster({
			interactive: true,
			animation: animation,
			maxWidth: maxWidth,
			content: tooltip
		});

		target.hover(function () {
			$(this).toggleClass('hasFocus');
		});
	});
};

var loadAnimation = function () {
	var animation = lottie.loadAnimation({
		container: document.getElementById('animation'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'data.json'
	});

	animation.addEventListener('DOMLoaded', bindTooltips);
}

$(document).ready(loadAnimation);