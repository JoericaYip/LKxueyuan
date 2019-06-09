
//1.响应式轮播图
$(function () {
    $(window).on("resize", function () {
        // 1.1 获取窗口的宽度
        // 当调整浏览器窗口的大小时，触发 resize 事件
        let clientW = $(window).width();
        // console.log(clientW);

        // 1.2 设置临界值
        let isShowBigImage = clientW >= 800;

        // 1.3 获取所有的item
        let $allItems = $("#lk_carousel .item");
        // console.log($allItems);

        // 1.4 遍历
        $allItems.each(function (index, item) {
            // 1.4.1 取出图片的路径
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("' + src +'")';

            // 1.4.2 设置背景
            $(item).css({
                backgroundImage: imgUrl
            });

            // 1.4.3 设置img标签
            if(!isShowBigImage){
                let $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            }else {
                $(item).empty();
            }

        });
    });

    $(window).trigger("resize");



    // 2. 工具提示
    $('[data-toggle="tooltip"]').tooltip();
        //bootstrap要求使用工具提示js插件时,要先在js文件中增加这一行代码 

    // 3. 动态处理产品特色头部列表宽度
    $(window).on("resize", function () {
         let $ul = $("#lk_product .nav");
         let $allLis = $("[role='presentation']", $ul); //属性选择器
         // console.log($allLis);

         // 3.1 遍历
        let totalW = 0;
        $allLis.each(function (index, item) {
             totalW += $(item).width();
        });

        // console.log(totalW);

        let parentW = $ul.parent().width();

        // 3.2 设置宽度
        if(totalW > parentW){
            $ul.css({
                width: totalW + "px"
            })
        }else {
            $ul.removeAttr("style");
        }
    });

    
    // 4. 点击导航选项实现屏幕滚动处理
    let allLis = $("#lk_nav li");
    
    $(allLis[2]).on("click", function () {
        $("html,body").animate({ scrollTop: $("#lk_hot").offset().top }, 1000);
    });


    $(window).trigger("resize");
});