//Fitvid.js
(function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}})(jQuery);

/*global jQuery */
/*!	
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
	
  $.fn.fitText = function( kompressor, options ) {
	   
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
	
    return this.each(function(){

      // Store the object
      var $this = $(this); 
        
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();
				
      // Call on resize. Opera debounces their resize by default. 
      $(window).on('resize', resizer);
      	
    });

  };

})( jQuery );

/*! Stellar.js v0.6.2 | Copyright 2013, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
(function(e,t,n,r){function d(t,n){this.element=t,this.options=e.extend({},s,n),this._defaults=s,this._name=i,this.init()}var i="stellar",s={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(e){e.hide()},showElement:function(e){e.show()}},o={scroll:{getLeft:function(e){return e.scrollLeft()},setLeft:function(e,t){e.scrollLeft(t)},getTop:function(e){return e.scrollTop()},setTop:function(e,t){e.scrollTop(t)}},position:{getLeft:function(e){return parseInt(e.css("left"),10)*-1},getTop:function(e){return parseInt(e.css("top"),10)*-1}},margin:{getLeft:function(e){return parseInt(e.css("margin-left"),10)*-1},getTop:function(e){return parseInt(e.css("margin-top"),10)*-1}},transform:{getLeft:function(e){var t=getComputedStyle(e[0])[f];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[4],10)*-1:0},getTop:function(e){var t=getComputedStyle(e[0])[f];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[5],10)*-1:0}}},u={position:{setLeft:function(e,t){e.css("left",t)},setTop:function(e,t){e.css("top",t)}},transform:{setPosition:function(e,t,n,r,i){e[0].style[f]="translate3d("+(t-n)+"px, "+(r-i)+"px, 0)"}}},a=function(){var t=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,n=e("script")[0].style,r="",i;for(i in n)if(t.test(i)){r=i.match(t)[0];break}return"WebkitOpacity"in n&&(r="Webkit"),"KhtmlOpacity"in n&&(r="Khtml"),function(e){return r+(r.length>0?e.charAt(0).toUpperCase()+e.slice(1):e)}}(),f=a("transform"),l=e("<div />",{style:"background:#fff"}).css("background-position-x")!==r,c=l?function(e,t,n){e.css({"background-position-x":t,"background-position-y":n})}:function(e,t,n){e.css("background-position",t+" "+n)},h=l?function(e){return[e.css("background-position-x"),e.css("background-position-y")]}:function(e){return e.css("background-position").split(" ")},p=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};d.prototype={init:function(){this.options.name=i+"_"+Math.floor(Math.random()*1e9),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),this.options.scrollProperty==="scroll"?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===n.body&&(this.element=t),this.$scrollElement=e(this.element),this.$element=this.element===t?e("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==r?e(this.options.viewportElement):this.$scrollElement[0]===t||this.options.scrollProperty==="scroll"?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var e=this,t=o[e.options.scrollProperty];this._getScrollLeft=function(){return t.getLeft(e.$scrollElement)},this._getScrollTop=function(){return t.getTop(e.$scrollElement)}},_defineSetters:function(){var t=this,n=o[t.options.scrollProperty],r=u[t.options.positionProperty],i=n.setLeft,s=n.setTop;this._setScrollLeft=typeof i=="function"?function(e){i(t.$scrollElement,e)}:e.noop,this._setScrollTop=typeof s=="function"?function(e){s(t.$scrollElement,e)}:e.noop,this._setPosition=r.setPosition||function(e,n,i,s,o){t.options.horizontalScrolling&&r.setLeft(e,n,i),t.options.verticalScrolling&&r.setTop(e,s,o)}},_handleWindowLoadAndResize:function(){var n=this,r=e(t);n.options.responsive&&r.bind("load."+this.name,function(){n.refresh()}),r.bind("resize."+this.name,function(){n._detectViewport(),n.options.responsive&&n.refresh()})},refresh:function(n){var r=this,i=r._getScrollLeft(),s=r._getScrollTop();(!n||!n.firstLoad)&&this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)&&e(t).load(function(){var e=r._getScrollLeft(),t=r._getScrollTop();r._setScrollLeft(e+1),r._setScrollTop(t+1),r._setScrollLeft(e),r._setScrollTop(t)}),this._setScrollLeft(i),this._setScrollTop(s)},_detectViewport:function(){var e=this.$viewportElement.offset(),t=e!==null&&e!==r;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=t?e.top:0,this.viewportOffsetLeft=t?e.left:0},_findParticles:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop();if(this.particles!==r)for(var s=this.particles.length-1;s>=0;s--)this.particles[s].$element.data("stellar-elementIsActive",r);this.particles=[];if(!this.options.parallaxElements)return;this.$element.find("[data-stellar-ratio]").each(function(n){var i=e(this),s,o,u,a,f,l,c,h,p,d=0,v=0,m=0,g=0;if(!i.data("stellar-elementIsActive"))i.data("stellar-elementIsActive",this);else if(i.data("stellar-elementIsActive")!==this)return;t.options.showElement(i),i.data("stellar-startingLeft")?(i.css("left",i.data("stellar-startingLeft")),i.css("top",i.data("stellar-startingTop"))):(i.data("stellar-startingLeft",i.css("left")),i.data("stellar-startingTop",i.css("top"))),u=i.position().left,a=i.position().top,f=i.css("margin-left")==="auto"?0:parseInt(i.css("margin-left"),10),l=i.css("margin-top")==="auto"?0:parseInt(i.css("margin-top"),10),h=i.offset().left-f,p=i.offset().top-l,i.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===!0)return d=m,v=g,c=t,!1;m+=t.position().left,g+=t.position().top}),s=i.data("stellar-horizontal-offset")!==r?i.data("stellar-horizontal-offset"):c!==r&&c.data("stellar-horizontal-offset")!==r?c.data("stellar-horizontal-offset"):t.horizontalOffset,o=i.data("stellar-vertical-offset")!==r?i.data("stellar-vertical-offset"):c!==r&&c.data("stellar-vertical-offset")!==r?c.data("stellar-vertical-offset"):t.verticalOffset,t.particles.push({$element:i,$offsetParent:c,isFixed:i.css("position")==="fixed",horizontalOffset:s,verticalOffset:o,startingPositionLeft:u,startingPositionTop:a,startingOffsetLeft:h,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:v,stellarRatio:i.data("stellar-ratio")!==r?i.data("stellar-ratio"):1,width:i.outerWidth(!0),height:i.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop(),s;this.backgrounds=[];if(!this.options.parallaxBackgrounds)return;s=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(s=s.add(this.$element)),s.each(function(){var s=e(this),o=h(s),u,a,f,l,p,d,v,m,g,y=0,b=0,w=0,E=0;if(!s.data("stellar-backgroundIsActive"))s.data("stellar-backgroundIsActive",this);else if(s.data("stellar-backgroundIsActive")!==this)return;s.data("stellar-backgroundStartingLeft")?c(s,s.data("stellar-backgroundStartingLeft"),s.data("stellar-backgroundStartingTop")):(s.data("stellar-backgroundStartingLeft",o[0]),s.data("stellar-backgroundStartingTop",o[1])),p=s.css("margin-left")==="auto"?0:parseInt(s.css("margin-left"),10),d=s.css("margin-top")==="auto"?0:parseInt(s.css("margin-top"),10),v=s.offset().left-p-n,m=s.offset().top-d-i,s.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===!0)return y=w,b=E,g=t,!1;w+=t.position().left,E+=t.position().top}),u=s.data("stellar-horizontal-offset")!==r?s.data("stellar-horizontal-offset"):g!==r&&g.data("stellar-horizontal-offset")!==r?g.data("stellar-horizontal-offset"):t.horizontalOffset,a=s.data("stellar-vertical-offset")!==r?s.data("stellar-vertical-offset"):g!==r&&g.data("stellar-vertical-offset")!==r?g.data("stellar-vertical-offset"):t.verticalOffset,t.backgrounds.push({$element:s,$offsetParent:g,isFixed:s.css("background-attachment")==="fixed",horizontalOffset:u,verticalOffset:a,startingValueLeft:o[0],startingValueTop:o[1],startingBackgroundPositionLeft:isNaN(parseInt(o[0],10))?0:parseInt(o[0],10),startingBackgroundPositionTop:isNaN(parseInt(o[1],10))?0:parseInt(o[1],10),startingPositionLeft:s.position().left,startingPositionTop:s.position().top,startingOffsetLeft:v,startingOffsetTop:m,parentOffsetLeft:y,parentOffsetTop:b,stellarRatio:s.data("stellar-background-ratio")===r?1:s.data("stellar-background-ratio")})})},_reset:function(){var e,t,n,r,i;for(i=this.particles.length-1;i>=0;i--)e=this.particles[i],t=e.$element.data("stellar-startingLeft"),n=e.$element.data("stellar-startingTop"),this._setPosition(e.$element,t,t,n,n),this.options.showElement(e.$element),e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(i=this.backgrounds.length-1;i>=0;i--)r=this.backgrounds[i],r.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),c(r.$element,r.startingValueLeft,r.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=e.noop,e(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var n=this,r=e(t);r.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),typeof this.options.horizontalOffset=="function"?(this.horizontalOffset=this.options.horizontalOffset(),r.bind("resize.horizontal-"+this.name,function(){n.horizontalOffset=n.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,typeof this.options.verticalOffset=="function"?(this.verticalOffset=this.options.verticalOffset(),r.bind("resize.vertical-"+this.name,function(){n.verticalOffset=n.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var e=this._getScrollLeft(),t=this._getScrollTop(),n,r,i,s,o,u,a,f=!0,l=!0,h,p,d,v,m;if(this.currentScrollLeft===e&&this.currentScrollTop===t&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight)return;this.currentScrollLeft=e,this.currentScrollTop=t,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight;for(m=this.particles.length-1;m>=0;m--)i=this.particles[m],s=i.isFixed?1:0,this.options.horizontalScrolling?(h=(e+i.horizontalOffset+this.viewportOffsetLeft+i.startingPositionLeft-i.startingOffsetLeft+i.parentOffsetLeft)*-(i.stellarRatio+s-1)+i.startingPositionLeft,d=h-i.startingPositionLeft+i.startingOffsetLeft):(h=i.startingPositionLeft,d=i.startingOffsetLeft),this.options.verticalScrolling?(p=(t+i.verticalOffset+this.viewportOffsetTop+i.startingPositionTop-i.startingOffsetTop+i.parentOffsetTop)*-(i.stellarRatio+s-1)+i.startingPositionTop,v=p-i.startingPositionTop+i.startingOffsetTop):(p=i.startingPositionTop,v=i.startingOffsetTop),this.options.hideDistantElements&&(l=!this.options.horizontalScrolling||d+i.width>(i.isFixed?0:e)&&d<(i.isFixed?0:e)+this.viewportWidth+this.viewportOffsetLeft,f=!this.options.verticalScrolling||v+i.height>(i.isFixed?0:t)&&v<(i.isFixed?0:t)+this.viewportHeight+this.viewportOffsetTop),l&&f?(i.isHidden&&(this.options.showElement(i.$element),i.isHidden=!1),this._setPosition(i.$element,h,i.startingPositionLeft,p,i.startingPositionTop)):i.isHidden||(this.options.hideElement(i.$element),i.isHidden=!0);for(m=this.backgrounds.length-1;m>=0;m--)o=this.backgrounds[m],s=o.isFixed?0:1,u=this.options.horizontalScrolling?(e+o.horizontalOffset-this.viewportOffsetLeft-o.startingOffsetLeft+o.parentOffsetLeft-o.startingBackgroundPositionLeft)*(s-o.stellarRatio)+"px":o.startingValueLeft,a=this.options.verticalScrolling?(t+o.verticalOffset-this.viewportOffsetTop-o.startingOffsetTop+o.parentOffsetTop-o.startingBackgroundPositionTop)*(s-o.stellarRatio)+"px":o.startingValueTop,c(o.$element,u,a)},_handleScrollEvent:function(){var e=this,t=!1,n=function(){e._repositionElements(),t=!1},r=function(){t||(p(n),t=!0)};this.$scrollElement.bind("scroll."+this.name,r),r()},_startAnimationLoop:function(){var e=this;this._animationLoop=function(){p(e._animationLoop),e._repositionElements()},this._animationLoop()}},e.fn[i]=function(t){var n=arguments;if(t===r||typeof t=="object")return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new d(this,t))});if(typeof t=="string"&&t[0]!=="_"&&t!=="init")return this.each(function(){var r=e.data(this,"plugin_"+i);r instanceof d&&typeof r[t]=="function"&&r[t].apply(r,Array.prototype.slice.call(n,1)),t==="destroy"&&e.data(this,"plugin_"+i,null)})},e[i]=function(n){var r=e(t);return r.stellar.apply(r,Array.prototype.slice.call(arguments,0))},e[i].scrollProperty=o,e[i].positionProperty=u,t.Stellar=d})(jQuery,this,document);

// iCheck v0.7, http://git.io/uhUPMA
(function(b){function m(a,b,d,c){var e=a[0],l=a.parent(),j=/disable|enable/.test(d)?"disabled":"checked",f="update"==d?{checked:e.checked,disabled:e.disabled}:e[j];if(/^check|disable/.test(d)&&!f)n(a,!0,l,j);else if(/uncheck|enable/.test(d)&&f)p(a,!0,l,j);else if("update"==d)for(j in f)f[j]?n(a,!1,l,j,c):p(a,!1,l,j,c);else b||(!0==d&&!e.disabled&&a.trigger("is.Clicked"),f?n(a,!0,l,j):p(a,!0,l,j))}function n(a,k,d,c,e){k&&(a[0][c]=!0);!0!==d.data(c)&&("checked"==c&&("radio"==a[0].type&&a[0].name)&&
b('input[name="'+a[0].name+'"]').each(function(){this!==a[0]&&b(this).data("icheck")&&p(b(this),!0,b(this).parent(),c)}),(k||e)&&a.trigger("is.Changed"),k&&a.trigger("is."+c.replace("di","Di").replace("ch","Ch")),d.data(c,!0).addClass(r(a,c)))}function p(a,b,d,c,e){var l="disabled"==c?"Enabled":"Unchecked";b&&(a[0][c]=!1);!1!==d.data(c)&&((b||e)&&a.trigger("is.Changed"),b&&a.trigger("is."+l),d.data(c,!1).removeClass(r(a,c)))}function u(a,k){if(a.data("icheck")){var d=a[0].id,c=b("label[for="+d+"]");
a.parent().html(a.attr("style",a.data("icheck").style||"").trigger(k||""));a.removeData("icheck").unbind(".df").unwrap();d&&c.length&&c.unbind(".df")}}function r(a,b){if(a.data("icheck"))return a.data("icheck").options[b+"Class"]}b.fn.iCheck=function(a){if(/^(check|uncheck|disable|enable|update|destroy)$/.test(a))return this.each(function(){/destroy/.test(a)?u(b(this),"is.Destroyed"):m(b(this),!0,a)});if("object"==typeof a||!a){var k=navigator.userAgent,d=b.extend({},{checkboxClass:"icheckbox",radioClass:"iradio",
checkedClass:"checked",disabledClass:"disabled",hoverClass:"hover",focusClass:"focus",activeClass:"active",labelHover:!0,labelHoverClass:"hover"},a),c=/^(checkbox|radio)$/.test(d.handle)?":"+d.handle:":checkbox, :radio",e=(""+d.increaseArea).replace("%","")|0;-50>e&&(e=-50);return this.each(function(){(b(this).is(c)?b(this):b(this).find(c)).each(function(){u(b(this));var a=this,c=a.id,f={position:"absolute",top:-e+"%",left:-e+"%",display:"block",width:100+2*e+"%",height:100+2*e+"%",margin:0,padding:0,
background:"#fff",border:0,opacity:0},r=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(k)?{position:"absolute",visibility:"hidden"}:e|0?f:{position:"absolute",opacity:0},w="checkbox"==a.type?d.checkboxClass:d.radioClass,h=b(this).data("icheck",{style:b(this).attr("style"),options:d}).css(r),q=b("label[for="+c+"]"),g=h.wrap('<div class="'+w+'"/>').trigger("is.Created").parent().append(d.insert),f=b("<ins/>").css(f).appendTo(g).click(function(){h.click();m(h,!1,!0)}),s=d.hoverClass,
t=d.labelHoverClass,v;!0==d.cursor&&f.css("cursor","pointer");!0==d.inheritClass&&g.addClass(a.className);!0==d.inheritID&&c&&g.attr("id","icheck-"+c);"static"==g.css("position")&&g.css("position","relative");m(h,!0,"update");c&&q.length&&q.bind("click.df mouseenter.df mouseleave.df touchbegin.df touchend.df",function(c){var e=c.type,f=b(this);"click"==e?(c.preventDefault(),h.click(),m(h,!1,!0)):!0==d.labelHover&&!a.disabled&&(/mouseenter|touchbegin/.test(e)?(g.addClass(s),f.addClass(t)):(g.removeClass(s),
f.removeClass(t)))});h.bind("focus.df blur.df keyup.df keydown.df keypress.df",function(c){var b=c.type,e=c.keyCode||c.charCode||c.which;c=/MSIE [5-8]/.test(k)?"keyup"==b&&"keypress"!==v:"keyup"==b;e="keypress"==b&&32==e;/focus|blur/.test(b)?"focus"==b?g.addClass(d.focusClass):g.removeClass(d.focusClass):"radio"==a.type?(c?m(h,!0,"update",!0):e&&!a.checked&&n(h,!1,g,"checked",!0),v=b):"checkbox"==a.type&&e&&(a.checked?p(h,!1,g,"checked",!0):n(h,!1,g,"checked",!0))});f.bind("mousedown mouseup mouseout mouseenter mouseleave touchbegin touchend",
function(b){b=b.type;var e=/mousedown|mouseup|mouseout/.test(b)?d.activeClass:s;a.disabled||(/mousedown|mouseenter|touchbegin/.test(b)?g.addClass(e):g.removeClass(e),c&&(q.length&&!0==d.labelHover&&e==s)&&(/mouseleave|touchend/.test(b)?q.removeClass(t):q.addClass(t)))})})})}return this}})(jQuery);

(function( $ ){

	var createdElements = [];

	var defaults = {
		options: {
			prependExistingHelpBlock: false,
			sniffHtml: true, // sniff for 'required', 'maxlength', etc
			preventSubmit: true, // stop the form submit event from firing if validation fails
			submitError: false, // function called if there is an error when trying to submit
			submitSuccess: false, // function called just before a successful submit event is sent to the server
            semanticallyStrict: false, // set to true to tidy up generated HTML output
            bindEvents: [],
			autoAdd: {
				helpBlocks: true
			},
      filter: function () {
        // return $(this).is(":visible"); // only validate elements you can see
        return true; // validate everything
      }
		},
    methods: {
      init : function( options ) {

        var settings = $.extend(true, {}, defaults);

        settings.options = $.extend(true, settings.options, options);

        var $siblingElements = this;

        var uniqueForms = $.unique(
          $siblingElements.map( function () {
            return $(this).parents("form")[0];
          }).toArray()
        );

        $(uniqueForms).bind("submit", function (e) {
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");

          $inputs.each(function (i, el) {
            var $this = $(el),
              $controlGroup = $this.parents(".control-group").first();
            if (
              $controlGroup.hasClass("warning")
            ) {
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
            }
          });

          if (warningsFound) {
            if (settings.options.preventSubmit) {
              e.preventDefault();
              e.stopImmediatePropagation();
            }
            $form.addClass("error");
            if ($.isFunction(settings.options.submitError)) {
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
            }
          } else {
            $form.removeClass("error");
            if ($.isFunction(settings.options.submitSuccess)) {
              settings.options.submitSuccess($form, e);
            }
          }
        });

        return this.each(function(){

          // Get references to everything we're interested in
          var $this = $(this),
            $controlGroup = $this.parents(".control-group").first(),
            $helpBlock = $controlGroup.find(".help-block").first(),
            $form = $this.parents("form").first(),
            validatorNames = [];

          // create message container if not exists
          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
              $helpBlock = $('<div class="help-block" />');
              $controlGroup.find('.controls').append($helpBlock);
							createdElements.push($helpBlock[0]);
          }

          // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================

          // *snort sniff snuffle*

          if (settings.options.sniffHtml) {
            var message;
            // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------
            if ($this.data("validationPatternPattern")) {
              $this.attr("pattern", $this.data("validationPatternPattern"));
            }
            if ($this.attr("pattern") !== undefined) {
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
              if ($this.data("validationPatternMessage")) {
                message = $this.data("validationPatternMessage");
              }
              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
            }
            // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------
            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
              var max = ($this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax"));
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
              if ($this.data("validationMaxMessage")) {
                message = $this.data("validationMaxMessage");
              }
              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
            }
            // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------
            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
              var min = ($this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin"));
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
              if ($this.data("validationMinMessage")) {
                message = $this.data("validationMinMessage");
              }
              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
            }
            // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------
            if ($this.attr("maxlength") !== undefined) {
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
              if ($this.data("validationMaxlengthMessage")) {
                message = $this.data("validationMaxlengthMessage");
              }
              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
            }
            // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------
            if ($this.attr("minlength") !== undefined) {
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
              if ($this.data("validationMinlengthMessage")) {
                message = $this.data("validationMinlengthMessage");
              }
              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
            }
            // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------
            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
              message = settings.builtInValidators.required.message;
              if ($this.data("validationRequiredMessage")) {
                message = $this.data("validationRequiredMessage");
              }
              $this.data("validationRequiredMessage", message);
            }
            // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
              message = settings.validatorTypes.number.message; // TODO: fix this
              if ($this.data("validationNumberMessage")) {
                message = $this.data("validationNumberMessage");
              }
              $this.data("validationNumberMessage", message);
              
              var step = settings.validatorTypes.number.step; // TODO: and this
              if ($this.data("validationNumberStep")) {
                  step = $this.data("validationNumberStep");
              }
              $this.data("validationNumberStep", step);
              
              var decimal = settings.validatorTypes.number.decimal;
              if ($this.data("validationNumberDecimal")) {
                  decimal = $this.data("validationNumberDecimal");
              }
              $this.data("validationNumberDecimal", decimal);
            }
            // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
              message = "Not a valid email address<!-- data-validation-email-message to override -->";
              if ($this.data("validationEmailMessage")) {
                message = $this.data("validationEmailMessage");
              }
              $this.data("validationEmailMessage", message);
            }
            // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------
            if ($this.attr("minchecked") !== undefined) {
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
              if ($this.data("validationMincheckedMessage")) {
                message = $this.data("validationMincheckedMessage");
              }
              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
            }
            // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------
            if ($this.attr("maxchecked") !== undefined) {
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
              if ($this.data("validationMaxcheckedMessage")) {
                message = $this.data("validationMaxcheckedMessage");
              }
              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
            }
          }

          // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================

          // Get named validators
          if ($this.data("validation") !== undefined) {
            validatorNames = $this.data("validation").split(",");
          }

          // Get extra ones defined on the element's data attributes
          $.each($this.data(), function (i, el) {
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");
            if (parts[0] === "validation" && parts[1]) {
              validatorNames.push(parts[1]);
            }
          });

          // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];
          
          var uppercaseEachValidatorName = function (i, el) {
            validatorNames[i] = formatValidatorName(el);
          };
      
          var inspectValidators = function(i, el) {
            if ($this.data("validation" + el + "Shortcut") !== undefined) {
              // Are these custom validators?
              // Pull them out!
              $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) {
                newValidatorNamesToInspect.push(el2);
              });
            } else if (settings.builtInValidators[el.toLowerCase()]) {
              // Is this a recognised built-in?
              // Pull it out!
              var validator = settings.builtInValidators[el.toLowerCase()];
              if (validator.type.toLowerCase() === "shortcut") {
                $.each(validator.shortcut.split(","), function (i, el) {
                  el = formatValidatorName(el);
                  newValidatorNamesToInspect.push(el);
                  validatorNames.push(el);
                });
              }
            }
          };

          do // repeatedly expand 'shortcut' validators into their real validators
          {
            // Uppercase only the first letter of each name
            $.each(validatorNames, uppercaseEachValidatorName);

            // Remove duplicate validator names
            validatorNames = $.unique(validatorNames);

            // Pull out the new validator names from each shortcut
            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, inspectValidators);

            validatorNamesToInspect = newValidatorNamesToInspect;

          } while (validatorNamesToInspect.length > 0);

          // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================

          var validators = {};

          $.each(validatorNames, function (i, el) {
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = !!message;
            var foundValidator = false;
            if (!message) {
              message = "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->";
            }

            $.each(
              settings.validatorTypes,
              function (validatorType, validatorTemplate) {
                if (validators[validatorType] === undefined) {
                  validators[validatorType] = [];
                }
                if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                  var initted = validatorTemplate.init($this, el);
                  if (hasOverrideMessage) {
                    initted.message = message;
                  }
                  
                  validators[validatorType].push(
                    $.extend(
                      true,
                      {
                        name: formatValidatorName(validatorTemplate.name),
                        message: message
                      },
                      initted
                    )
                  );
                  foundValidator = true;
                }
              }
            );

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {

              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
              if (hasOverrideMessage) {
                validator.message = message;
              }
              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") {
                foundValidator = true;
              } else {
                $.each(
                  settings.validatorTypes,
                  function (validatorTemplateType, validatorTemplate) {
                    if (validators[validatorTemplateType] === undefined) {
                      validators[validatorTemplateType] = [];
                    }
                    if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                      $this.data(
                        "validation" + el + formatValidatorName(validatorTemplate.name),
                        validator[validatorTemplate.name.toLowerCase()]
                      );
                      validators[validatorType].push(
                        $.extend(
                          validator,
                          validatorTemplate.init($this, el)
                        )
                      );
                      foundValidator = true;
                    }
                  }
                );
              }
            }

            if (! foundValidator) {
              $.error("Cannot find validation info for '" + el + "'");
            }
          });

          // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data(
            "original-contents",
            (
              $helpBlock.data("original-contents") ?
                $helpBlock.data("original-contents") : 
                $helpBlock.html()
            )
          );

          $helpBlock.data(
            "original-role",
            (
              $helpBlock.data("original-role") ?
                $helpBlock.data("original-role") :
                $helpBlock.attr("role")
            )
          );

          $controlGroup.data(
            "original-classes",
            (
              $controlGroup.data("original-clases") ?
                $controlGroup.data("original-classes") :
                $controlGroup.attr("class")
            )
          );

          $this.data(
            "original-aria-invalid",
            (
              $this.data("original-aria-invalid") ?
                $this.data("original-aria-invalid") :
                $this.attr("aria-invalid")
            )
          );

          // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind(
            "validation.validation",
            function (event, params) {

              var value = getValue($this);

              // Get a list of the errors to apply
              var errorsFound = [];

              $.each(validators, function (validatorType, validatorTypeArray) {
                if (
                    value || // has a truthy value
                    value.length || // not an empty string
                    ( // am including empty values
                      (
                        params && 
                        params.includeEmpty 
                      ) ||
                      !!settings.validatorTypes[validatorType].includeEmpty
                    ) ||
                    ( // validator is blocking submit
                      !!settings.validatorTypes[validatorType].blockSubmit &&
                      params &&
                      !!params.submitting
                    )
                  ) 
                {
                  $.each(
                    validatorTypeArray,
                    function (i, validator) {
                      if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                        errorsFound.push(validator.message);
                      }
                    }
                  );
                }
              });

              return errorsFound;
            }
          );

          $this.bind(
            "getValidators.validation",
            function () {
              return validators;
            }
          );

          // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================
          $this.bind(
            "submit.validation",
            function () {
              return $this.triggerHandler("change.validation", {submitting: true});
            }
          );
          $this.bind(
            (
                settings.options.bindEvents.length > 0 ?
                settings.options.bindEvents :
                [
                    "keyup",
                    "focus",
                    "blur",
                    "click",
                    "keydown",
                    "keypress",
                    "change"
                ]
            ).concat(["revalidate"]).join(".validation ") + ".validation",
            function (e, params) {

              var value = getValue($this);

              var errorsFound = [];
              
              if (params && !!params.submitting) {
                $controlGroup.data("jqbvIsSubmitting", true);
              } else if (e.type !== "revalidate") {
                $controlGroup.data("jqbvIsSubmitting", false);
              }
              
              var formIsSubmitting = !!$controlGroup.data("jqbvIsSubmitting");

              $controlGroup.find("input,textarea,select").each(function (i, el) {
                var oldCount = errorsFound.length;
                $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
                  errorsFound.push(message);
                });
                if (errorsFound.length > oldCount) {
                  $(el).attr("aria-invalid", "true");
                } else {
                  var original = $this.data("original-aria-invalid");
                  $(el).attr("aria-invalid", (original !== undefined ? original : false));
                }
              });

              $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");

              errorsFound = $.unique(errorsFound.sort());

              // Were there any errors?
              if (errorsFound.length) {
                // Better flag it up as a warning.
                $controlGroup.removeClass("success error warning").addClass(formIsSubmitting ? "error" : "warning");

                // How many errors did we find?
                if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                  // Only one? Being strict? Just output it.
                  $helpBlock.html(errorsFound[0] + 
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                } else {
                  // Multiple? Being sloppy? Glue them together into an UL.
                  $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" +
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                }
              } else {
                $controlGroup.removeClass("warning error success");
                if (value.length > 0) {
                  $controlGroup.addClass("success");
                }
                $helpBlock.html($helpBlock.data("original-contents"));
              }

              if (e.type === "blur") {
                $controlGroup.removeClass("success");
              }
            }
          );
          $this.bind("validationLostFocus.validation", function () {
            $controlGroup.removeClass("success");
          });
        });
      },
      destroy : function( ) {

        return this.each(
          function() {

            var
              $this = $(this),
              $controlGroup = $this.parents(".control-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first();

            // remove our events
            $this.unbind('.validation'); // events are namespaced.
            // reset help text
            $helpBlock.html($helpBlock.data("original-contents"));
            // reset classes
            $controlGroup.attr("class", $controlGroup.data("original-classes"));
            // reset aria
            $this.attr("aria-invalid", $this.data("original-aria-invalid"));
            // reset role
            $helpBlock.attr("role", $this.data("original-role"));
						// remove all elements we created
						if (createdElements.indexOf($helpBlock[0]) > -1) {
							$helpBlock.remove();
						}

          }
        );

      },
      collectErrors : function(includeEmpty) {

        var errorMessages = {};
        this.each(function (i, el) {
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", {includeEmpty: true});
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
        });

        $.each(errorMessages, function (i, el) {
          if (el.length === 0) {
            delete errorMessages[i];
          }
        });

        return errorMessages;

      },
      hasErrors: function() {

        var errorMessages = [];

        this.each(function (i, el) {
          errorMessages = errorMessages.concat(
            $(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {submitting: true}) : []
          );
        });

        return (errorMessages.length > 0);
      },
      override : function (newDefaults) {
        defaults = $.extend(true, defaults, newDefaults);
      }
    },
		validatorTypes: {
      callback: {
                name: "callback",
                init: function($this, name) {
                    var result = {
                        validatorName: name,
                        callback: $this.data("validation" + name + "Callback"),
                        lastValue: $this.val(),
                        lastValid: true,
                        lastFinished: true
                    };

                    var message = "Not valid";
                    if ($this.data("validation" + name + "Message")) {
                        message = $this.data("validation" + name + "Message");
                    }
                    result.message = message;

                    return result;
                },
                validate: function($this, value, validator) {
                    if (validator.lastValue === value && validator.lastFinished) {
                        return !validator.lastValid;
                    }

                    if (validator.lastFinished === true)
                    {
                        validator.lastValue = value;
                        validator.lastValid = true;
                        validator.lastFinished = false;

                        var rrjqbvValidator = validator;
                        var rrjqbvThis = $this;
                        executeFunctionByName(
                            validator.callback,
                            window,
                            $this,
                            value,
                            function(data) {
                                if (rrjqbvValidator.lastValue === data.value) {
                                    rrjqbvValidator.lastValid = data.valid;
                                    if (data.message) {
                                        rrjqbvValidator.message = data.message;
                                    }
                                    rrjqbvValidator.lastFinished = true;
                                    rrjqbvThis.data(
                                        "validation" + rrjqbvValidator.validatorName + "Message", 
                                        rrjqbvValidator.message
                                    );
                                    
                                    // Timeout is set to avoid problems with the events being considered 'already fired'
                                    setTimeout(function() {
                                        if (!$this.is(":focus") && $this.parents("form").first().data("jqbvIsSubmitting")) {
                                            rrjqbvThis.trigger("blur.validation");
                                        } else {
                                            rrjqbvThis.trigger("revalidate.validation");
                                        }
                                    }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                                }
                            }
                        );
                    }

                    return false;

                }
      },
      ajax: {
        name: "ajax",
        init: function ($this, name) {
          return {
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (""+validator.lastValue === ""+value && validator.lastFinished === true) {
            return validator.lastValid === false;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax({
              url: validator.url,
              data: "value=" + encodeURIComponent(value) + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function (data) {
                if (""+validator.lastValue === ""+data.value) {
                  validator.lastValid = !!(data.valid);
                  if (data.message) {
                    validator.message = data.message;
                  }
                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    $this.trigger("revalidate.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              },
              failure: function () {
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message);
                // Timeout is set to avoid problems with the events being considered 'already fired'
                setTimeout(function () {
                  $this.trigger("revalidate.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;

        }
      },
			regex: {
				name: "regex",
				init: function ($this, name) {
          var result = {};
          var regexString = $this.data("validation" + name + "Regex");
          result.regex = regexFromString(regexString);
          if (regexString === undefined) {
            $.error("Can't find regex for '" + name + "' validator on '" + $this.attr("name") + "'");
          }
          
          var message = "Not in the expected format";
          if ($this.data("validation" + name + "Message")) {
            message = $this.data("validation" + name + "Message");
          }
        
          result.message = message;
        
          result.originalName = name;
					return result;
				},
				validate: function ($this, value, validator) {
					return (!validator.regex.test(value) && ! validator.negative) || 
						(validator.regex.test(value) && validator.negative);
				}
			},
			email: {
				name: "email",
				init: function ($this, name) {
          var result = {};
          result.regex = regexFromString("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
          
          var message = "Not a valid email address";
          if ($this.data("validation" + name + "Message")) {
            message = $this.data("validation" + name + "Message");
          }
        
          result.message = message;
        
          result.originalName = name;
					return result;
				},
				validate: function ($this, value, validator) {
					return (!validator.regex.test(value) && ! validator.negative) || 
						(validator.regex.test(value) && validator.negative);
				}
			},
			required: {
				name: "required",
				init: function ($this, name) {
          var message = "This is required";
          if ($this.data("validation" + name + "Message")) {
            message = $this.data("validation" + name + "Message");
          }
          
					return {message: message};
				},
				validate: function ($this, value, validator) {
					return !!(value.length === 0  && ! validator.negative) ||
						!!(value.length > 0 && validator.negative);
				},
        blockSubmit: true
			},
			match: {
				name: "match",
				init: function ($this, name) {
          var elementName = $this.data("validation" + name + "Match");
          var $form = $this.parents("form").first();
					var $element = $form.find("[name=\"" + elementName + "\"]").first();
					$element.bind("validation.validation", function () {
						$this.trigger("revalidate.validation", {submitting: true});
					});
          var result = {};
          result.element = $element;
          
          if ($element.length === 0) {
            $.error("Can't find field '" + elementName + "' to match '" + $this.attr("name") + "' against in '" + name + "' validator");
          }
        
          var message = "Must match";
          var $label = null;
          if (($label = $form.find("label[for=\"" + elementName + "\"]")).length) {
            message += " '" + $label.text() + "'";
          } else if (($label = $element.parents(".control-group").first().find("label")).length) {
            message += " '" + $label.first().text() + "'";
          }
        
          if ($this.data("validation" + name + "Message")) {
            message = $this.data("validation" + name + "Message");
          }
        
          result.message = message;
        
					return result;
				},
				validate: function ($this, value, validator) {
					return (value !== validator.element.val() && ! validator.negative) || 
						(value === validator.element.val() && validator.negative);
				},
        blockSubmit: true,
        includeEmpty: true
			},
			max: {
				name: "max",
				init: function ($this, name) {
          var result = {};
          
          result.max = $this.data("validation" + name + "Max");
          
          result.message = "Too high: Maximum of '" + result.max + "'";
          if ($this.data("validation" + name + "Message")) {
            result.message = $this.data("validation" + name + "Message");
          }
          
					return result;
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value, 10) > parseFloat(validator.max, 10) && ! validator.negative) ||
						(parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative);
				}
			},
			min: {
				name: "min",
				init: function ($this, name) {
					var result = {};
          
          result.min = $this.data("validation" + name + "Min");
          
          result.message = "Too low: Minimum of '" + result.min + "'";
          if ($this.data("validation" + name + "Message")) {
            result.message = $this.data("validation" + name + "Message");
          }
          
					return result;
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value) < parseFloat(validator.min) && ! validator.negative) ||
						(parseFloat(value) >= parseFloat(validator.min) && validator.negative);
				}
			},
			maxlength: {
				name: "maxlength",
				init: function ($this, name) {
          var result = {};
          
          result.maxlength = $this.data("validation" + name + "Maxlength");
          
          result.message = "Too long: Maximum of '" + result.maxlength + "' characters";
          if ($this.data("validation" + name + "Message")) {
            result.message = $this.data("validation" + name + "Message");
          }
          
					return result;
				},
				validate: function ($this, value, validator) {
					return ((value.length > validator.maxlength) && ! validator.negative) ||
						((value.length <= validator.maxlength) && validator.negative);
				}
			},
			minlength: {
				name: "minlength",
				init: function ($this, name) {
					var result = {};
          
          result.minlength = $this.data("validation" + name + "Minlength");
          
          result.message = "Too short: Minimum of '" + result.minlength + "' characters";
          if ($this.data("validation" + name + "Message")) {
            result.message = $this.data("validation" + name + "Message");
          }
          
					return result;
				},
				validate: function ($this, value, validator) {
					return ((value.length < validator.minlength) && ! validator.negative) ||
						((value.length >= validator.minlength) && validator.negative);
				}
			},
			maxchecked: {
				name: "maxchecked",
				init: function ($this, name) {
          var result = {};
          
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("change.validation click.validation", function () {
						$this.trigger("revalidate.validation", {includeEmpty: true});
					});
          
          result.elements = elements;
          result.maxchecked = $this.data("validation" + name + "Maxchecked");
          
          var message = "Too many: Max '" + result.maxchecked + "' checked";
          if ($this.data("validation" + name + "Message")) {
            message = $this.data("validation" + name + "Message");
          }
          result.message = message;
          
					return result;
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length > validator.maxchecked && ! validator.negative) ||
						(validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative);
				},
        blockSubmit: true
			},
			minchecked: {
				name: "minchecked",
				init: function ($this, name) {
          var result = {};
          
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("change.validation click.validation", function () {
						$this.trigger("revalidate.validation", {includeEmpty: true});
					});
          
          result.elements = elements;
          result.minchecked = $this.data("validation" + name + "Minchecked");
          
          var message = "Too few: Min '" + result.minchecked + "' checked";
          if ($this.data("validation" + name + "Message")) {
            message = $this.data("validation" + name + "Message");
          }
          result.message = message;
          
					return result;
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length < validator.minchecked && ! validator.negative) ||
						(validator.elements.filter(":checked").length >= validator.minchecked && validator.negative);
				},
        blockSubmit: true,
        includeEmpty: true
			},
      number: {
        name: "number",
        init: function ($this, name) {
          var result = {};
          result.step = 1;
          if ($this.attr("step")) {
            result.step = $this.attr("step");
          }
          if ($this.data("validation" + name + "Step")) {
            result.step = $this.data("validation" + name + "Step");
          }
        
          result.decimal = ".";
          if ($this.data("validation" + name + "Decimal")) {
            result.decimal = $this.data("validation" + name + "Decimal");
          }
        
          result.thousands = "";
          if ($this.data("validation" + name + "Thousands")) {
            result.thousands = $this.data("validation" + name + "Thousands");
          }
        
          result.regex = regexFromString("([+-]?\\d+(\\" + result.decimal + "\\d+)?)?");
          
          result.message = "Must be a number";
          var dataMessage = $this.data("validation" + name + "Message");
          if (dataMessage) {
            result.message = dataMessage;
          }
                  
          return result;
        },
        validate: function ($this, value, validator) {
          var globalValue = value.replace(validator.decimal, ".").replace(validator.thousands, "");
          var multipliedValue = parseFloat(globalValue);
          var multipliedStep = parseFloat(validator.step);
          while (multipliedStep % 1 !== 0) {
            multipliedStep *= 10;
            multipliedValue *= 10;
          }
          var regexResult = validator.regex.test(value);
          var stepResult = parseFloat(multipliedValue) % parseFloat(multipliedStep) === 0;
          var typeResult = !isNaN(parseFloat(globalValue)) && isFinite(globalValue);
          var result = !(regexResult && stepResult && typeResult);
          return result;
        },
        message: "Must be a number"
      }
		},
		builtInValidators: {
			email: {
				name: "Email",
				type: "email"
			},
			passwordagain: {
				name: "Passwordagain",
				type: "match",
				match: "password",
				message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
			},
			positive: {
				name: "Positive",
				type: "shortcut",
				shortcut: "number,positivenumber"
			},
			negative: {
				name: "Negative",
				type: "shortcut",
				shortcut: "number,negativenumber"
			},
			integer: {
				name: "Integer",
				type: "regex",
				regex: "[+-]?\\d+",
				message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
			},
			positivenumber: {
				name: "Positivenumber",
				type: "min",
				min: 0,
				message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
			},
			negativenumber: {
				name: "Negativenumber",
				type: "max",
				max: 0,
				message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
			},
			required: {
				name: "Required",
				type: "required",
				message: "This is required<!-- data-validator-required-message to override -->"
			},
			checkone: {
				name: "Checkone",
				type: "minchecked",
				minchecked: 1,
				message: "Check at least one option<!-- data-validation-checkone-message to override -->"
			},
      number: {
        name: "Number",
        type: "number",
        decimal: ".",
        step: "1"
			},
      pattern: {
        name: "Pattern",
        type: "regex",
        message: "Not in expected format"
      }
		}
	};

	var formatValidatorName = function (name) {
		return name
			.toLowerCase()
			.replace(
				/(^|\s)([a-z])/g ,
				function(m,p1,p2) {
					return p1+p2.toUpperCase();
				}
			)
		;
	};

	var getValue = function ($this) {
		// Extract the value we're talking about
		var value = $this.val();
		var type = $this.attr("type");
    var parent = null;
    var hasParent = !!(parent = $this.parents("form").first()) || !!(parent = $this.parents(".control-group").first());
		if (type === "checkbox") {
      value = ($this.is(":checked") ? value : "");
      if (hasParent) {
        value = parent.find("input[type='checkbox'][name='" + $this.attr("name") + "']:checked").map(function (i, el) { return $(el).val(); }).toArray().join(",");
      }
		}
		if (type === "radio") {
			value = ($('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "");
      if (hasParent) {
        value = parent.find("input[type='radio'][name='" + $this.attr("name") + "']:checked").map(function (i, el) { return $(el).val(); }).toArray().join(",");
      }
		}
		return value;
	};

  function regexFromString(inputstring) {
		return new RegExp("^" + inputstring + "$");
	}

  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
  **/
  function executeFunctionByName(functionName, context /*, args*/) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
  }

	$.fn.jqBootstrapValidation = function( method ) {

		if ( defaults.methods[method] ) {
			return defaults.methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return defaults.methods.init.apply( this, arguments );
		} else {
		$.error( 'Method ' +  method + ' does not exist on jQuery.jqBootstrapValidation' );
			return null;
		}

	};

  $.jqBootstrapValidation = function (options) {
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments);
  };

})( jQuery );

