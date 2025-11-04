const usuarios = [];

const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');

form.addEventListener('submit',function(e){

    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

    const nuevoUsuario={
        nombre: nombre,
        correo: correo
    };

    usuarios.push(nuevoUsuario);

   salida.textContent = JSON.stringify(usuarios,null,2);
   
   form.reset();

});