/* =========================================================
   UI / HEADER.JS
   =========================================================
   Comportamiento de interfaz compartido por TODAS las páginas:
   - Marcar el enlace de navegación activo según data-page
   - Cerrar el menú móvil (offcanvas) al elegir una opción
   - Redirigir la barra de búsqueda del header hacia el catálogo
     (o filtrar en el propio catálogo si ya estamos en él)
   ========================================================= */

function marcarEnlaceActivo(){
  const pagina = document.body.getAttribute("data-page");
  if (!pagina) return;
  document.querySelectorAll(`[data-nav="${pagina}"]`).forEach(el => {
    el.classList.add("active");
  });
}

function inicializarMenuMovil(){
  document.querySelectorAll(".offcanvas .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const offcanvasEl = link.closest(".offcanvas");
      if (offcanvasEl && window.bootstrap){
        const instancia = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (instancia) instancia.hide();
      }
    });
  });
}

// Por defecto, la búsqueda del header lleva al catálogo con el término escrito.
// catalogo.js sobreescribe este comportamiento para filtrar en la misma página.
function inicializarBusquedaHeader(){
  document.querySelectorAll("[data-search-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valor = form.querySelector("[data-search-input]").value.trim();
      window.location.href = "catalogo.html" + (valor ? `?buscar=${encodeURIComponent(valor)}` : "");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarBadgeCarrito();
  marcarEnlaceActivo();
  inicializarMenuMovil();
  // Nota: la búsqueda del header se conecta desde cada página (home.js,
  // producto.js, carrito.js, paginas.js) porque catalogo.js necesita un
  // comportamiento distinto (filtrar en la misma página en vez de redirigir).
});
