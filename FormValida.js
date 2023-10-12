/*PARA FORMULARIO*/
//Expresiones regulares
const regApellNombre=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regCorreo=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const regTel= /^\d{7,14}$/;
const regDirec=/^[\w,.]+( [.,\w]+)*$/;


function validar(e){
    e.preventDefault();
    let apellido=document.getElementById('apellido');
    let nombre=document.getElementById('nombre');
    let correo=document.getElementById('correo');
    let telefono=document.getElementById('telefono');
    let direccion=document.getElementById('direccion');
    let provincia=document.getElementById('provincia');

    let errorApe=document.getElementById('veriApellido');
    let errorNom=document.getElementById('veriNom');
    let errorCor=document.getElementById('veriCor');
    let errorTel=document.getElementById('verTel');
    let errorDir=document.getElementById('verDirec');

    let errorA=false;

    //Limpiamos errores
    errorApe.textContent="";
    errorNom.textContent="";
    errorCor.textContent="";
    errorTel.textContent="";
    errorDir.textContent="";

    let apellidoValue=apellido.value.trim();
    let nombreValue=nombre.value.trim();
    let correoValue=correo.value.trim();
    let telefonoValue=telefono.value.trim();
    let direccionValue=direccion.value.trim();
    let provinciaValue=provincia.value.trim();
    
 
    //Validar Apellido
    if(apellido.value=="" || !regApellNombre.test(apellido.value)){
        errorApe.textContent="El apellido es invalido";
        errorApe.classList.add('errorActi');
        apellido.style.border="1px solid #FF0000";
        errorA=true;
    }

    //Nombre
    if(nombre.value=="" || !regApellNombre.test(nombre.value)){
        errorNom.textContent="El nombre es invalido";
        errorNom.classList.add('errorActi');
        nombre.style.border="1px solid #FF0000";
        errorA=true;
    }
    
    //Validar Correo
    if(correo.value=="" || !regCorreo.test(correo.value)){
        errorCor.textContent="El correo es invalido";
        errorCor.classList.add('errorActi');
        correo.style.border="1px solid #FF0000";
        errorA=true;
    }

    //Validar Telefono
    if(telefono.value=="" || !regTel.test(telefono.value)){
        errorTel.textContent="El telefono es invalido";
        errorTel.classList.add('errorActi');
        telefono.style.border="1px solid #FF0000";
        errorA=true;
    }

    //Validar Direccion
    if(direccion.value=="" || !regDirec.test(direccion.value)){
        errorDir.textContent="Error de direccion";
        errorDir.classList.add('errorActi');
        direccion.style.border="1px solid #FF0000";
        errorA=true;
    }

    //Validar Provincia
    if(provincia.value==""){
        provincia.style.border="1px solid #FF0000";
        errorA=true;
    }

    if(errorA){
        return false;
    }else{
        //Crear elementos en el DOM
        let registro=document.getElementById('Registro');
        let msjNuevo=document.createElement("p");
        let msjFinal="Se registro: " + apellidoValue +" "+ nombreValue +" "+ correoValue +" Districto: "+provincia.value;
        msjNuevo.textContent=msjFinal;
        registro.appendChild(msjNuevo);

        //Limpiamos stylos
        apellido.style.border="1px solid #ccc";
        nombre.style.border="1px solid #ccc";
        correo.style.border="1px solid #ccc";
        direccion.style.border="1px solid #ccc";
        telefono.style.border="1px solid #ccc";
        provincia.style.border="1px solid #ccc";
    }
    
    let frm=document.getElementById('Formulario');
    //Limpiamos campos
     apellido.value="";
     nombre.value="";
     correo.value="";
     telefono.value="",
     direccion.value="";

    //Hacemos focus al primer input(Apellido)
    apellido.focus();

    //Reseteamos el formulario
    frm.reset();
    return false;
}

window.onload=function(){
    let apellido=document.getElementById("apellido");
    apellido.focus();
};
// Agrega un controlador de eventos al formulario
let formulario = document.getElementById("Formulario");
formulario.addEventListener("submit", validar);














/*FIN FORMULARIO*/



/*CARROUSEL*/
let fotos=['src/1.jpg', 'src/2.jpg', 'src/26Movil.jpg', 'src/4.png', 'src/5.jpg', 'src/22Empresas.jpg', 'src/24Empresas.jpg'];
/*let nombres=["1", "2", "26movil"];*/
let i=0;
function carrousel(carrouselFunc){
    carrouselFunc.addEventListener('click', e=>{
        let atras=carrouselFunc.querySelector('#atrasBoton'),
        adelante=carrouselFunc.querySelector("#adelanteBoton"),
        img=carrouselFunc.querySelector("#imgCarrousel"),
        tgt=e.target;

        if(tgt==atras){
            if(i>0){
                img.src=fotos[i-1];
                i--;
            } else{
                img.src=fotos[fotos.length-1];
                i=fotos.length-1;
            }
        } else if(tgt==adelante){
            if(i<fotos.length -1){
                img.src=fotos[i+1];
                i++;
            }else{
                img.src=fotos[0];
                i=0;
            }
        }

    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    let carrouselFunc=document.querySelector('#carrouselFunc');
    carrousel(carrouselFunc);
});

