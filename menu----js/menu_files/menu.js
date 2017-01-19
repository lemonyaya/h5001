$(document).ready(function(){
    $('.sidelist').mousemove(function(){
		$(this).find('.i-list').slideDown(); 
		//$(this).find('h3').addClass('hover');
	});
	$('.sidelist').mouseleave(function(){
		$(this).find('.i-list').slideUp();  //slideUp("fast");
		//$(this).find('h3').removeClass('hover');
	});
});