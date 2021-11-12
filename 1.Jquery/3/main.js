$(document).ready(function() {
    $("#ParentClick").click(function() {
        $("#target").html(
            `${$("#parent").html()} ${$("#target").html()}${$("#child").html()}${$("#target").html()}`
        );
    });
    $("#ChildClick").click(function() {
        $("#target").html(`${$("#child").html()} ${$("#target").html()}`);
    });
});