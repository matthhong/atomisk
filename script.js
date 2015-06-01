$(function(){
	$('#bottle-wrapper')
		// .hover( 
		// 	function(){
		// 		$(this).addClass('animated shake');
		// 	},
		// 	function(){
		// 		$(this).removeClass('animated shake');
		// 	})
		.on('click', function() {
			// $('.album-art').off();
			// $('#bandcamp').animate({'top':'-120px'}, function(){
			// 	$('#bandcamp').css({'z-index':3});
			// });
			// $('#album').animate({'top':'-50px'}, function(){
			// 	$('#album').css({'z-index':3})
			// });
		if (soundFile.isPlaying()){
			$('.pause').show();
			$('.cap').animate({'top':'-15px'}, 100);
		} else {
			$('.pause').hide();
			$('.cap').animate({'top':'0px'}, 100);
		}
		});
	});