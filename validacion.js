$(document).ready(function () {

    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var maxlength = /^[A-Za-z]{10,50}$/;//solo de 10 a 50 letras

    $("#validar").click(function (){
        $(".error").remove();

        if( $("#nombre").val() == "" )
        {
            $("#nombre").focus().after("<span class='error'>Ingrese su nombre</span>");
            return false;
        }

        else if(!maxlength.test($("#nombre").val()))
        {
            $("#nombre").focus().after("<span class='error'>Ingrese solo de 10 a 50 letras</span>");
            return false;
        }


        else if( $("#email").val() == "" )
        {
            $("#email").focus().after("<span class='error'>Ingrese un email</span>");
            return false;
        }


        else if(!emailreg.test($("#email").val()) )
        {
            $("#email").focus().after("<span class='error'>Ingrese un email correcto</span>");
            return false;
        }


        else if( $("#asunto").val() == "")
        {
            $("#asunto").focus().after("<span class='error'>Ingrese un asunto</span>");
            return false;
        }

        else if( $("#mensaje").val() == "" )
        {
            $("#mensaje").focus().after("<span class='error'>Ingrese un mensaje</span>");
            return false;
        }
    });
});