$(document).ready(function(){
        $('#btn_registrar').click(function(){
        	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
var porId=document.getElementById("email").value;
        	if($('#email').val()==""){
            document.getElementById("email").focus();
                alertify.alert("Advertencia!","Debes Ingresar el Email con el que te Registraste");
                return false;
            }else if(!re.exec(porId)){
                document.getElementById("email").focus();
        alertify.alert("Advertencia!","Email Ingresado No Valido");
        return false;
        }else if($('#password').val()==""){
            document.getElementById("password").focus();
                alertify.alert("Advertencia!","Debes Ingresar tu Password");  
                 return false;
            }
        });
    });
    function showP(){
        $pass = document.getElementById("password");
        if($pass.type=="password"){
            $pass.type="text";
        }else{
           $pass.type="password";
        }       
    }

    var index = 0;

    var listaimg = ["imagen/fondo-azul.jpg", "imagen/fondo-azul2.jpg", "imagen/fondo-azul3.jpg", "imagen/fondo-azul4.jpg"];

$(function() {
  
    setInterval(changeImage, 5000);
  
});

function changeImage() {
   $('body').css("background-image", 'url(' + listaimg[index] + ')');
                  
   index++;
                  
   if(index == 4)
      index = 0;  
}