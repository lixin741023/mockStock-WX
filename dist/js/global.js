/*《底部消息提示弹出框》
 	text：弹出内容；（必填）
 *  time：弹出框持续时间；（必填）
 *  fun：弹框消失后执行的函数；（可省略）
 * */
function alertTipBottom(text,time,fun){
	mui.toast(text,{duration:time, type:'div'});
	if(fun==undefined)return;
	setTimeout(function(){
		fun();
	},time+250);
};

/*《页面跳转前的动画》
 	dest：动画执行完后跳转的地址（必填）
 *  direction：动画方向（left，right）
 *  holdTime：动画执行时间
 * */
function href_beforeOutAnimation(dest,direction,holdTime){
	let target=$('body').children(':first');
	target.css('position','relative');
	if(holdTime==undefined)holdTime=700;
	function a(){window.location.href=dest};
	switch (direction){
		case 'left':
			target.animate({
				'left':'-20px',
				'opacity':'0'
			},holdTime,a);
			break;
		case 'right':
			target.animate({
				'right':'-20px',
				'opacity':'0'
			},holdTime,a);
			break;
		default:
			target.animate({
				'opacity':'0'
			},holdTime,a);
			break;
	};
};

/*《进入页面展示动画》
 * direction：动画执行方向
 * holdTime:动画执行时间
 * */
function beforeInAnimation(direction,holdTime){
	let target=$('body');
	if(direction==undefined)direction='fade';
	if(holdTime==undefined)holdTime=700;
	switch (direction){
		case 'none':
			target.css('opacity','1');	
			break;
		case 'left':
		 	target.css('left','-50px');
			target.animate({
				'left':'0px',
				'opacity':'1'
			},holdTime);
			break;
		case 'right':
			target.css('right','-50px');
			target.animate({
				'right':'0px',
				'opacity':'1'
			},holdTime);
			break;
		default:
			target.animate({
				'opacity':'1'
			},holdTime);
			break;
	};
};

/*非拜师老师提醒*/
function notMyTeachersTip(){
	$('.notMyTeachers').fadeIn('fast');
};

/*验证码光标控制器*/		
function nextFocus(){
	setTimeout(function(){
		focus++;
		if(focus==inputList.length){
			focus=inputList.length-1;
			$(inputList[focus]).blur();
			checkAnimation();
			startCheck();
			return;
		};
		inputList[focus].focus();
	},5);		
};
function prevFocus(){
	setTimeout(function(){
		focus--;
		if(focus<0)focus=0;
		inputList[focus].focus();
	},5);		
};
function focusControl(){
	if(event.keyCode==8){
		$(inputList[focus]).val('');
		$(inputList[focus-1]).val('');
		prevFocus();
	}else{
		nextFocus();
	};
};
function focusClick(){
	$(inputList[focus]).focus();
};

function checkingLoading_show(){
	$('.checking').fadeIn()
};
function checkingLoading_close(){
	$('.checking').fadeOut('fast')
};
function checkAnimation(){
	checkingLoading_show();
};


