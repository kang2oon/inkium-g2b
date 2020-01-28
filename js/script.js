$(document).ready(function(){
	$('select').niceSelect();
	$('.date-pick').datepicker({
		language: 'ko',
		todayButton: new Date(),
		clearButton: true
	});
	$('input').iCheck({
		checkboxClass: 'icheckbox_minimal-blue',
		radioClass: 'iradio_minimal-blue'
	});
	$('.tab').stickyNavbar();
	$(".tab-content").hide();
	$(".tab-content:first").show();
	$("ul.tab-sty3 li").click(function () {
		$("ul.tab-sty3 li").removeClass("active");
		$(this).addClass("active");
		$(".tab-content").hide()
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});
});