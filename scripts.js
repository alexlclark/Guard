for (var i=0; i<artNewsData.length; i++) {
	var rowData = artNewsData[i];
	
	var $template = $('<div class="quoteContainer">'+
						'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
						'<div class="readMore">Read More</div>'+
						'<div class="moreInfo">'+
							'<div class="source">'+rowData.source+'</div>'+
							'<div class="yearsClean">'+rowData.yearsClean+'</div>'+
							'<div class="location">'+rowData.location+'</div>'+
							'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
						'</div>'+
					'</div>');

$template.find(".readMore").on("click", toggleContent)

function toggleContent(){
	$quoteContainer = $(this).parent();
	
	if($quoteContainer.hasClass("expanded")){// quoteContainer has class .expanded (you can see content!), so remove content!
	   $quoteContainer.removeClass("expanded");
	}else{//quoteContainer does not have calsss expanded (you can't see content), so show content!
	   $quoteContainer.addClass("expanded");
	}
}

$('#dataContainer').append($template);
	
}