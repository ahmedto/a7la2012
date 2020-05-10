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
