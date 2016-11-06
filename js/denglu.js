/**
 * Created by Administrator on 2016/10/21.
 */
$(function(){
    //会员与手机登陆切换
    $('.dl_btn').click(function(){
        if($(this).text()=="手机号登录"){
            $('.dl_con_sj').show();
            $('.dl_con_hy').hide();
            $(this).text("会员账号登陆");
            $('.dl_pw').hide();
        }else if($(this).text()=="会员账号登陆"){
            $('.dl_con_sj').hide();
            $('.dl_con_hy').show();
            $(this).text("手机号登录");
            $('.dl_pw').show();
        }
    });
    //个人和企业登陆切换
    $('.dl_qhBtn>ul>li').click(function(){
        $(this).addClass('dlBtn').siblings().removeClass('dlBtn');
        $(this).parents('.dl_qhBtn').prev().children().eq($(this).index()).show().siblings().hide();
    });
});
