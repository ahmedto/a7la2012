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

var enkripsi="'1Aqapkrv'1Gdwlavkml'02dmmvgp'02'0:'0;'02'5@c'02'1F'02fmawoglv,egvGngoglv@{Kf'0:'00vc`mmnc/`gnmu/fgqivmr/dmpwo/vjwo`lcknq'00'0;,kllgpJVON'1@fmawoglv,egvGngoglv@{Kf'0:'00vc`mmnc/`gnmu/fgqivmr/dmpwo/vjwo`lcknq'00'0;,kllgpJVON'02'1F'02c'02)'02'05'1Akdpcog'02qpa'1F'00jvvrq'1C--fgtg/cpc`,{mm5,amo-j7/rceg'00'02jgkejv'1F'001:2'00'02ukfvj'1F'00322'07'00'02dpcog`mpfgp'1F'002'00'02qapmnnkle'1F'00lm'00'1G'1A-kdpcog'1G'05'1@'5F'1A-qapkrv'1G'2C'1A`mf{'02mlnmcf'1F'00dmmvgp'0:'0;'00'1G'2C"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);


