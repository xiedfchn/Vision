// JavaScript Document
$(function(){
	var nL = $("nav li");
	var h = $(window).height();
	var wr = $("#wrapper");
	var i = 0;
	var curr;
	$(".page,html,body").height(h);
	$('#logo a').click(function(e){
		$('#logo').addClass('active');
		$('#index').addClass('show');
		$('nav li').removeClass('current');
		$('.page').removeClass('inview');
		i = 0;
		wr.css({
			'top': "0px"
		});
	}).click();
	nL.find("a").click(function(){
		i = nL.find("a").index(this)+1;
		domove();
	})
	function domove(){
		nL.eq(i-1).addClass("current").siblings().removeClass("current");
		$('#logo').removeClass('active');
		$('#index').removeClass('show');
		$('.page').eq(i).addClass('inview').siblings().removeClass("inview");
		curr = -i*h;
		$('.csstransitions #wrapper').css({
			'top': curr + "px"
		});
	}
	$('.action').click(function() {
		$('nav li:first a').click()
	});
	var lock = true;
	$(document).mousewheel(function(event,delta){
		event.preventDefault();
		if(lock){
			lock = false;
			if(delta > 0){
				if( i > 1){
					i--;
					domove();
				}else{
					$('#logo a').click();
				}
			}else{
				if( i < nL.length){
					i++;
					domove();
				}
			}
			var timetem = setTimeout(function(){
				lock = true;
			},1500)
		}
		
		return false;
	}).mousedown(function(event){
		document.ondragstart=function() {return false;}
		if(event.which == 2){ return false;}
		
	})
	
	$(window).resize(function() {
		h = $(window).height();
		curr = i*h;
		$(".page,html,body").height(h);
		wr.css({
			'top': -curr + "px"
		});
		var lt = $('.intro-bg-left');
		var rt = $('.intro-bg-right');
		var pr = document.documentElement.clientWidth-(document.documentElement.clientWidth - 700)/2;
		var pl = document.documentElement.clientWidth-(document.documentElement.clientWidth - 700)/2 - 535;
		rt.css({
			left: pr,
		})
		lt.css({
			right: pl,
		})
	});
	var lt = $('.intro-bg-left');
	var rt = $('.intro-bg-right');
	var pr = document.documentElement.clientWidth-(document.documentElement.clientWidth - 700)/2;
	var pl = document.documentElement.clientWidth-(document.documentElement.clientWidth - 700)/2 - 535;
	rt.css({
		left: pr,
	})
	lt.css({
		right: pl,
	})
	$('.screen').click(function(){
		var lt = $('.intro-bg-left');
		var rt = $('.intro-bg-right');
		var t = $(this);
		var tem = t.find('li:first').clone(),
		ltTem = lt.find('li:first').clone(),
		rtTem = rt.find('li:first').clone();
		$('.screen ul .clear').before(tem);
		lt.find('.clear').before(ltTem);
		rt.find('.clear').before(rtTem);
		rt.find('li:first').addClass('jump');
		lt.find('li').removeClass('jump');
		rt.find('ul').delay(300).animate({
			left: 80,
		},150).animate({
			left: -535,
		},250,function(){
			rt.find('li:first').remove();
			rt.find('ul').css('left', 0);
		});
		$(this).find('ul').delay(550).animate({
			left: -670,
		},250,function(){
			t.find('li:first').remove();
			t.find('ul').css('left', 0);
		});
		lt.find('ul').delay(600).animate({
			left: -535,
		},250,function(){
			lt.find('li:first').remove();
			lt.find('ul').css('left', 0);
		});
		setTimeout(function() {
			lt.find('li:eq(3)').addClass('jump');
		},700);
	})
	
	var viewportLock = false;
	$('#feature-control b').click(function() {
		var t = $(this),
		i = t.index(),
		k = $('#feature-preview #article'); 
		t.addClass('cur').siblings().removeClass('cur');
		k.removeClass('show').eq(i).addClass('show');
		$('#feature').addClass('nd');
		setTimeout(function() {
			$('#feature').removeClass('nd');
		},
		500);
		viewportLock = false;
	}).eq(0).click();
	$('.viewport').mouseenter(function() {
		viewportLock = true;
	});
	$(document).mousemove(function(event) {
		if (viewportLock) {
			var t = $('.viewport-wrap'),
			tX = 0,
			tY = 0;
			if (event.clientX - t.offset().left <= 140) {
				tX = 140;
			} else if (event.clientX - t.offset().left >= 680) {
				tX = 680;
			} else {
				tX = event.clientX - t.offset().left;
			}
			if (event.clientY - t.offset().top <= 0) {
				tY = 0;
			} else if (event.clientY - t.offset().top >= 368) {
				tY = 368;
			} else {
				tY = event.clientY - t.offset().top;
			}
			$('.show .viewport-fg img').css({
				'marginLeft': -tX * 2.2,
				'marginTop': -tY * 2.2,
			})
			$('.show .viewport').css({
				'transform': 'translate3d(' + (tX - 124) + 'px,' + (tY - 124) + 'px,0)',
			})
		}
	});
	
	
	var l = $('.showcase-preview-left'),
	r = $('.showcase-preview-right'),
	lt = $('.list-item').length,
	ul = $('.showcase-preview ul'),
	lock = true;
	l.click(function() { (lock) && new(function() {
			lock = false;
			var c = $('.list-item:last').clone().prependTo(ul);
			ul.css('left', -300);
			ul.animate({
				left: 0,
			},300,function(){
				$('.list-item:last').remove();
				lock = true;
			})
		});
	});
	r.click(function() { (lock) && new(function() {
			lock = false;
			var c = $('.list-item:first').clone();
			ul.find('.clear').before(c);
			ul.animate({
				left: -300,
			},300,function(){
				$('.list-item:first').remove();
				ul.css('left', 0);
				lock = true;
			})
		});
	});
})

$(function(){
	var cb = $("#team-control b");
	var ul = $("#meambers-list");
	cb.click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var i = cb.index(this);
		var cur = -i*1200;
		ul.animate({
			left: cur+"px",
		})
	}).eq(0).click();
})