

const boton = document.querySelector('#enviar');
const usuario = document.querySelector('.navbar-nav');

boton.addEventListener('click',e =>{
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('tel').value;
    let direccion = document.getElementById('direccion').value;
    let observaciones = document.getElementById('obs').value;
    localStorage.setItem("name", nombre);
    localStorage.setItem("lastname", apellido);
    localStorage.setItem("adress", direccion);
    localStorage.setItem("celphone", telefono);
    localStorage.setItem("obs", observaciones);

    console.log(localStorage.getItem('name'));
})

document.addEventListener('DOMContentLoaded',()=>{

    if(localStorage.getItem('name')==null||localStorage.getItem('lastname')==null||localStorage.getItem('name')==''||localStorage.getItem('lastname')==''){
        usuario.querySelector('h3').textContent = "Registrate";
    }else{
        usuario.querySelector('h3').textContent = `Bienvenido ${localStorage.getItem('name')} ${localStorage.getItem('lastname')}`;
    }
})