$(document).ready(function(){
	var vpHeight = $(window).height();

	$('.title-card').css('height',vpHeight);

	// $('.section-head').css('height', vpHeight - 100);


	var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

	/* Set the max scrollable area */
	max = docHeight - winHeight;
	progressBar.attr('max', max);

	$(document).on('scroll', function(){
	   value = $(window).scrollTop();
	   progressBar.attr('value', value);
	});
});