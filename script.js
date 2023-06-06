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

/*FIN FORMULARIO*/

/*CARROUSEL*/
let fotos=['src/1.jpg', 'src/2.jpg', 'src/26movil.jpg', 'src/4.png', 'src/5.jpg', 'src/22Empresas.jpg', 'src/24Empresas.jpg'];
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

/*function adelante(){
    if(i<fotos.length-1){
        i++;
        let elemento=document.querySelector("#imgCarrousel");
        let nom=document.querySelector("#nombres");
        elemento.src=fotos[i];
        nom.innerHTML=nombres[i];

    }

}
function atras(){
    if (i > 0 && i < fotos.length) {
        i--;
        let elemento = document.querySelector("#imgCarrousel");
        let nom = document.querySelector("#nombres");
        elemento.src = fotos[i];
        nom.innerHTML = nombres[i];
    }
}*/
/*let imagenes=['src/1.jpg','src/2.jpg','src/3.jpg'];
let posicion=0;
let $botonRetroceder = document.querySelector('#atrasBoton');
let $botonAvanzar = document.querySelector('#adelanteBoton');
let $imagen = document.querySelector('#imgCarrousel');

function pasarFoto(){
    if(posicion>=imagenes.length-1){
        posicion=0;
    } else{
        posicion++;
    }
    mostrarImagen();
}

function retrocederFoto(){
    if(posicion<=0){
        posicion=imagenes.length-1;
    } else{
        posicion--;
    }
    mostrarImagen();
}

function mostrarImagen(){
    $imagen.style.backgroundImage=`url(${IMAGENES[posicion]})`;
}

$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
mostrarImagen();*/



/*FIN CARROUSEL*/