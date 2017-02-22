var state = $('.p-content .p-state');
var state_title = $('.menu-state .state')
var order_list = $('.order-list');
//订单状态下拉显示
$('.menu-state').hover(function(){

			menu = $(this).find('.state')
			menu.show();
		},function(){
			menu.hide();
		});
		
		$('.state-li').click(function(){

			var obj = $(this).html();
			var menu = $(this).parent('.state')
			var state = menu.siblings('p')
			state.html(obj);
			menu.hide();

});
//订单按照状态进行分类显示
state_title.find('.state-li').click(function(){
	var obj = $(this).text();
	state.parents('.order-list-li').css('display','none')
	switch(obj){
		case "待付款":
		for (var i = 0; i<state.length; i++) {
			var state_text = state.eq(i).text();
			if(state_text === '待付款')
			{
				state.eq(i).parents('.order-list-li').show();
			}
		}
		break;

		case "待设计":
		for (var i = 0; i<state.length; i++) {
			var state_text = state.eq(i).text();
			if(state_text == '待设计'){
				
				state.eq(i).parents('.order-list-li').show();
			}
		}
		break;

		case "待发货":
		for (var i = 0; i<state.length; i++){
			var state_text = state.eq(i).text();
			if( state_text == '待发货')
			{
				state.eq(i).parents('.order-list-li').show();
				
			}
		}
		break;

		case "待评价":
		for (var i = 0; i<state.length; i++) {
			var state_text = state.eq(i).text();
			if(state_text == '待评价')
			{
				
				state.eq(i).parents('.order-list-li').show();
			}
		}
		break;

		case "全部订单":
		state.parents('.order-list-li').css('display','block');
		break;

		case "完成订单":
		for (var i = 0; i<state.length; i++) {
			var state_text = state.eq(i).text();
			if(state_text == '完成订单')
			{
				
				state.eq(i).parents('.order-list-li').show();
			}
		}
		break;
	}
})





