$(document).ready(function () {
	$(document).on("click", "a#home_link", function (e) {
		e.preventDefault();
		$("html,body").animate(
			{
				scrollTop: $("body").offset().top,
			},
			800
		);
	});
	$(document).on("click", "a#skills_link", function (e) {
		e.preventDefault();
		$("html,body").animate(
			{
				scrollTop: $("#skills").offset().top,
			},
			800
		);
	});
	$(document).on("click", "a#works_link", function (e) {
		e.preventDefault();
		$("html,body").animate(
			{
				scrollTop: $("#works").offset().top,
			},
			800
		);
	});
	$(document).on("click", "a#games_link", function (e) {
		e.preventDefault();
		$("html,body").animate(
			{
				scrollTop: $("#games").offset().top,
			},
			800
		);
	});
	$(document).on("click", "a#contact_link", function (e) {
		e.preventDefault();
		$("html,body").animate(
			{
				scrollTop: $("#contact").offset().top,
			},
			800
		);
	});
});
