$(document).ready(function() {
    $(".step").click(function() {
        $(this).parent().find('.content').map((index, elm) => $(elm).slideUp())
        $(this).children().last().slideDown()
    })
})