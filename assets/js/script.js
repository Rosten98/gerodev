$(function(){
	$('.fa-times').hide();
	$('.fas').click(()=>{
		$('.fa-bars').toggle();
		$('.fa-times').toggle();
		$('.mobile-nav').slideToggle();
	});

});
