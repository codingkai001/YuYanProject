$(document).ready(function () {
    //用户名截取前6个字符
    var username = $("#profile span");
    username.html(username.html().substring(0, 6));
    //左侧用户菜单栏下拉框
    $("#list ul li").hide();
    $("#account").on("click", function () {
        $("#account-list li").slideToggle(500);
    });
    $("#setting").on("click", function () {
        $("#setting-list li").slideToggle(500);
    });
    $("#moment").on("click", function () {
        $("#moment-list li").slideToggle(500);
    });

});

