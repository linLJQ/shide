$(function($) {
    function placeholderPic(){
        var w = document.documentElement.offsetWidth;
        document.documentElement.style.fontSize=w/20+'px';
    }
    placeholderPic();
    window.onresize=function(){
        placeholderPic();
    }
});
