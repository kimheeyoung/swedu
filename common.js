var myVar = null;
$(function(){
	setTimeout(function() {
	  $('#doc').addClass('show');
	}, 300);

	// f-fmaily
	$('.f-family > .sel').click(function() {
	  if ($(this).parent().hasClass('active')) {
		  $(this).parent().removeClass('active');
		  $(this).parent().find('ul').stop().slideUp();
	  } else {
		   $(this).parent().addClass('active');
		   $(this).parent().find('ul').stop().slideDown();
	  }
	}); 
	/// input & select
	$('.chk-select').find('select').change(function() {
		  var current = $('.select-input').val();
		  if (current != 'null') {
			  $(this).css({'color':'#000'})
			  $(this).parent().addClass('active');
		  } else {
			   $(this).css({'color':'#666'})	
			   $(this).parent().removeClass('active');
		  }
	}); 
	$('.chk-input').find('input[type=text],textarea').css({'color':'#666'});
	$('.chk-input').find('input[type=text],textarea').on('change keydown keypress keyup',function() {
	  var current = $(this).parent().find('input[type=text]').val();
	  if (current != 'null') {
		  $(this).css({'color':'#000'});
		  $(this).parent().addClass('active');
	  } else {
		  $(this).css({'color':'#666'});
		  $(this).parent().removeClass('active');
	  }
	}); 
	$('.chk-input.active').find('input[type=text],textarea').css({'color':'#000'});
	$('.chk-input.active').find('input[type=text],textarea').change(function() {
	  var current = $(this).val();
	  if (current != 'null') {
		  $(this).css({'color':'#000'});
	  } else {
		  $(this).css({'color':'#000'});
	  }
	}); 
	$('.passValue').on('change keydown keypress keyup',function() {
		  var current = $('.passValue').val();
		  if (current != 'null') {
			  $(this).attr('type', 'password'); 
		  } else {
			 $(this).attr('type', 'text'); 
		  }
	});  
	
	// allmenu script
	$('.bt-allmenu').bind("click",function(){
		 $("body").css({"overflow":"hidden"});   	
		 $('#allmenu-wrap').addClass('open');	
		 setTimeout(function() {
			 $('#allmenu-wrap').addClass('show');
		 }, 150);
	});
	$('#allmenu-wrap').find('.close').bind("click",function(){
		$("body").css({"overflow":"visible"});   
	    $('#allmenu-wrap').removeClass('show');	
		 setTimeout(function() {
			$('#allmenu-wrap').removeClass('open');
		}, 150);
	});
});	
$(window).scroll(function() {
	var position = $(window).scrollTop(); 
	var bodyWidth = document.documentElement.clientWidth; 
	var gnbH = $('#gnb-wrap').outerHeight();
	if (position > gnbH){
		$('#header-wrap').addClass('fix');
	}else{
		$('#header-wrap').removeClass('fix');
	}
});
$(window).load(function(){
	var position = $(window).scrollTop(); 
	var bodyWidth = document.documentElement.clientWidth; 
	var gnbH = $('#gnb-wrap').outerHeight();
	if (position > gnbH){
		$('#header-wrap').addClass('fix');
	}else{
		$('#header-wrap').removeClass('fix');
	}
});
function sizeControls(width) {
	width = parseInt(width);
	var bodyHeight = document.documentElement.clientHeight; 
	var bodyWidth = document.documentElement.clientWidth; 

}
jQuery(function($){
	sizeControls($(this).width());
	$(window).resize(function() {
		if(this.resizeTO) {
			clearTimeout(this.resizeTO);
		}
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 10);
	});
});	
$(window).on('resizeEnd', function() {
	sizeControls($(this).width());
});
$(window).load( function() { 
	sizeControls($(this).width());
});

function clearText(thefield) {
  if (thefield.defaultValue==thefield.value) {
    thefield.value="";
  }
} 
function defaultText(thefield) {
  if (thefield.value=="") {
    thefield.value=thefield.defaultValue;
  }
}

