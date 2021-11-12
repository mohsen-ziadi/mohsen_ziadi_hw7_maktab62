$(document).ready(function() {
    let counter = 1
    let progressBarWidth = $("#progress-bar").width()
    $("#progress-bar-button").click(function() {
        counter++
        if (counter <= 10) {
            $("#progress-bar div").css("width", counter * (progressBarWidth / 10))
        }
    })
})