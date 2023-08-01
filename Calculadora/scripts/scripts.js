const resultado = document.querySelector("span");
const botones = document.querySelectorAll(".btn")

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPresionado = boton.textContent;
        if (resultado.textContent === "0"){
            resultado.textContent = botonPresionado
        }else {
            resultado.textContent += botonPresionado
        }
    })
})