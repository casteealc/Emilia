$(window).ready(function(){

    $('#formulario_login').on('submit', function(e){

        e.preventDefault();

        let usuario = $('#txt_usuario').val();
        let pass =$('#txt_contraseña'). val();

        $.post('config/controlador.php', {usuario,pass}, function(data){

            data = JSON.parse(data);

            if(data == 'true'){
            
            }
    });
    
        })

});