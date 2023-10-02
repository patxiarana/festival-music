
document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
})


function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){ 
    const galeria = document.querySelector('.galeria-imagenes')
   
    for(let i = 0 ; i <= 12 ; i++) {
        console.log(i)
    }
}