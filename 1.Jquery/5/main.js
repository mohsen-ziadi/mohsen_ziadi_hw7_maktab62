$(document).ready(function() {
    $("#slide-down-button").click(function() {
        $("#slided-content").slideDown()
    })
    $("#slide-up-button").click(function() {
        $("#slided-content").slideUp()
    })
    $("#slide-toggle-button").click(function() {
        $("#slided-content").slideToggle()
    })
})