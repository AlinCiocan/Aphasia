$(document).ready(function() {
	
	var SECONDS_AFTER_CORRECT_ANSWER = 3; 
	
	swapImagesRandom();
	
	$(".next-page").click(function() {
		moveToTheNextPage();
	});
	
	$(".correct").click(function(){
		$(this).unbind( "click" );
		$(this).parent().addClass("correct-answer");
		setTimeout(moveToTheNextPage, SECONDS_AFTER_CORRECT_ANSWER * 1000);
	});

	function swapImagesRandom() {
		var shouldSwap = Math.random() > 0.5? true : false;
		if(shouldSwap) {
			swapImages();
		}
	}
	
	function swapImages() {
		var $leftImage = $(".left-image img");
		var $rightImage = $(".right-image img");
		
		$leftImage.remove();
		$rightImage.remove();
		
		$(".left-image").append($rightImage);
		$(".right-image").append($leftImage);
		
	}
	
	function moveToTheNextPage() {
		var nextPage = calculateNextPage();
		location.href = nextPage;
	}
	
	function calculateNextPage() {
		var matches = location.href.match(/page(\d+)/);
		
		if(matches && matches[1]) {
			return "page" + (parseInt(matches[1], 10) + 1) + ".html";
		}
		
		return location.href;
	}
});