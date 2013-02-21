$(function() {

    var newHash      = "",
        $mainContent = $("#mainContent"),
        $pageWrap    = $("#pageWrap"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });

    $(function() {

         // load the content
        function loadContent(href){
            $mainContent
                .find("#content")
                .fadeOut(200, function() {
                    $mainContent.hide().load(href + " #content", function() {
                    $mainContent.fadeIn(200, function() {
                        // $pageWrap.animate({
                        //     height: baseHeight + $mainContent.height() + "px"
                        // });
                    });
                    $("nav a").removeClass("current");
                    console.log(href);
                    $("nav a[href$='"+href+"']").addClass("current");
                });
            });
        }; 

      if (Modernizr.history) {

        // history is supported; do magical things

        var newHash      = "",
            $mainContent = $("#mainContent"),
            $pageWrap    = $("#pageWrap"),
            baseHeight   = 0,
            $el;


        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height();

        // hijack the nav click event
        $("nav").delegate("a", "click", function() {
            _link = $(this).attr("href");
            history.pushState(null, null, _link);
            loadContent(_link);
            return false;
        }); 

       

          // change the url without a page refresh and add a history entry.
        $(window).bind('popstate', function(){
            _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
            loadContent(_link);
        }); 

   } // history is not supported; nothing fancy here

});

});