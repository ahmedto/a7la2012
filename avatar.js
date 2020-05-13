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
      return '.color-primary, .title, h2.u, .h3, .inner h1.page-title, .mainmenu:after, .forumline tbody .catHead, form.search-form input.search-keywords, input.search-button, .pagination span a, a.button1, a.button2, button.button2, input.button1, input.button2, input.button, #profile-advanced-add a, img[src*="?poll"], .fa_pseudo_radio:after, #tabs, body div.sceditor-dropdown .button, .codebox dt, blockquote cite, .sceditor-container .sceditor-toolbar, body #fa_toolbar, body #fa_toolbar_hidden, body #fa_toolbar #fa_right #notif_list li.see_all, #fae_sticky_nav_panel a:after, img[src*="color=primary"], .table1 thead th, .breadcrumbs, input[type="button"], input[type="submit"], input[type="reset"], input[type="file"], .forumbg li.header, #chatbox_header, body #chatbox_footer { background-color:' + palette[1] + '; }'+
             '#cp-main h1:not(.title) { background-color:' + palette[1] + '; }'+
             '.pagination span a:hover, a.button1:hover, a.button2:hover, button.button2:hover, input.button1:hover, input.button2:hover, input.button:hover, #profile-advanced-add a:hover, input.search-button:hover, body div.sceditor-dropdown .button:hover, img[src*="color=primary"]:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover, input[type="file"]:hover { background-color:' + palette[2] + '; }'+
             '.pagination span a:active, .pagination span a:focus, .pagination span strong, a.button1:active, a.button2:active, button.button2:active, input.button1:active, input.button2:active, input.button:active, input[type="button"]:active, input[type="submit"]:active, input[type="reset"]:active, input[type="file"]:active, a.button1:focus, a.button2:focus, button.button2:focus, input.button1:focus, input.button2:focus, input.button:focus, input.search-button:focus, #tabs a:after, body div.sceditor-dropdown .button:active, body div.sceditor-dropdown .button:focus, body #fa_search #fa_textarea, body #fa_search #fa_magnifier, img[src*="color=primary"]:active, input[type="button"]:focus, input[type="submit"]:focus, input[type="reset"]:focus, input[type="file"]:focus { background-color:' + palette[3] + '; }'+
             '.fa_pseudo_checkbox:after, h2.post-content, h3.post-content, h4.post-content, .codebox .fae_copy-code:before { color:' + palette[1] + '; }'+
             'img[src*="?poll"], .sceditor-container .sceditor-toolbar, .sceditor-container .sceditor-group, body #fa_toolbar, body #fa_toolbar_hidden { border-color:' + palette[2] + '; }'+
             '.color-secondary, .forum-status[style*="locked=true"], img[src*="color=secondary"] { background-color:' + palette[4] + '; }'+
             '.forum-status[style*="state=new"] { background-color:' + palette[0] + '; }'+
             'form.search-form { background-color:' + palette[2] + '; }'+
             'form.search-form input.search-keywords, input.search-button { border-color:' + palette[0] + '!important; }'+
             'input[type="text"]:hover, input.post:hover, input.inputbox:hover, textarea:hover, select:hover, input[type="text"]:focus, input.post:focus, input.inputbox:focus, textarea:focus, select:focus, body div.sceditor-dropdown input:focus, body div.sceditor-dropdown textarea:focus, .fa_pseudo_checkbox:hover, .fa_pseudo_radio:hover, .sceditor-container, h2.post-content, h3.post-content, h4.post-content, .lastpost-avatar, #wio_new_avatar, .avatar-mini img, .avatar, #chatbox, #chatbox_members, #chatbox_members > h4.away, #chatbox_members > ul.away-users, body #chatbox .cb-avatar { border-color:' + palette[1] + ' !important; }'+
             'a, a:link, a:visited { color:' + palette[3] + '; }'+
             'a:hover, a:active { color:' + palette[2] + '; }'+
             '::selection { background-color:' + palette[1] + '; } ::-moz-selection { background-color:' + palette[1] + '; }'+
             '::-webkit-scrollbar-thumb, ::-webkit-scrollbar-button:single-button { background-color:' + palette[1] + '; }'+
             '::-webkit-scrollbar-thumb:hover, ::-webkit-scrollbar-button:single-button:hover { background-color:' + palette[2] + '; }'+
             '::-webkit-scrollbar-thumb:active, ::-webkit-scrollbar-button:single-button:active { background-color:' + palette[3] + '; }';
    }
  };

// gets the new avatar for the latest user
function wio_getNewAvatar() {
  var newMem = document.getElementById('wio_newest_user'),
      storage = window.localStorage,
      id;

  if (newMem) {
    id = newMem.getElementsByTagName('A')[0].href.replace(/.*?\/u(\d+).*/, '$1');

    if (storage && storage['fa_wio_newava' + id] && storage['fa_wio_newava' + id + '_exp'] > +new Date - 1*60*60*1000) {
      document.getElementById('wio_new_avatar').firstChild.src = storage['fa_wio_newava' + id];
    } else {
      $.get('/ajax/index.php?f=m&user_id=' + id, function(d) {
        var avatar = $('.tooltip-content > img', d)[0];

        if (avatar) {
          document.getElementById('wio_new_avatar').firstChild.src = avatar.src;

          if (storage) {
            storage['fa_wio_newava' + id] = avatar.src;
            storage['fa_wio_newava' + id + '_exp'] = +new Date;
          }
        }
      });
    }

  }
};
