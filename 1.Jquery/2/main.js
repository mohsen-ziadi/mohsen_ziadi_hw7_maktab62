$(document).ready(function() {
    $(".container").css("background-color", "blue");
    $(".container").hover(
        function() {
            $(".container").css("background-color", "red");
        },
        function() {
            $(".container").css("background-color", "blue");
        }
    );
});