var count = 0;

$(document).ready(function(){

	$.ajax('https://secure.flickr.com/services/rest/',{
		data: {
			format: 'json',
			method: 'flickr.interestingness.getList',
			api_key: '270e736b0e42643aab5aab7819164d84'
		},
		dataType: 'jsonp',
		jsonp: 'jsoncallback'
	}).done(function(data){
	
		var $gallery = $('#gallery'),
			$image,
			$link,
			base_url,
			t_url,
			i_url;
			
		$.each(data.photos.photo, function(index, photo){
			if(count < 81)
			{
				base_url = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret;
				t_url = base_url + '_t.jpg';
				i_url = base_url + '_b.jpg';  
				
				$image = $('<img/>').prop({
					'src': t_url,
					'title': photo.title
				});
				
				$link = $('<a/>').prop('href', i_url).append($image);
				$gallery.append($link);
				count++;
			}
		});
	
		$('#gallery').gallerie({
			targetOverlay: $('#galleryoverlay')
		});

	});
});