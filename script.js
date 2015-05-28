$(function(){
	$('.album-art')
		.hover( 
			function(){
				$(this).addClass('animated shake');
			},
			function(){
				$(this).removeClass('animated shake');
			})
		.on('click', function() {
			$('.album-art').off();
			$('#bandcamp').animate({'top':'-120px'}, function(){
				$('#bandcamp').css({'z-index':3});
			});
			$('#album').animate({'top':'-50px'}, function(){
				$('#album').css({'z-index':3})
			});
			$('.cap').animate({'top':'-2000px'}, 500);
		});
	});