!function(o,a){a(function(){function n(){return"wistia.com"==location.hostname?"secure.wistia.com":"wistia.st"==location.hostname?"secure.wistia.st":"secure.wistia.dev"}function e(){var o=window.location.protocol+"//"+n();a(".w-global-nav__signup").attr("href",o+"/signup"),a(".w-global-nav__login").attr("href",o+"/login"),a(".w-global-nav__my-account").attr("href",o+"/login"),a(".w-global-nav__logout").attr("href",o+"/logout")}function t(){var o=location.href.match(/header_section=([^\&]+)/);if(o)return o[1];if("status.wistia.com"===location.hostname)return"support";for(var a in l)for(var n=l[a],e=0;e<n.length;e++)if(0===location.pathname.indexOf(n[e]))return a;return"product"}e();var l={product:["/product","/platform","/competitors"],learn:["/hub","/library","/blog","/community","/webinars"],company:["/about","/jobs","/wistiafest","/agencies","/use-cases"],support:["/support","/doc"],pricing:["/pricing"]},i=a(".w-global-nav__level2[data-section="+t()+"]");i.addClass("w-global-nav__current-section").addClass("w-global-nav__visible-section"),a(".w-global-nav__toggle-hamburger").click(function(o){o.preventDefault();var n=a(".w-global-nav");a(".w-global-nav__menu");n.is(".w-global-nav--expanded")?(a("body, html").css({overflow:"",height:""}),n.removeClass("w-global-nav--expanded")):(a("body, html").css({overflow:"hidden",height:"100%"}),n.addClass("w-global-nav--expanded"))}),window.W_determineLoggedIn=function(o){o.logged_in===!0?a(".w-global-nav").addClass("w-global-nav--logged-in"):a(".w-global-nav").removeClass("w-global-nav--logged-in")};var r=function(){var a=window.location.protocol+"//secure."+window.location.hostname+"/session/verify";o.ajax({url:a,dataType:"jsonp",jsonpCallback:"W_determineLoggedIn"})};r()})}(jQuery,jQuery);
