$(".close").click(function(){
		$('.works_tc,.mengban,.close').stop().fadeOut();
});
$(".works ul li").click(function(){
		$('.works_tc,.mengban',this).stop().fadeIn();
		$('.close').stop().fadeIn();
});
