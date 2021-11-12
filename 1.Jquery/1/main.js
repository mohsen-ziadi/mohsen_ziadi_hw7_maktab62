$(document).ready(function() {
    let text = $("#container").text()
    $("#container").click(function() {
        const textContainer = $(this).text()
        $(this).text(`${textContainer} ${text}`)
    })
})