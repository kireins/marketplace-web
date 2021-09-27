// TODO 5 NAVIGATION BAR SCRIPT
$(function(){
    $(document).scroll(function(){
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
});