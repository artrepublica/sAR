/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(a){a.fn.musePamphlet=function(b){b=a.extend({},b);return this.each(function(){var c=a(this),d=function(b,c,d,e){return b.find(c).filter(function(){return a(this).closest(d).get(0)==e.get(0)})},e=d(c,".ContainerGroup",".PamphletWidget",c),f=d(e,".Container",".PamphletWidget",c),g=d(c,".ThumbGroup",".PamphletWidget",c),h=d(g,".Thumb",".ThumbGroup",g),i=d(c,".PamphletPrevButton",".PamphletWidget",c),j=d(c,".PamphletNextButton",".PamphletWidget",c),k=d(c,".PamphletCloseButton",".PamphletWidget",
c),l=d(c,".PamphletLightboxPart",".PamphletWidget",c),q,n=b.contentLayout_runtime==="lightbox",r=!1,o=!1,u=!1,m=0,p=!b.hideAllContentsFirst,v=b.hideAllContentsFirst,s=f.outerWidth(),w=f.outerHeight(),z=b.event==="mouseover_canRollout"?"mouseover":b.event,x=null,B=function(a){o=!0;var c=function(){o===!0&&A({continuation:d})},d=function(){x=setTimeout(c,b.displayInterval)};t(a,{continuation:d,firstShow:!0})},C=function(){if(b.transitionStyle==="horizontal"||b.transitionStyle==="vertical"){var c=b.transitionStyle===
"horizontal"?s:0,d=b.transitionStyle==="vertical"?w:0,g=a("<div></div>").css({width:1,height:1,overflow:"visible",position:"absolute",left:0,top:0}).appendTo(e).append(f),i=b.hideAllContentsFirst&&b.transitionStyle==="horizontal"?s:0,j=b.hideAllContentsFirst&&b.transitionStyle==="vertical"?w:0;e.css({width:s,height:w,overflow:"hidden"});f.each(function(b,e){a(e).css({left:i+b*c,top:j+b*d})});t=function(c,d){p||(p=!0);Muse.Utils.refreshIframesAndObjectsToPauseMedia(f);d=a.extend({transitionDuration:b.transitionDuration,
continuation:a.noop,isPrev:!1,isNext:!1},d);u&&g.stop(!0,!0);var e=f.eq(c),i=e.position(),j={left:i.left,top:i.top};if(!b.rewindOnPrevNext){var k=f.eq(m);if(k.length){if(d.isPrev&&m<c){var l=k.position();j.left=j.left!==l.left?l.left-k.outerWidth():j.left;j.top=j.top!==l.top?l.top-k.outerHeight():j.top}else if(d.isNext&&m>c)l=k.position(),j.left=j.left!==l.left?l.left+k.outerWidth():j.left,j.top=j.top!==l.top?l.top+k.outerHeight():j.top;(i.left!==j.left||i.top!==j.top)&&e.css({left:j.left,top:j.top})}}u=
!0;g.animate({left:-j.left,top:-j.top},{queue:!1,duration:d.transitionDuration,complete:function(){u=!1;if(i.left!==j.left||i.top!==j.top)e.css({left:i.left,top:i.top}),g.css({left:-i.left,top:-i.top});d.continuation()}});h.removeClass(function(a){return a==m?"PamphletThumbSelected":""});h.addClass(function(a){return a==c?"PamphletThumbSelected":""});m=c};y=function(){}}else e.css({width:0,height:0}),f.each(function(){a(this).data("originalOpacity",a(this).css("opacity"))}),p=!(b.hideAllContentsFirst===
!0||n),f.slice(p?1:0).hide(),t=function(c,d){p||(p=!0);Muse.Utils.refreshIframesAndObjectsToPauseMedia(f);d=a.extend({transitionDuration:b.transitionDuration,continuation:a.noop},d);f.eq(m).stop(!0).fadeOut(d.transitionDuration);var e=f.eq(c).data("originalOpacity"),g=f.eq(c).css("opacity"),g=g==="1"&&d.firstShow!=!0?"0":g;f.eq(c).stop(!0).show().css({opacity:g}).animate({opacity:e},{queue:!1,duration:d.transitionDuration,complete:function(){a(this).css({opacity:""});d.continuation()}});h.removeClass(function(a){return a==
m?"PamphletThumbSelected":""});h.addClass(function(a){return a==c?"PamphletThumbSelected":""});m=c},y=function(a){Muse.Utils.refreshIframesAndObjectsToPauseMedia(f);f.eq(a).stop(!0).fadeOut(b.transitionDuration);h.removeClass(function(b){return b==a?"PamphletThumbSelected":""})}};if(n){var D=function(b){l.each(function(c,d){var e=a(d),f=e.offset();e.css({left:f.left-b.left,top:f.top-b.top})});var c=null,d=function(b,e,f){if(a(b).hasClass(f))c=e;else{var g=b.cloneNode(!1);e&&e.appendChild(g);for(e=
0;e<b.childNodes.length;e++)d(b.childNodes[e],g,f);return g}},g=a(d(e.get(0),null,"Container")).css({left:0,top:0,width:"auto",height:"auto",padding:0,margin:0,zIndex:"auto"}),h=a("<div class='overlayWedge'></div>");a(c).append(h);g.css({visibility:"hidden"}).appendTo("body");var m=g.outerWidth(),n=g.outerHeight();g.detach().css({visibility:""});e.removeAttr("id");e.css({padding:0,left:0,top:0,width:s,height:w,borderWidth:0,background:"none",position:"absolute"});f.css({left:0,top:0,position:"absolute"});
var o=-s/2,p=-w/2;q=a("<div class='LightboxContent'></div>").css({position:"absolute"}).append(e).append(j.addClass("popup_element")).append(i.addClass("popup_element")).append(k.addClass("popup_element")).museOverlay({autoOpen:!1,offsetLeft:o,offsetTop:p,overlayExtraWidth:m,overlayExtraHeight:n,$overlaySlice:g,$overlayWedge:h,onClose:function(){clearTimeout(x)}});a.browser.msie&&a.browser.version<9&&(g=q.prev().children(".ContainerGroup")[0],Muse.Utils.needPIE(),PIE.detach(g),PIE.attach(g));r=!0};
f.parent(":visible").length==0?r=!1:D(f.offset())}var t=a.noop,y=a.noop,A=function(b){t(p?m===f.length-1?0:m+1:m,a.extend({isNext:!0},b))};(!n||n&&r)&&C();i.click(function(){o&&n&&(o=!1,clearTimeout(x));t(p?m===0?f.length-1:m-1:f.length-1,a.extend({isPrev:!0},void 0))});j.click(function(){o&&n&&(o=!1,clearTimeout(x));A()});k.click(function(){o&&n&&(o=!1,clearTimeout(x));n&&q.museOverlay("close")});h.bind(z,function(){o=!1;var d=a(this).attr("href");if(z==="click"&&typeof d==="string"&&d.length>0)window.location=
d;else if(n)r||(c.children().not(g).show(),D(f.offset()),C()),q.museOverlay("open"),b.autoPlay===!0?B(h.index(this)):t(h.index(this));else if(h.index(this)!==m||v)t(h.index(this)),v=!1});(b.deactivationEvent==="mouseout_trigger"||b.deactivationEvent==="mouseout_both")&&h.bind("mouseenter",function(){var c=a(this),d=function(a,b){b.outerWidth()===0&&(b=b.children(".popup_anchor").children(".popup_element").eq(0));var c=b.offset(),c={x:c.left,y:c.top,width:b.outerWidth(),height:b.outerHeight()};return a.pageX>=
c.x&&a.pageX<=c.x+c.width&&a.pageY>=c.y&&a.pageY<=c.y+c.height},e=function(g){var i=d(g,c);b.deactivationEvent==="mouseout_both"&&(i=i||d(g,f.eq(h.index(c))));i||(a(document).unbind("mousemove",e),v=!0,y(h.index(c)))};a(document).bind("mousemove",e)});n||(b.autoPlay===!0?B(0):b.hideAllContentsFirst==!1&&t(0,{firstShow:!0}));n&&!r&&c.children().not(g).hide()})}})(jQuery);
