// getElementById o querySelector
let titulo = document.querySelector("h1");

// textContent o innerHTML
titulo.textContent = "Hola mundo";

let pagina = document.querySelector("html");
// pagina.() = alert('no me presiones')ç


function presionar() {
  let presionado = document.querySelector('p')
  presionado.textContent = "Porque no haces caso"
}

function saludar() {
  alert('Holas');
}

let boton = document.getElementById('miBoton');
boton.addEventListener('click', saludar);


setTimeout(
  function() {
      alert('Por fin');
  }, 2000
);