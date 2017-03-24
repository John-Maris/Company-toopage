$(document).ready(function()
{

	//list();//控制一行几列
	list_img();
	lazyload();
	mould_item();
	mould_collect();
})
function list_img(){

	$('a.list-img').each(function(){

		var img_height = $(this).find('img').height();
		$(this).height(img_height);
	});

}
function waterfall(obj){
	$(function() {
	    var $container = obj
	    $container.imagesLoaded(function() {
	        $container.masonry({
	                itemSelector: '.mould-li',
	                gutter: 20,
	                isAnimated: true,
	            });
	     	});
	});
}
function lazyload(){
	$('#grid_pay').lazyload({ threshold : 200 });
	$('#grid_collection').lazyload({ threshold : 200 });
	$("#grid").lazyload({ threshold : 200 });
}

function mould_item()
{
	$('.filter-hot .heat').click(function(){
		$(this).siblings('.heat').removeClass('on')
		$(this).addClass('on');
	})
	$('.mould_item dd').click(function(){
		$(this).siblings('dd').removeClass('on')
		$(this).addClass('on');
	})
}
function mould_collect(){
	$('.s-collect').click(function(){
		$(this).toggleClass('com');
	})
}