//필수정보 입력 확인
function essential() {

	for(var i=0; i<$('.essential').length; i++) {
		var $e = $('.essential').eq(i);
		if($e.prop('disabled')) continue;
		switch($e.prop('tagName')) {
			case 'INPUT' : 
				switch($e.attr('type')) {
					case 'text' : 
					case 'hidden' : 
					case 'password' : 
					case 'number' : 
						if(!trim($e.val())) {
							alert('['+ $e.attr('title') +'] 필수 입력입니다');
							$e.focus();
							return false;
						}
						if($e.attr('minlength')) {
							if($e.val().length < $e.attr('minlength')) {
								alert($e.attr('minlength') + '자 이상 입력해주세요');
								$e.focus();
								return false;
							}
						}
						break;
					case 'radio' :
					case 'checkbox' :
						var $name = $e.attr('name');
						if($('[name="' + $name + '"]:checked').length < 1) {
							$('[name="' + $name + '"]:eq(0)').focus();
							alert('['+ $e.attr('title') + '] 필수 선택입니다');
							return false;
						}
						break;
				}
				break;
			case 'SELECT' : 
				if(!$e.val()) {
					alert('['+ $e.attr('title') +'] 필수 선택입니다');
					$e.focus();
					return false;
				}
				break;
			case 'TEXTAREA' :
				if(!trim($e.val()) || trim($e.val()) == '<p>&nbsp;</p>') {
					alert('['+ $e.attr('title') +'] 필수 입력입니다');
					$e.focus();
					return false;
				}
				break;
		}
	}
	return true;

}
//필수정보 입력 확인 : 폼 아이디 추가
function essential2(id) {

	if(!id || id == undefined) {
		alert('FORM ID가 지정되지 않았습니다.');
		return false;
	} else {
		for(var i=0; i<$('#' + id + ' .essential').length; i++) {
			var $e = $('#' + id + ' .essential').eq(i);
			if($e.prop('disabled')) continue;
			switch($e.prop('tagName')) {
				case 'INPUT' : 
					switch($e.attr('type')) {
						case 'text' : 
						case 'hidden' : 
						case 'password' : 
						case 'number' : 
							if(!$.trim($e.val())) {
								alert('['+ $e.attr('title') +'] 필수 입력입니다');
								$e.focus();
								return false;
							}
							if($e.attr('minlength')) {
								if($.trim($e.val()).length < $e.attr('minlength')) {
									alert($e.attr('minlength') + '자 이상 입력해주세요 - ' + $e.attr('title'));
									$e.focus();
									return false;
								}
							}
							break;
						case 'radio' :
						case 'checkbox' :
							var $name = $e.attr('name');
							if($('[name="' + $name + '"]:checked').length < 1) {
								$('[name="' + $name + '"]:eq(0)').focus();
								alert('['+ $e.attr('title') +'] 필수 선택입니다');
								return false;
							}
							break;
					}
					break;
				case 'SELECT' : 
					if(!$e.val()) {
						alert('['+ $e.attr('title') +'] 필수 선택입니다');
						$e.focus();
						return false;
					}
					break;
				case 'TEXTAREA' :
					if(!$.trim($e.val()) || $.trim($e.val()) == '<p>&nbsp;</p>') {
						alert('['+ $e.attr('title') +'] 필수 입력입니다');
						$e.focus();
						return false;
					}
					break;
			}
		}
		return true;
	}

}

//loading -loading css 추가해야함
function loading(md) {
	switch(md) {
		case 'show' : 
			if($('#LOADINGAREA').length == 0) {
				var sHtml = '';
				sHtml += '<div id="LOADINGAREA">';
				sHtml += ' <div class="load-wrapp">';
				sHtml += '	<div class="load-4">';
				sHtml += '		<div class="ring-1">';
				sHtml += '		</div>';
				sHtml += '	</div>';
				sHtml += ' </div>';
				sHtml += '	<div class="loadingbg"></div>';
				sHtml += '</div>';
				$('body').append(sHtml);
			}
			$('#LOADINGAREA').show();
			break;
		case 'hide' : 
			$('#LOADINGAREA').hide();
			break;
		default : 
			break;
	}
}
