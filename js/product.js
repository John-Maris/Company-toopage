$(document).ready(function(){
	
	setCss();
	control_quantity();//控制产品数量选择
	show_more();//控制‘更多’按钮出现
	click_more();
	//评价页面客户小图变大
})

//控制更多按钮的出现判定
function show_more(){

	$('.list_content').each(function(){

		var content_hegiht = $(this).height();
		var frame_height = $('.proList').height();
		if(content_hegiht>(frame_height+20))
		{
			
			$(this).find('ul').append('<li class="more"><a>+更多</a></li>')
		}
	})
}


function control_quantity ()
{	
	//在加减器旁边添加印刷说明
	$('#spinner').parents('.proList').append("<a class='quantity_summary'>(名片每盒100张，2盒起印)</a>")

	var min_value = 2;
	$('#spinner').spinner({
		value:min_value,
		max:999,
		min:min_value,
		hold: true,
		step:1
	})
}
//控制图片切换
$('.product_img_s li').click(function(){

			var num = $(this).index();

			goleft = num*$('.product_img .imgBox .product_li').width();

			$('.product_img .imgBox').animate({'left': '-'+goleft+'px'}, 200)

		})

//控制选项
$('.item a').click(function(){

	$(this).parent('.item').siblings().find('a').removeClass('on')
	$(this).addClass('on');

});
 
 function click_more(){

 	var boolean = true;
	var orgin_height = $('li.more').parents('.proList').height();

$('li.more').bind('click',function(){

	console.log('ok');

	prolist = $(this).parents('.proList');
	if(boolean)
	{
		listcontent = $(this).parents('.list_content').height();
		prolist.height(listcontent);
		$(this).find('a').html('-收起')
		boolean = false;
	}
	else
	{
		prolist.height(orgin_height);
		$(this).find('a').html('+更多')
		boolean = true;
	}

})
 }
$('.productNav .nav_li').click(function(){
	$(this).siblings().removeClass('on');
	$(this).addClass('on')
})

$('.s_self').click(function(){
	$('.proFile').slideToggle();
})

function setCss(){	
	window_height = $(window).height();
	$('.model-file-upload').height(window_height);

	fileTop = (window_height-$('.fileContent').height())/2;
	$('.fileContent').css('top',fileTop)
}
//上传文件的摸态框取消按钮
$('.btn_close').click(function(){
	$('.model-file-upload').hide();
})
$('.cancel').mousedown(function(){
	$('.model-file-upload').hide();
})
//客户评价与产品详情的TAB替换
$('.nav_li').click(function(){
	$(this).siblings().removeClass('on')
	$(this).addClass('on')
	var tab_txt = $(this).text();
	console.log(tab_txt)
	switch(tab_txt)
	{
		case '产品详情':
		$('.content').children().css('display', 'none');
		$('.productContent .content .pro_info').css('display', 'block');
		break;
		case '客户评价':
		$('.content').children().css('display', 'none');
		$('.productContent .content .comment').css('display', 'block');
		break;
		case '下单流程':
		$('.content').children().css('display', 'none');
		$('.productContent .content .lc').css('display', 'block');
		break;
	}
})

