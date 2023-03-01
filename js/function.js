
function miFuncion() {
  alert("Para mas información llenar el formulario inferior "); 
}

const miFormulario = document.getElementById('miFormulario');

miFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const nombre = document.getElementById('Nombre').value;
  const email = document.getElementById('E-mail').value;
  const mensaje = document.getElementById('mensaje').value;

  alert(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
});


