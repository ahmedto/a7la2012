// JavaScript Document
$(document).ready(function(e) {
	// Menu
	$('#header .user-show .avatar').hoverIntent(makeTall,makeShort);
	$('#header .user-show .forum-icon li').hoverIntent(makeTall,makeShort);
	function makeTall(){  $(this).find('.submenu').fadeIn(200);}
	function makeShort(){ $(this).find('.submenu').fadeOut(200);}
	
	$('.forumhome .category-title > .less-more').toggle(function(){
		$(this).removeClass('hide').addClass('show');
		$(this).parent('.category-title').parent('.forumhome').find('>.content').slideUp(200);
	},function(){
		$(this).removeClass('show').addClass('hide');
		$(this).parent('.category-title').parent('.forumhome').find('>.content').slideDown(200);
	});
	
	$('.forumhome .small-head > .less-more').toggle(function(){
		$(this).removeClass('hide').addClass('show');
		$(this).parent('.small-head').next('.content-small').slideUp(200);
	},function(){
		$(this).removeClass('show').addClass('hide');
		$(this).parent('.small-head').next('.content-small').slideDown(200);
	});
	
	$('.facebook-like > .less-more').toggle(function(){
		$(this).removeClass('hide').addClass('show');
		$(this).next('.content').slideDown(200);
	},function(){
		$(this).removeClass('show').addClass('hide');
		$(this).next('.content').slideUp(200);
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.gototop').fadeIn();
		} else {
			$('.gototop').fadeOut();
		}
		if ($(this).scrollTop() > 50) {
			$('#header').addClass('shadow');
		} else {
			$('#header').removeClass('shadow');
		}
	});
	$('.gototop').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});
	
	$('.posts-ul > li:last-child').css('border-bottom','none');

	// for nav, menu
	$('#header').scrollToFixed({ marginTop: 0 });
});