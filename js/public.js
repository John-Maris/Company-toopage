//topBar
	var n =0;
	$('#headerBar .rightArea li').hover(function(){
		$(this).find('div').css('display','block')
	},function(){
		$(this).find('div').css('display','none')
	})
	//topBar随页面滚动
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		var topBar    = $('#headerBar .topBar');
		var condition = topBar.height()
		if(scrollTop > (condition+1))
		{
			topBar.addClass('fixed');

		}
		else if(scrollTop < condition)
		{
			
			topBar.removeClass('fixed')

		}
	})
	//类别下拉菜单
	$('.search_select').click(function(){

		$(this).find('.selection').slideToggle('fast');
	
	})
	//商品列表
	$('.shop_list li').hover(function(){

		list_height = $(this).parent('.shop_list').height();
		list_width  = $(this).parent('.shop_list').width();
		num = $(this).find('.shop_content li').length;
		if(num>9)
		{
			$(this).find('.shop_content').width((2*list_width))
			$(this).find('.shop_content').height(list_height);
		}
		else
		{
			$(this).find('.shop_content').width(list_width)
		}
	})


	//左侧菜单悬停效果
	$('.shopClass').hover(
		function()
		{
			$('.shopContainer').show();

		},function()
		{
			var shoptitle = $(this).children().is($('.shopTitle'))
			if(shoptitle)
			{
				$('.shopContainer').hide();
			}
			else
			{
				$('.shopContainer').show();
			}
			
			

			    
		}
			
	);

//判定是否为数字
	function input_Nan (obj) {

		var val = obj.value;
		if(!isNaN(val))
		{
			
			obj.css('border-color','red')
		}
		else
		{
			layer.tips('请输入数字',obj,{tips:[2,'#23598f']})
			obj.value = '';
		}
		

	}
	//金额进行格式化
	function fmoney(s, n)  
	{  
	   n = n > 0 && n <= 20 ? n : 2;  
	   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
	   var l = s.split(".")[0].split("").reverse(),  
	   r = s.split(".")[1];  
	   t = "";  
	   for(i = 0; i < l.length; i ++ )  
	   {  
	      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
	   }  
	   return t.split("").reverse().join("") + "." + r;  
	} 

	//通过改写绝对路径使‘更多’指向全部商品页
	$('.floor_title .more').click(function(){
		window.location.href='../product-list.html';
	})

	//通过改写绝对路径使‘全部商品’指向全部商品页
	$('.shopClass .shopTitle').click(function(){
		window.location.href='../product-list.html';
	})
