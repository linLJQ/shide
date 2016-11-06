$(function () {
    //一级导航切换
    var firstNavItem=$(".firstNav>a");
    $.each(firstNavItem,function(index,$this){
        $(firstNavItem[index]).click(function(){
            $(".ylyList").show();
            $(this).addClass("activeFirstNav").siblings().removeClass("activeFirstNav");
            (index == 0) && $(".ylyList").show();
            if(index==1){
                $(".yy").show();
                $(".rz").hide();
            }
            if(index==2){
                $(".yy").hide();
                $(".rz").show();
            }
        })

    });
    // 设置多选框选中样式
    $(".choiceIco").click(function () {
        var value = $(this).children("img").attr("src");
        if (value == "img/w87.png") {
            $(this).children("input[type='checkbox']").attr("checked", false);
            $(this).children("img").attr("src", "img/w88.png");
        }
        else {
            $(this).children("input[type='checkbox']").attr("checked", true);
            $(this).children("img").attr("src", "img/w87.png");
        }
    });
//删除全选显示隐藏
    var ylyList = $(".ylyList");
    $(".editorState").click(function () {
        if($(".editorState").find("img").length!=0){
            $(".editorState>b>img").hide();
            $(".editorState").text("完成");
            $(".footerPopup").show();
        }else{
            $(".footerPopup").hide();
            $(".editorState").html('<b><img src="../img/w86.png" alt="图片无法显示" class="img-responsive"/></b>');
            $(".editorState>b>img").show();
        }

    });
    //点击全选按钮
    $(".allCheck").click(function () {
        if ($(".allCheck").find("input").is(":checked")) {
            $(".ylyList:visible").find("input").attr("checked", "checked");
            $(".ylyList:visible").find(".choiceIco").children("img").attr("src", "img/w87.png");
        }
    });
    //点击删除按钮
    $(".delete").click(function () {
        $.each(ylyList, function (index, $this) {
            $(ylyList[index]).find("input").is(":checked") && $(ylyList[index]).remove();
        })
    });
    //全部,已参观,未参观,已终止切换
    var secondNavItem = $(".secondNav>a");
    $.each(secondNavItem, function (index, $this) {
        $(this).click(function () {
            $(".ylyList").show();
            $(this).addClass("activeSecondNav").siblings().removeClass("activeSecondNav");
            var srollLeftValue = $(this).offset().left - $(this).parent().offset().left + $(this).parent().scrollLeft();
            $(this).parent().animate({scrollLeft: srollLeftValue});
            (index == 0) && $(".ylyList").show();
            if (index == 1) {
                if ($(".state").hasClass(".noVisit")) {
                    $(".noVisit").parents(".ylyList").show();
                } else {
                    $(".end,.visited").parents(".ylyList").hide();
                }
            }
            if (index == 2) {
                if ($(".state").hasClass(".visited")) {
                    $(".visited").parents(".ylyList").show();
                } else {
                    $(".end,.noVisit").parents(".ylyList").hide();
                }
            }
            if (index == 3) {
                if ($(".state").hasClass(".end")) {
                    $(".end").parents(".ylyList").show();
                } else {
                    $(".visited,.noVisit").parents(".ylyList").hide();
                }
            }
        })
    })
});

