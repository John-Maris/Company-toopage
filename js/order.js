$(document).ready(function(){

		tab_adress();//切换地址
		hide_on();
		tab_on()//切换默认地址
		tab_delete();//默认下无法删除
		tab_coupon();//切换优惠方式
		add_adress();//新增收货地址
	})
	function tab_adress(){

		$('.take').click(function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			hide_on();
		})
		$('.payment').click(function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		})
	}

	function hide_on(){
		$('.take').each(function(){
			var bool = $(this).hasClass('on');
			if(bool)
			{
				$(this).find('.handle .tab_on').hide();
				$(this).find('.handle .delete').hide();
			}
			else
			{
				$(this).find('.handle .tab_on').show();
				$(this).find('.handle .delete').show();
			}
		})
	}
	function tab_on(){
		$('.handle .tab_on').click(function(){
			$(this).parents('.take').siblings().removeClass('on')
			$(this).parents('.take').addClass('on')
			hide_on();
		})

	}
	function tab_delete(){

		$('.handle .delete').click(function(){
			$(this).parents('.take').remove();
		})
	}
	function tab_coupon(){
		var ticket = $('.coupon-content .ticket');
		var point  = $('.coupon-content .point');
		var ticket_content = $('.coupon-content .ticket-info');
		var point_content = $('.coupon-content .point-info');
		ticket.click(function(){
			$(this).siblings().removeClass('on')
			$(this).addClass('on')
			ticket_content.show()
			ticket_content.siblings().hide();
		});
		point.click(function(){
			$(this).siblings().removeClass('on')
			$(this).addClass('on')
			point_content.show()
			point_content.siblings().hide();
		});

	}
	function add_adress(){

		 var btn_address = $('.orderAdress .add')
		 btn_address.click(function() {
		 	public_add_adress();
		 	/* Act on the event */
		 });
	}