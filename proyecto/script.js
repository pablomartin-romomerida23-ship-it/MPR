console.log("Proyecto ASIR cargado correctamente");

const elementos = document.querySelectorAll("img, p, h2, video");

function mostrarElementos() {

    const alturaPantalla = window.innerHeight;

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 100) {
            elemento.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);

const botonSubir = document.createElement("button");

botonSubir.innerHTML = "⬆";
botonSubir.id = "btnSubir";

document.body.appendChild(botonSubir);

botonSubir.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
});

const imagenes = document.querySelectorAll("img");

imagenes.forEach(imagen => {

    imagen.addEventListener("mouseover", () => {

        imagen.style.transform = "scale(1.03)";
        imagen.style.transition = "0.3s";
    });

    imagen.addEventListener("mouseout", () => {

        imagen.style.transform = "scale(1)";
    });
});

const footer = document.querySelector("footer p");

function actualizarHora() {

    const fecha = new Date();

    footer.innerHTML = `Proyecto ASIR - ${fecha.toLocaleString()}`;
}

setInterval(actualizarHora, 1000);

actualizarHora();