$(function () {
  
  var msie6 = $.browser == 'msie' && $.browser.version < 7;
  
  if (!msie6) {
    var top = $('#ads').offset().top - parseFloat($('#ads').css('margin-top').replace(/auto/, 0));
    $(window).scroll(function (event) {
      // what the y position of the scroll is
      var y = $(this).scrollTop();
      
      // whether that's below the form
      if (y >= top) {
        // if so, ad the fixed class
        $('#ads').addClass('fixed');
      } else {
        // otherwise remove it
        $('#ads').removeClass('fixed');
      }
    });
  }  
});