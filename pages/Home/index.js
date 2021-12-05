
$(document).ready(function(){

    let darkTheme = false;

    $header_color = "#3d6299";

    $("#toggle").unbind().click(function() {
        darkTheme = !darkTheme
        if(darkTheme){
            $("body").removeClass("lightTheme").addClass("darkTheme")
            $(".botao_projeto").removeClass("botao_projeto").addClass("botao_projeto_dark")
            $(".cabecalho").css("background","#1a4077");
        } else {
            $("body").removeClass("darkTheme").addClass("lightTheme")
            $(".botao_projeto").removeClass("botao_projeto_dark").addClass("botao_projeto")
            $(".cabecalho").css("background","#3d6299");
        }
    });
});