
var VIV = {
	retrieveJsonFileAndPlaceInPage: function () {
		$.getJSON('js/images.json', function (json) {
			VIV.placeImageHtmlIntoPage(VIV.convertJsonToHtml(json) );
			VIV.initialisePlugin();
		});
	},

	convertJsonToHtml: function (json) {
		var html = VIV.createListOfLargeImagesHtml(json) + VIV.createListOfThumbnailsHtml(json);
		return html;
	},

	placeImageHtmlIntoPage: function (imageHtml) {
		$('.gallery').append(imageHtml);
	},

	initialisePlugin: function () {
		$("#slider3").responsiveSlides({
			manualControls: '#slider3-pager',
			maxwidth: 540
		});
	},

	createListOfThumbnailsHtml: function (listOfImageKeysAndDescriptions) {
		var listHead = '<ul id="slider3-pager">';
		var listTail = '</ul>';
		var html = '';

		$.each(listOfImageKeysAndDescriptions, function (index, imageObject) {
			html += '<li>' + VIV.createThumbailHtml(imageObject.imagePath.small, imageObject.description) + '</li>';
		});

		return listHead + html + listTail;
	},

	createListOfLargeImagesHtml: function (listOfImageKeysAndDescriptions) {
		var listHead = '<ul class="rslides" id="slider3">';
		var listTail = '</ul>';
		var html = '';

		$.each(listOfImageKeysAndDescriptions, function (index, imageObject) {
			html += '<li>' + VIV.createLargeImageHtml(imageObject.imagePath.large, imageObject.description) + '</li>';
		});

		return listHead + html + listTail;
	},

	createThumbailHtml: function (imagePath, imageDescription) {
		var html = '<a href="#"><img height="50" width="50" src="' + imagePath + '" alt="' + imageDescription + '" /></a>';
		return html;
	},

	createLargeImageHtml: function (imagePath, imageDescription) {
		var html = '<a href="#" class="clearfix"><img height="300" width="450" src="' + imagePath + '" alt="' + '" /><span>' + imageDescription + '</span></a>';
		return html;
	}

};




VIV.retrieveJsonFileAndPlaceInPage();