function filter(){
	if ($('body').hasClass('mentores')) {

		$('.filter h2').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			if ( $(this).hasClass('filter-active') ) {
				$(this).removeClass('filter-active');
			}else{
				$(this).addClass('filter-active');
			}
		});

		$('.filter ul li').on('click', function(event) {
			event.preventDefault();
			var id = $(this).attr('id');
			$('.filter h2').removeClass('filter-active');
			$('.showcase-mentors ul li').fadeOut();
			$.each($('.showcase-mentors ul li'), function(index, el) {
				var categoria = $(el).attr('categoria');
				if( categoria == id){
					$(this).fadeIn();
				}
			});
		});
		
	}
}

$(document).ready(function() {
	filter();
});