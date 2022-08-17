/*页面执行加载执行*/
$(function() {
    var name = $('meta[name="page"]').attr("content")
    if (name) {
        $("#nav_" + name).addClass("active");
    }
});