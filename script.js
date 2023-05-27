/*PARA FORMULARIO*/
const apellido=document.getElementById("apellido");
const nombre=document.getElementById("nombre");
const dni=document.getElementById("dni");
const correo=document.getElementById("correo");
const telefono=document.getElementById("telefono");
const direccion=document.getElementById("direccion");
const ciudad=document.getElementById("ciudad");
const form=document.getElementById("form");
const parrafo=document.getElementById("error");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let errores="";
    let entrar=false;
    if(apellido.value.length < 6){
        errores+="El apellido no es valido <br>";
        entrar=true;
    }
    if(entrar){
        error.ininnerHTML=errores;
    }

});