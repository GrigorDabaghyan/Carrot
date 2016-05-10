$( document ).ready(function() {
	$(document).on("keydown",function(e){
		if (event.keyCode==106) {
			
				console.log("???");
        $(".errorhandler").css({"display":"block"});
     
		}
	});
     
    $(".close").on("click", function(e) {
        $(".errorhandler").css({"display":"none"});
    });   
});