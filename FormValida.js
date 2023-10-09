/*PARA FORMULARIO*/
let ffocus=document.querySelector("form input");
ffocus.focus();
let regNombreApell=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let regCorreo=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
let regTel= /^\d{7,14}$/;
let regDirec=/^[\w,.]+( [.,\w]+)*$/;


function validar(){
    let fApellido=document.querySelector("#apellido");
    let fNombre=document.querySelector("#nombre");
    let fCorreo=document.querySelector("#correo");
    let fTel=document.querySelector("#telefono");
    let fDirec=document.querySelector("#direccion");
    let fCiudad=document.querySelector("#ciudad");


    /*fApellido.classList.remove("error");
    fNombre.classList.remove("error");
    fCorreo.classList.remove("error");
    fTel.classList.remove("error");
    fDirec.classList.remove("error");
    fCiudad.classList.remove("error");*/
    
    document.querySelector('#veriApellido').classList.add('errorInact');
	document.querySelector('#veriApellido').classList.remove('errorActi');
    
    document.querySelector("#veriNom").classList.add('errorInact');
    document.querySelector("#veriNom").classList.remove('errorActi');
    
    document.querySelector('#veriCor').classList.add('errorInact');
    document.querySelector('#veriCor').classList.add('errorActi');
    
    document.querySelector('#verTel').classList.add('errorInact');
    document.querySelector('#verTel').classList.remove('errorActi');

    document.querySelector('#verDirec').classList.add('errorInact');
    document.querySelector('#verDirec').classList.remove('errorActi');

    document.querySelector('#verCiud').classList.add('errorInact');
    document.querySelector('#verCiud').classList.remove('errorActi');

    let msj=document.querySelector("#mensaje");
    let errorA=false

    //Apellido
    if(fApellido.value=="" || !regNombreApell.test(fApellido.value)){
        fApellido.classList.add("error");
        document.querySelector('#veriApellido').classList.remove('errorInact');
        document.querySelector('#veriApellido').classList.add('errorActi');
        errorA=true;
    }

    //Nombre
    if(fNombre.value=="" || !regNombreApell.test(fNombre.value)){
        fNombre.classList.add("error");
        document.querySelector('#veriNom').classList.remove('errorInact');
        document.querySelector('#veriNom').classList.add('errorActi');
        errorA=true;
    }
    
    //Correo
    if(fCorreo.value=="" || !regCorreo.test(fCorreo.value)){
        fCorreo.classList.add("error");
        document.querySelector('#veriCor').classList.remove('errorInact');
        document.querySelector('#veriCor').classList.add('errorActi');
        errorA=true;
    }

    //Tel
    if(fTel.value=="" || !regTel.test(fTel.value)){
        fTel.classList.add("error");
        document.querySelector('#verTel').classList.remove('errorInact');
        document.querySelector('#verTel').classList.add('errorActi');
        errorA=true;
    }

    //Dir
    if(fDirec.value=="" || !regDirec.test(fDirec.value)){
        fDirec.classList.add("error");
        document.querySelector('#verDirec').classList.remove('errorInact');
        document.querySelector('#verDirec').classList.add('errorActi');
        errorA=true;
    }

    //Ciud
    if(fCiudad.value=="" || !regNombreApell.test(fCiudad.value)){
        fCiudad.classList.add("error");
        document.querySelector('#verCiud').classList.remove('errorInact');
        document.querySelector('#verCiud').classList.add('errorActi');
        errorA=true;
    }

    if(errorA){
        return false;
    }else{
        let p=document.createElement("p");
        p.innerHTML="Se registro "+fApellido.value + " " +fNombre.value +", se envio al correo "+fCorreo.value;
        msj.appendChild(p);
        document.forms['fConta'].reset();
        let ffocus=document.querySelector("form input");
        ffocus.focus();
    }
   
    return false;


}














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

