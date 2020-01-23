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
});