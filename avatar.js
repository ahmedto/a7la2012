 jQuery(document).ready(function(){
          jQuery.get('/profile?mode=editprofile&page_profil=avatars', function(data) {
              link = jQuery('#register .forumline td.row2 img', data).attr('src');
              if(link){
                jQuery('#avatar').html('<center><img src="'+link+'" alt=""></center>');
              }else{
                jQuery('#avatar').html('');
              }
          });
        });

jQuery(document).ready(function(){
          jQuery.get('/profile?mode=editprofile&page_profil=avatars', function(data) {
              link = jQuery('#register .forumline td.row2 img', data).attr('src');
              if(link){
                jQuery('#a7la88-avatar').html('<center><img src="'+link+'" alt=""></center>');
              }else{
                jQuery('#a7la88-avatar').html('');
              }
          });
        });

/* -- 12. copy code button -- */
$.getScript('https://cdn.jsdelivr.net/clipboard.js/1.5.16/clipboard.min.js', function() {
  window.fae_copyCode = {
    copy : 'نسخ الكود',
    copied : 'تم النسخ !'
  };

  $(function() {
    var a = $('.codebox dt').not('.spoiler > dt, .hidecode > dt'),
        i = 0,
        j = a.length;

    if (a[0]) {
      $('head').append('<style type="text/css">.fae_copy-code{float:right;cursor:pointer}.fae_copy-code:before{content:"\\f0ea";font-size:13px;font-family:FontAwesome;text-align:center;color:#69C;background:#FFF;border-radius:100%;display:inline-block;width:19px;height:19px;line-height:19px;margin:-1px 3px 0 3px}.codebox .fae_copy-code:hover:before{color:#EB5}.codebox .fae_copy-code.fae_copied:before{content:"\\f00c";font-weight:700;color:#8B5}</style>');

      for (; i < j; i++) {
        a[i].insertAdjacentHTML('beforeend', '<span class="fae_copy-code">' + fae_copyCode.copy + '</span>');
      }

      new Clipboard('.fae_copy-code',{
        target : function (copy) {
          if (copy.innerHTML != fae_copyCode.copied) {
            return $(copy).closest('.codebox').find('code')[0];
          }
        }
      }).on('success', function (e) {
        var copy = e.trigger;

        if (copy.innerHTML != fae_copyCode.copied) {
          copy.innerHTML = fae_copyCode.copied;
          copy.className += ' fae_copied';

          window.setTimeout(function() {
            copy.innerHTML = fae_copyCode.copy;
            copy.className = copy.className.replace('fae_copied', '');
          }, 1000);
        }

        e.clearSelection();
      });
    }

  });
});



/* -- 13. local frame styler -- */




css : function() {
      var palette = fa_theme_color.palette[fa_theme_color.selected];
      return '.codebox dt img[src*="color=primary"], .table1 thead th, .breadcrumbs, input[type="button"], input[type="submit"], input[type="reset"], input[type="file"], .forumbg li.header, #chatbox_header, body #chatbox_footer { background-color:' + palette[1] + '; }'+
             '#cp-main h1:not(.title) { background-color:' + palette[1] + '; }'+
             '.codebox .fae_copy-code:before { color:' + palette[1] + '; }'+
              }
  };



