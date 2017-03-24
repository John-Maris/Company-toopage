$(document).ready(function(){
	e_star();
})

function e_star(){
	var ostar = $('#star1 li');
	var ostar2 = $('#star2 li');
	ostar.click(function()
	{
		index = $(this).index();
		var bool = $(this).hasClass('on');
		if(!bool)
		{
			for (var i = 0; i <= index; i++) {
			$(ostar[i]).addClass('on')
			}
		}
		else
		{
			for (var i = index; i < ostar.length; i++) {
			$(ostar[i]).removeClass('on')
			}
		}
	})
	ostar2.click(function()
	{
		index = $(this).index();
		var bool = $(this).hasClass('on');
		if(!bool)
		{
			for (var i = 0; i <= index; i++) {
			$(ostar2[i]).addClass('on')
			}
		}
		else
		{
			for (var i = index; i < ostar2.length; i++) {
			$(ostar2[i]).removeClass('on')
			}
		}
	})
}