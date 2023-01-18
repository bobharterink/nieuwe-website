$(document).ready(function() {
    $(".test").click(showDescription);
    $(".menuscreen").click(showDescription);
});
function showDescription(event) {
    $(".menuscreen").removeClass("active");
    $("html").css("overflow-y", "hidden");
    $("#projects").addClass("splitLeft");
    $("#description").addClass("splitRight");
    $("#description").empty();
    $("#description").load("hoofdstukken/" + ($(this).attr("href")).slice(1, ($(this).attr("href")).length) + ".html");
    $("body").css("overflow-x", "hidden");
    $("body").css("overflow-y", "hidden");
}
;

