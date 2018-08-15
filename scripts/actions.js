var bindTooltips = function () {
	$(".tooltip").each(function () {
		var tooltip = $(this);

		var target = tooltip.attr('data-target');
		var maxWidth = tooltip.attr('data-maxWidth') || 200;
		var animation = tooltip.attr('data-animation') || 'grow';
		var label = tooltip.attr('data-ga-label');

		$(target).tooltipster({
			interactive: true,
			animation: animation,
			maxWidth: maxWidth,
			content: tooltip,
			theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
			functionBefore: function () {
				if (window.ga) {					
					ga('send', 'event', 'Tooltips', 'View', label);
				}
			}
		});
	});
};

var bindToggleOnHover = function () {
	var ids = [
		'#education',
		'#finance',
		'#energy'
	]

	$.each(ids, function (_, id) {
		var selectable = $(id);

		selectable.addClass('selectable');

		selectable.hover(
			function () {
				$(this).addClass('selected');
				$('.selectable').not(this).addClass('notSelected');
			},
			function () {
				$(this).removeClass('selected');
				$('.selectable').removeClass('notSelected');
			}
		);
	});
}

var doOtherStuff = function () {
	console.log('Sol, add your event handlers here');
}

var onDomLoaded = function () {
	bindTooltips();
	bindToggleOnHover();
	doOtherStuff();
}

var loadAnimation = function () {
	var animation = lottie.loadAnimation({
		container: document.getElementById('animation'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'data.json'
	});

	animation.addEventListener('DOMLoaded', onDomLoaded);
}

$(document).ready(loadAnimation);