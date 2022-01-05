import animeData from './animeData.js'

const frangmento1 = document.createDocumentFragment();
const frangmento2 = document.createDocumentFragment();
const carrusel = document.querySelector('.plantilla-carrusel').content;
const tarjeta = document.querySelector('.plantilla-tarjeta').content;
const tarjetas = document.querySelector('#acum-tarjetas');
const division = document.querySelector('#cont-carrusel');
const usuario = document.querySelector('.navbar-nav');

document.addEventListener('DOMContentLoaded',() =>{

    if(localStorage.getItem('name')==null||localStorage.getItem('lastname')==null||localStorage.getItem('name')==''||localStorage.getItem('lastname')==''){
        usuario.querySelector('h3').textContent = "Registrate";
    }else{
        usuario.querySelector('h3').textContent = `Bienvenido ${localStorage.getItem('name')} ${localStorage.getItem('lastname')}`;
    }

    let primerClase = false;
    animeData.forEach( anime => {

        let{id,nombre, genero, descripción, imagen, titulo, video} = anime;

        carrusel.querySelector('img').setAttribute('src',imagen);
        if(!primerClase){
            carrusel.querySelector('#contenedor').setAttribute('class','carousel-item active');
            primerClase = true;
        }else{
            carrusel.querySelector('#contenedor').setAttribute('class','carousel-item');
        }
        tarjeta.querySelector('.card-img-top').setAttribute('src',imagen);
        tarjeta.querySelector('.tituloimg').setAttribute('src',titulo);

        let iden = "#s"+id;
        tarjeta.querySelector('#abrir').setAttribute('data-bs-target',iden);

        let unico = "s"+id;
        tarjeta.querySelector('.modal').setAttribute('id',unico);
        tarjeta.querySelector('iframe').setAttribute('src',video);
        tarjeta.querySelector('.modal-title').textContent = nombre;
        tarjeta.querySelector('h6').textContent = genero;
        tarjeta.querySelector('p').textContent = descripción;
        const clone = carrusel.cloneNode(true);
        frangmento1.appendChild(clone);

        const clone1 = tarjeta.cloneNode(true);
        frangmento2.appendChild(clone1);

    });

    division.appendChild(frangmento1);
    tarjetas.appendChild(frangmento2);


}); 