/*!
 * jQuery twitter bootstrap wizard plugin
 * Examples and documentation at: http://github.com/VinceG/twitter-bootstrap-wizard
 * version 1.0
 * Requires jQuery v1.3.2 or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Vadim Vincent Gabriel (http://vadimg.com), Jason Gill (www.gilluminate.com)
 */
(function(e){var h=function(d,g){d=e(d);var b=this,a=e.extend({},e.fn.bootstrapWizard.defaults,g),f=null,c=null;this.fixNavigationButtons=function(){f.length||(c.find("a:first").tab("show"),f=c.find("li:first"));b.firstIndex()>=b.currentIndex()?e("li.previous",d).addClass("disabled"):e("li.previous",d).removeClass("disabled");b.currentIndex()>=b.navigationLength()?e("li.next",d).addClass("disabled"):e("li.next",d).removeClass("disabled");if(a.onTabShow&&"function"===typeof a.onTabShow&&!1===a.onTabShow(f,
c,b.currentIndex()))return!1};this.next=function(){if(d.hasClass("last")||a.onNext&&"function"===typeof a.onNext&&!1===a.onNext(f,c,b.nextIndex()))return!1;$index=b.nextIndex();$index>b.navigationLength()||c.find("li:eq("+$index+") a").tab("show")};this.previous=function(){if(d.hasClass("first")||a.onPrevious&&"function"===typeof a.onPrevious&&!1===a.onPrevious(f,c,b.previousIndex()))return!1;$index=b.previousIndex();0>$index||c.find("li:eq("+$index+") a").tab("show")};this.first=function(){if(a.onFirst&&
"function"===typeof a.onFirst&&!1===a.onFirst(f,c,b.firstIndex())||d.hasClass("disabled"))return!1;c.find("li:eq(0) a").tab("show")};this.last=function(){if(a.onLast&&"function"===typeof a.onLast&&!1===a.onLast(f,c,b.lastIndex())||d.hasClass("disabled"))return!1;c.find("li:eq("+b.navigationLength()+") a").tab("show")};this.currentIndex=function(){return c.find("li").index(f)};this.firstIndex=function(){return 0};this.lastIndex=function(){return b.navigationLength()};this.getIndex=function(a){return c.find("li").index(a)};
this.nextIndex=function(){return c.find("li").index(f)+1};this.previousIndex=function(){return c.find("li").index(f)-1};this.navigationLength=function(){return c.find("li").length-1};this.activeTab=function(){return f};this.nextTab=function(){return c.find("li:eq("+(b.currentIndex()+1)+")").length?c.find("li:eq("+(b.currentIndex()+1)+")"):null};this.previousTab=function(){return 0>=b.currentIndex()?null:c.find("li:eq("+parseInt(b.currentIndex()-1)+")")};this.show=function(a){return d.find("li:eq("+
a+") a").tab("show")};this.disable=function(a){c.find("li:eq("+a+")").addClass("disabled")};this.enable=function(a){c.find("li:eq("+a+")").removeClass("disabled")};this.hide=function(a){c.find("li:eq("+a+")").hide()};this.display=function(a){c.find("li:eq("+a+")").show()};this.remove=function(a){var b="undefined"!=typeof a[1]?a[1]:!1;a=c.find("li:eq("+a[0]+")");b&&(b=a.find("a").attr("href"),e(b).remove());a.remove()};c=d.find("ul:first",d);f=c.find("li.active",d);c.hasClass(a.tabClass)||c.addClass(a.tabClass);
if(a.onInit&&"function"===typeof a.onInit)a.onInit(f,c,0);e(a.nextSelector,d).bind("click",b.next);e(a.previousSelector,d).bind("click",b.previous);e(a.lastSelector,d).bind("click",b.last);e(a.firstSelector,d).bind("click",b.first);if(a.onShow&&"function"===typeof a.onShow)a.onShow(f,c,b.nextIndex());b.fixNavigationButtons();e('a[data-toggle="tab"]',d).on("click",function(d){d=c.find("li").index(e(d.currentTarget).parent("li"));if(a.onTabClick&&"function"===typeof a.onTabClick&&!1===a.onTabClick(f,
c,b.currentIndex(),d))return!1});e('a[data-toggle="tab"]',d).on("show",function(a){$element=e(a.target).parent();if($element.hasClass("disabled"))return!1;f=$element;b.fixNavigationButtons()})};e.fn.bootstrapWizard=function(d){if("string"==typeof d){var g=Array.prototype.slice.call(arguments,1);1===g.length&&g.toString();return this.data("bootstrapWizard")[d](g)}return this.each(function(){var b=e(this);if(!b.data("bootstrapWizard")){var a=new h(b,d);b.data("bootstrapWizard",a)}})};e.fn.bootstrapWizard.defaults=
{tabClass:"nav nav-pills",nextSelector:".wizard li.next",previousSelector:".wizard li.previous",firstSelector:".wizard li.first",lastSelector:".wizard li.last",onShow:null,onInit:null,onNext:null,onPrevious:null,onLast:null,onFirst:null,onTabClick:null,onTabShow:null}})(jQuery);
