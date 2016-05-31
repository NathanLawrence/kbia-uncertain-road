$(document).ready(function(){
	var vpHeight = $(window).height();

	var initialScroll = $(window).scrollTop();

	var williamTop = $('#william').offset().top;

	$('.title-card').css('height',vpHeight);

	// $('.section-head').css('height', vpHeight - 100);



	// Add Table of Contents to Page
	var tocDetect = function(scrollPos){

		vpWidth = $(window).width();

		if (vpWidth >= 750) {
			if(scrollPos >= williamTop + 600){
				$('.internal-nav').removeClass('hidden');
				$('.internal-nav').fadeIn();
				$('.top-after').css('margin-top',$('.internal-nav').height() + 50);
			}
			else{
				$('.internal-nav').addClass('hidden');
				$('.top-after').css('margin-top', 50);
			}
		}
	};

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

	   // Call table of contents detection
	   tocDetect(value);

	});
});