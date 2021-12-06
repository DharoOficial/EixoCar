
$(document).ready(function(){

    let darkTheme = false;

    $header_color = "#3d6299";

    $("#toggle").unbind().click(function() {
        darkTheme = !darkTheme
        if(darkTheme){
            $(".fundobranco").removeClass("fundobranco").addClass("fundobranco-dark")
            $(".cabecalho").css("background","#1a4077");
        } else {
            $(".fundobranco").removeClass("fundobranco-dark").addClass("fundobranco")
            $(".cabecalho").css("background","#3d6299");
        }
    });
});