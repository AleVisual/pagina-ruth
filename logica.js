document.addEventListener("DOMContentLoaded", () => {
  const bienvenida = document.getElementById("bienvenida");

  // Solo mostramos la bienvenida si no fue mostrada en esta sesión
  if (!sessionStorage.getItem("bienvenidaMostrada")) {
    // Mostrar el contenedor tras 100ms para asegurarnos que se pinta
    setTimeout(() => {
      bienvenida.style.display = "flex";

      // Un poco después, activar la animación de opacidad
      setTimeout(() => {
        bienvenida.classList.add("visible");
      }, 100);

      // Ocultarlo luego de unos segundos
      setTimeout(() => {
        bienvenida.classList.remove("visible");

        // Esperamos la transición de salida antes de eliminar
        setTimeout(() => {
          bienvenida.remove();
        }, 1500);
      }, 5000); // mostrar por 5 segundos

      // Marcamos como mostrada esta sesión
      sessionStorage.setItem("bienvenidaMostrada", "true");
    }, 100);
  } else {
    // Si ya se mostró, directamente la quitamos por si quedó
    if (bienvenida) {
      bienvenida.remove();
    }
  }
});

    // --- LIGHTBOX PARA IMÁGENES ---
  document.querySelectorAll(".imagen-lightbox").forEach(enlace => {
    enlace.addEventListener("click", e => {
      e.preventDefault();
      const imagenGrande = document.createElement("div");
      imagenGrande.classList.add("lightbox-overlay");
      imagenGrande.innerHTML = `<img src="${enlace.href}" alt=""><span style="position:absolute;top:20px;right:30px;font-size:30px;color:white;cursor:pointer;">&times;</span>`;
      document.body.appendChild(imagenGrande);

      imagenGrande.addEventListener("click", () => {
        imagenGrande.remove();
      });
    });
  });

  // Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario-comentario");
  const notificacion = document.getElementById("notificacion-enviada");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita redirección

    const datos = new FormData(formulario);

    fetch("https://formsubmit.co/minidonapetit@outlook.com", {
      method: "POST",
      body: datos
    })
    .then(response => {
      if (response.ok) {
        notificacion.classList.remove("oculto");
        formulario.reset();

        // Ocultamos la notificación después de 5 segundos
        setTimeout(() => {
          notificacion.classList.add("oculto");
        }, 5000);
      } else {
        alert("Hubo un error al enviar tu mensaje. Intentá de nuevo.");
      }
    })
    .catch(() => {
      alert("Error de conexión. Por favor, revisá tu internet.");
    });
  });
});

// --- LIGHTBOX PARA IMÁGENES ---
document.querySelectorAll(".imagen-lightbox-chocolates").forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();
    const imagenGrande = document.createElement("div");
    imagenGrande.classList.add("lightbox-overlay");
    imagenGrande.innerHTML = `<img src="${enlace.href}" alt=""><span style="position:absolute;top:20px;right:30px;font-size:30px;color:white;cursor:pointer;">&times;</span>`;
    document.body.appendChild(imagenGrande);

    imagenGrande.addEventListener("click", () => {
      imagenGrande.remove();
    });
  });
});



  
  
