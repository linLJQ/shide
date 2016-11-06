/**
 * Created by Wu on 2016/9/2.
 */
$(function(){
    if (/android/i.test(navigator.userAgent)){
        $(".hgtjImgBox ").css({"margin-top":".4rem"});
        $(".hgtjListRight ").css({"margin-top":".5rem"});
    }
    getSearchWidth();
    getAdvImgWidth();
    getHgtjListRigthWidth();
    $(window).resize(function(){
        getSearchWidth();
        getAdvImgWidth();
        getHgtjListRigthWidth();
    });
    $('.searchInputBox').bind('focus',function(){
        $('.indexFooter').css('position','static');
    }).bind('blur',function(){
        $('.indexFooter').css({'position':'fixed'});
    });


    //养老机构和居家护理切换
    $(".yljg").click(function(){
        if($(this).hasClass("yljgActive")){
            $(this).removeClass('yljgActive');
            $(".greenDetailsStep").hide();
            $(this).find("i").removeClass("greenTip");
        }else{
            $(this).addClass('yljgActive');
            $(".greenDetailsStep").show();
            $(this).find("i").addClass("greenTip");
            $(".jjhl").removeClass('jjhlActive');
            $(".orangeDetailsStep").hide();
            $(".jjhl").find("i").removeClass("orangeTip");
        }
    });
    $(".jjhl").click(function(){
        if($(this).hasClass("jjhlActive")){
            $(this).removeClass('jjhlActive');
            $(".orangeDetailsStep").hide();
            $(this).find("i").removeClass("orangeTip");
        }else{
            $(this).addClass('jjhlActive');
            $(".orangeDetailsStep").show();
            $(this).find("i").addClass("orangeTip");
            $(".yljg").removeClass('yljgActive');
            $(".greenDetailsStep").hide();
            $(".yljg").find("i").removeClass("greenTip");
        }
    });
    //护工推荐和养老机构推荐内容
   $(".yljgNavbox>li").click(function(e){
       $(this).addClass("bgColorOrange");
       $(this).siblings().removeClass("bgColorOrange");
       var srollLeftValue=$(this).offset().left-$(this).parent().offset().left+$(this).parent().scrollLeft();
       $(this).parent().animate({scrollLeft:srollLeftValue});

   });
    $(".hgNavBox>li").click(function(){
        $(this).addClass("bgColorGreen");
        $(this).siblings().removeClass("bgColorGreen");
        var srollLeftValue=$(this).offset().left-$(this).parent().offset().left+$(this).parent().scrollLeft();
        $(this).parent().animate({scrollLeft:srollLeftValue});
    });
    //footer部分切换
    $(".indexFooter>a").click(function(){
        $(this).find(".activeIco").show().end().find(".noActiveIco").hide();
        $(this).find("p").addClass("colorGreen").removeClass("colorGray");
        $(this).siblings().find(".activeIco").hide().end().find(".noActiveIco").show().end().find("p").addClass("colorGray").removeClass("colorGreen");
    });
    //收藏
    $('.collect').click(function(){
        var shoucang= $(this).children('a').find('img');
        if(shoucang.attr('src')=='../img/w13.png'){
            shoucang.attr('src','../img/w13_1.png');
            $(this).find('i').text('已收藏');
        }else{
            shoucang.attr('src','../img/w13.png');
            $(this).find('i').text('立即收藏');
        }
    });
    //城市选择
    $('.cityItemBox>li').click(function(){
        $(this).addClass('cityCheckStyle').siblings().removeClass('cityCheckStyle');
    });


});
function getSearchWidth(){
    $(".searBox").css("width",$(window).width()-20-$("#area").width()-$(".wx").width());
    $(".searchInputBox").css("width",$(".searBox").width()-$(".searchIco").width()-10);
}
//advImg的宽度
function getAdvImgWidth(){
    $(".advList").css("width",($(".advImg>ul").width()-18)*0.5);
    $(".advListImg>img").css("height",$(".advListImg>img").width());
}
//护工推荐列表右侧的宽度
function getHgtjListRigthWidth(){
    $(".hgtjListRight ").css("width",$(".hgtjList").width()-$(".hgtjImgBox").width()-6);
}
