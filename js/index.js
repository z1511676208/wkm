/* 
* @Author: Marte
* @Date:   2016-11-15 08:38:31
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-25 10:48:39
*/

$(document).ready(function(){
    // 定时器设置
    var timer=null;
    $(".mainNav>li a").mouseover(function(event) {
         $(this).parent().find("ol").show();
    });
    $(".mainNav>li").hover(function() {
        $(this).find('ol').show();
    }, function() {
        var _this=this;
        timer=setTimeout(function(){
            $(_this).find('ol').hide();                        
        }, 200);
        
    });
    $(".mainNav li ol").hover(function() {
        clearTimeout(timer);
    }, function() {
        $(".mainNav>li ol").hide();
    });
    // 导航滚动改变状态
    (function(){
        var num=$('.mainBav').offset().top;
        $(window).scroll(function(e) {  
            var top=$(window).scrollTop();
            if(top>num-5){
                $(".mainBav").addClass('nav1');
            }else{
                $(".mainBav").removeClass('nav1');
            }
        });
    })();
    
});