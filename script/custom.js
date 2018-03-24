
jQuery(document).ready(function($){

//UIKIT
UIkit.offcanvas('.menuAux', {
	overlay:true,
	flip: true,
	toggle:true,
	stack:true,
});
UIkit.toggle('.openAux', {
	target:'.menuAux',
});

UIkit.offcanvas('.sidebar', {
	overlay:true,
	toggle:true,
	stack:true,
});
UIkit.toggle('.open-sidebar', {
	target:'.sidebar',
});

UIkit.switcher('.paginas');


UIkit.drop('.context', {
	mode:'click',
	pos:'left-center'
});

//MASONRY
// var $grid = $('.servs').masonry({
// 	itemSelector: '.servs-li',
// 	columnWidth: '.servs-li',
// 	percentPosition: true,
// 	sFitWidth: true,
// 	gutter: 30
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
// $grid.masonry('layout');
// });



});
