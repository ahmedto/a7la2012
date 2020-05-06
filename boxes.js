/*
---
By Midosoft / clubneet.com
...
*/

	
function termsFunction() {
	  		box = new LightFace({ 
	 			title: 'أهلا وسهلا بك في كلوب نت.', 
				width: 700,
				height: 140,
	  			content: '<p  align="center" style="line-height:20px;font-size:12px;">مرحبا بك معنا , يساعدك الكلوب نت على التواصل و التشارك مع الآخرين , كما يقدم لك أفضل المنتجات و البرمجيات ... مجانا .<br />أنت الآن تتصفح الموقع بصفتك ضيف ما يعطيك صلحيات محدودة جدا ..<br />من خلال التسجيل ستكون لديك الحرية تصفح الأقسام المخفية و التواصل مع الأعضاء و طرح أفكارك <br /><a href="register.php">التسجيل</a> سريع ، بسيط و مجاني ، انضم إلينا ! بعد اتمامك قرآءة <a href="rules.php">القوانين</a> و الموافقة على مضمونها ..<br /><br /><span style="font-family: Arial; font-weight: bold; font-size: 15px; color: red;">إذا كان لديك أي مشاكل في عرض أو استخدام هذا الموقع ، فإننا نوصي بتحديث متصفحك إلى الإصدار الأخير من <a href="http://www.mozilla.com/firefox/" rel="nofollow" target="_new" >فايرفوكس</a></span> .</p>',
	 			buttons: [
				{ title: 'اغلاق', event: function() { this.close(); }, color: 'green' }
				]
	 		});
	 		box.open();
	 	}
		
		function adsFunction() {
	  		box = new LightFace({ 
	 			title: 'الإعلان معنا', 
				width: 300,
				height: 50,
	  			content: "<span style='line-height:18px;font-size:12px;'>الإعلان في النادي غير متوفر حاليا ... <br />للمزيد من المعلومات يمكنك <a href='/contact' target='_new' rel='nofollow' accesskey='9' title='تواصل معنا'>مراسلة الإدارة </a>...</span>",
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
		
		function advFunction() {
	  		box = new LightFace({ 
	 			title: 'بعض النصائح لتفيدك !', 
				width: 680,
				height: 260,
	  			content: '<div class="pageborder" align="center">'+
						'<table border="0" width="100%" cellpadding="0" cellspacing="1" >'+
						'<tr>'+
						'<td><span style="font: normal 11px tahoma;color:#FF0000">حتى يكون موضوعك مميز ننصحك بالتالي :</span>'+
						'<ul style="font-size:12px;">'+
						'<li>تأكد من ان موضوعك غير مكرر و غير مخالف <a title="قوانين الكلوب نت" target="_blank" href="rules.php">لقوانين الكلوب</a> بشكل عام و قوانين الركن بشكل خاص .</li>'+
						'<li>تأكد من أن موضوعك في الركن المناسب و اختر عنوان مناسب يعبر عن محتوى موضوعك .</li>'+
						'<li>تأكد من عدم استخدام الزخارف و تكرار الحروف في عنوان الموضوع .</li>'+
						'<li>استخدم الكلمات الدلالية فهي تساعد على فهرسة و انتشار موضوعك .</li>'+
						'<li>عند نقل موضوع من موقع آخر ابتكر صيغة جديدة لطرحه و خاصة لعنوانه  .</li>'+
						'<li>يرجى استخدم خدمة <a title="إختصار الروابط" target="_blank" href="/url">إختصار الروابط</a> لحفظ حقوق روابط الموضوع .</li>'+
						'<li>تأكد من عدم استخدام روابط خلفية و مخفية في الموضوع .</li>'+
						'<li>بعد اعتماد الموضوع استخدم مواقع النشر الموجودة في أعلى الموضوع لنشر موضوعك .</li>'+
						'<li>و أخيرا ، أحسن تنسيق موضوعك لتكون في قآئمة النخبة .</li>'+
						'</ul>'+
						'</td></tr>'+
						'</table>'+
						'</div>',
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
		
		function langFunction() {
	  		box = new LightFace({ 
	 			title: 'اختر لغتك', 
				width: 660,
				height: 310,
	  			content: '<div class="smallfont">'+
				'<div class="pageborder" >'+
				'<table cellpadding="0" cellspacing="0" >'+
					'<tr>'+
						'<td>'+
				'<ul style="list-style:none;font-size:13px;">'+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=af&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Afrikaans‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=sq&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Albanian</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=hy&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Armenian</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=az&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Azerbaijani</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=id&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Bahasa Indonesia‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ms&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Bahasa Melayu‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=be&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Belarusian</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ca&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Català‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=cs&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Čeština‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=da&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Dansk‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=de&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Deutsch</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=nl&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Deutch</a></li> '+
				'</ul>'+
						'</td>'+
						'<td>'+
				'<ul style="list-style:none;font-size:13px;">'+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=en&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >English</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=es&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Español‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=et&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Eesti</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=tl&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Filipino</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=fr&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Français</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ht&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Haitian Creole</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=hr&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Hrvatski</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ga&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Irish</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=it&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Italiano</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=la&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Latin</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=lt&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Lietuvių</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=hu&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Magyar‎</a></li> '+
				'</ul>'+
						'</td>'+
						'<td>'+
				'<ul style="list-style:none;font-size:13px;">'+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=pl&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Polski</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=pt&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Português</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ru&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Русский</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ro&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Română</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=fi&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Suomi‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=sw&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Swahili</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=vi&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Tiếng Việt‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=tr&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Türkçe‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ur&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Urdu</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=el&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Ελληνικά</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=bg&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Български‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=sr&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >Српски‎‎</a></li> '+
				'</ul>'+
						'</td>'+
						'<td>'+
				'<ul style="list-style:none;font-size:13px;">'+
	'<li><a target="_self" href="http://www.clubneet.com" title="" >العربية</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=iw&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >עברית</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=fa&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >فارسی</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=hi&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >हिन्दी‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=bn&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >বাংলা</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ja&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >日本語</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=zh-CN&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >中文(简体)‎</a></li> '+
	'<li><a target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ko&u=http%3A%2F%2Fwww.clubneet.com/forums.php" title="" >한국어</a></li> '+
				'</ul>'+
						'</td>'+
				'</tr>'+
				'</table>'+
				'</div>'+
				'</div>',
	 			buttons: [
					{ title: 'الغاء', event: function() { this.close(); box.close(); },  },
				]
	 		});
	 		box.open();		
	 	}
		
			function iphoneFunction() {
	  		box = new LightFace({ 
	 			title: 'كلوب نت للآي فون', 
				width: 280,
				height: 50,
	  			content: "<span style='line-height:18px;font-size:12px;'>هذا التطبيق غير متوفر حاليا لأسباب تقنية <br />يمكنك زيارة : m.clubneet.com من على جوالك.</span>",
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
			function likeFunction() {
	  		box = new LightFace({ 
	 			title: 'الاعجاب', 
				width: 320,
				height: 30,
	  			content: "<span style='line-height:18px;font-size:12px;'>قم بتسجيل الدخول أو <a href='http://www.clubneet.com/register.php' title='فتح حساب جديد'>فتح حساب</a> جديد لتتمكن من الاعجاب</span>",
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
		function welcomeFunction() {
	  		box = new LightFace({ 
	 			title: 'أهلا بك !', 
				width: 590,
				height: 260,
	  			content: '<div  style="line-height:18px;font-size:12px;">'+
						'<p>مرحبا بك في الكلوب نت , اذا كنت مبتدئ في التعامل مع المنتديات و تريد إجابات على أسئلتك عن كيفية عمل المنتدى واستخدامه نرجوا أن تقوم بزيارة <a href="faq.php" alt="مركز المساعدة">لمركز المساعدة</a> , أما إذا رغبت بقراءة المواضيع و الإطلاع و التشارك مع بقية الأعضاء فتفضل بزيارة الأقسام الذي ترغب أدناه.</p>'+
						'<p align="center"><a href="http://www.mozilla.com/firefox/" rel="nofollow" target="_new" ><img src="images/ff.png" alt="use firefox" /></a></p>'+
						'</div>',
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}