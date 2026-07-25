/* =========================================================
   CATALOGO.JS — filtros, búsqueda, orden y render de productos
   ========================================================= */

let vistaActual = "grid";

function leerParametrosURL(){
  return new URLSearchParams(window.location.search);
}

function pintarFiltroCategorias(categoriaSeleccionada){
  const contenedor = document.getElementById("filtro-categorias");
  contenedor.innerHTML = CATEGORIAS.map(cat => `
    <div class="form-check">
      <input class="form-check-input filtro-categoria" type="checkbox" value="${cat.id}" id="cat-${cat.id}" ${categoriaSeleccionada === cat.id ? "checked" : ""}>
      <label class="form-check-label small" for="cat-${cat.id}">${cat.nombre}</label>
    </div>
  `).join("");
}

function crearTarjetaGrid(producto){
  const agotado = producto.disponibilidad === "Agotado";
  return `
    <div class="col-6 col-md-4 col-xl-3">
      <div class="product-card">
        <a href="producto.html?id=${producto.id}" class="text-decoration-none">
          <div class="product-card-img">
            <span class="product-card-cat">${nombreCategoria(producto.categoria)}</span>
            <img src="${producto.imagenes[0]}" alt="${producto.nombre}" loading="lazy">
          </div>
        </a>
        <div class="product-card-body">
          <a href="producto.html?id=${producto.id}" class="text-decoration-none text-reset">
            <h3>${producto.nombre}</h3>
          </a>
          <div class="product-price">
            ${formatearPrecio(producto.precio)}
            ${producto.precioAnterior ? `<span class="old">${formatearPrecio(producto.precioAnterior)}</span>` : ""}
          </div>
          <button class="btn-add-cart" ${agotado ? "disabled" : ""} data-add-to-cart="${producto.id}">
            <i class="bi bi-bag-plus"></i> ${agotado ? "Agotado" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  `;
}

function crearFilaLista(producto){
  const agotado = producto.disponibilidad === "Agotado";
  return `
    <div class="col-12">
      <div class="product-list-row">
        <a href="producto.html?id=${producto.id}">
          <img src="${producto.imagenes[0]}" alt="${producto.nombre}" loading="lazy">
        </a>
        <div class="flex-grow-1">
          <span class="product-card-cat position-static d-inline-block mb-1">${nombreCategoria(producto.categoria)}</span>
          <a href="producto.html?id=${producto.id}" class="text-decoration-none text-reset d-block">
            <h3 class="mb-1" style="min-height:auto;">${producto.nombre}</h3>
          </a>
          <p class="text-ink-soft small mb-2 d-none d-md-block">${producto.descripcion.slice(0, 110)}...</p>
          <div class="product-price mb-0">${formatearPrecio(producto.precio)}</div>
        </div>
        <div class="d-flex flex-column align-items-stretch gap-2" style="min-width:160px;">
          <button class="btn-add-cart" ${agotado ? "disabled" : ""} data-add-to-cart="${producto.id}">
            <i class="bi bi-bag-plus"></i> ${agotado ? "Agotado" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  `;
}

function obtenerFiltrosActivos(){
  const categorias = Array.from(document.querySelectorAll(".filtro-categoria:checked")).map(el => el.value);
  const texto = document.getElementById("filtro-buscar").value.trim().toLowerCase();
  const min = parseFloat(document.getElementById("precio-min").value);
  const max = parseFloat(document.getElementById("precio-max").value);
  const orden = document.getElementById("orden-select").value;
  return { categorias, texto, min, max, orden };
}

function aplicarFiltros(){
  const { categorias, texto, min, max, orden } = obtenerFiltrosActivos();

  let resultado = PRODUCTOS.filter(p => {
    if (categorias.length && !categorias.includes(p.categoria)) return false;
    if (texto && !p.nombre.toLowerCase().includes(texto)) return false;
    if (!isNaN(min) && p.precio < min) return false;
    if (!isNaN(max) && p.precio > max) return false;
    return true;
  });

  switch(orden){
    case "menor-precio":
      resultado.sort((a, b) => a.precio - b.precio);
      break;
    case "mayor-precio":
      resultado.sort((a, b) => b.precio - a.precio);
      break;
    case "mas-vendidos":
      resultado.sort((a, b) => (b.masVendido === true) - (a.masVendido === true));
      break;
    default: // recientes
      resultado.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }

  renderizarResultados(resultado);
}

function renderizarResultados(lista){
  const grid = document.getElementById("grid-catalogo");
  const vacio = document.getElementById("estado-vacio");
  const contador = document.getElementById("contador-resultados");

  contador.textContent = lista.length === 1
    ? "1 producto encontrado"
    : `${lista.length} productos encontrados`;

  if (lista.length === 0){
    grid.innerHTML = "";
    vacio.classList.remove("d-none");
    return;
  }
  vacio.classList.add("d-none");

  grid.innerHTML = lista.map(p => vistaActual === "grid" ? crearTarjetaGrid(p) : crearFilaLista(p)).join("");
  inicializarBotonesAgregar(grid);
}

function cambiarVista(nuevaVista){
  vistaActual = nuevaVista;
  document.getElementById("vista-grid").classList.toggle("active", nuevaVista === "grid");
  document.getElementById("vista-lista").classList.toggle("active", nuevaVista === "lista");
  aplicarFiltros();
}

document.addEventListener("DOMContentLoaded", () => {
  const params = leerParametrosURL();
  const categoriaURL = params.get("categoria");
  const busquedaURL = params.get("buscar");

  pintarFiltroCategorias(categoriaURL);

  if (busquedaURL){
    document.getElementById("filtro-buscar").value = busquedaURL;
  }

  aplicarFiltros();

  // Eventos de filtros
  document.getElementById("filtro-buscar").addEventListener("input", aplicarFiltros);
  document.getElementById("precio-min").addEventListener("input", aplicarFiltros);
  document.getElementById("precio-max").addEventListener("input", aplicarFiltros);
  document.getElementById("orden-select").addEventListener("change", aplicarFiltros);
  document.getElementById("filtro-categorias").addEventListener("change", aplicarFiltros);

  document.getElementById("btn-limpiar-filtros").addEventListener("click", () => {
    document.getElementById("filtro-buscar").value = "";
    document.getElementById("precio-min").value = "";
    document.getElementById("precio-max").value = "";
    document.getElementById("orden-select").value = "recientes";
    document.querySelectorAll(".filtro-categoria").forEach(el => el.checked = false);
    aplicarFiltros();
  });

  document.getElementById("vista-grid").addEventListener("click", () => cambiarVista("grid"));
  document.getElementById("vista-lista").addEventListener("click", () => cambiarVista("lista"));

  // Búsqueda del header también filtra dentro del catálogo
  document.querySelectorAll("[data-search-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valor = form.querySelector("[data-search-input]").value.trim();
      document.getElementById("filtro-buscar").value = valor;
      aplicarFiltros();
    });
  });
});
