!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=a(this.hash);if((t=t.length?t:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:t.offset().top-70},0,"easeInOutExpo"),!1}})),a(".js-scroll-trigger").click((function(){a(".navbar-collapse").collapse("hide")})),a("body").scrollspy({target:"#mainNav",offset:100});var t=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};t(),a(window).scroll(t)}(jQuery);
//# sourceMappingURL=script.js.map