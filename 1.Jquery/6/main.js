$(document).ready(function() {
    $("#pages").hover(function() {
        $("#pages-menu").slideDown()
    }, function() {
        $("#pages-menu").fadeOut()
    })
    $("#links").hover(function() {
        $("#links-menu").slideDown()
    }, function() {
        $("#links-menu").fadeOut()
    })
})