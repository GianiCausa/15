$(document).ready(function(){

    $('#btnEnviar').click(function(e){
        e.preventDefault();

        $("#error1").text("");

        if($('#username').val()===""){
            $("#error1").text("Debe ingresar un usuario");
            $("#error1").css("color", "red");
            return;
        }

        if(email.test(username)){
            $("#error1").text("El usuario debe ser un email valido");
            $("#error1").css("color", "red");
            return;
        }
        
        console.log();

        username = $('#username').val();

        let formData = {
            username,
            password: $('#password').val()
        }
    })
})