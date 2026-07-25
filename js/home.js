/* =========================================================
   HOME.JS — lógica exclusiva de la página de Inicio
   ========================================================= */

function crearTarjetaProducto(producto){
  const agotado = producto.disponibilidad === "Agotado";
  return `
    <div class="col-6 col-md-4 col-lg-3">
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

// Sección "¿Qué encontrarás en Los Retoñitos?" — tarjetas con imagen representativa
function crearTarjetaCategoriaDestacada(categoria){
  return `
    <div class="col-6 col-md-4 col-lg-3">
      <a href="catalogo.html?categoria=${categoria.id}" class="text-decoration-none">
        <div class="highlight-card">
          <div class="highlight-card-img">
            <img src="${categoria.imagen}" alt="${categoria.nombre}" loading="lazy">
            <div class="highlight-card-icon ${categoria.color}"><i class="${categoria.icono}"></i></div>
          </div>
          <h3>${categoria.nombre}</h3>
        </div>
      </a>
    </div>
  `;
}

// Vitrina de Láminas Educativas — imágenes grandes (producto insignia de la tienda)
function crearTarjetaLamina(producto){
  return `
    <div class="col-6 col-md-4 col-lg-3">
      <a href="producto.html?id=${producto.id}" class="text-decoration-none">
        <div class="lamina-showcase-card">
          <img src="${producto.imagenes[0]}" alt="${producto.nombre}" loading="lazy">
          <div class="lamina-showcase-caption">
            <span>${producto.nombre}</span>
            <strong>${formatearPrecio(producto.precio)}</strong>
          </div>
        </div>
      </a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {

  // Productos destacados (mínimo 12, distribuidos entre categorías)
  const grid = document.getElementById("grid-destacados");
  if (grid){
    const destacados = PRODUCTOS.filter(p => p.destacado).slice(0, 12);
    grid.innerHTML = destacados.map(crearTarjetaProducto).join("");
    inicializarBotonesAgregar(grid);
  }

  // "¿Qué encontrarás en Los Retoñitos?"
  const gridDestacadasCategorias = document.getElementById("grid-categorias-destacadas");
  if (gridDestacadasCategorias){
    const categorias = CATEGORIAS_DESTACADAS_HOME.map(obtenerCategoria).filter(Boolean);
    gridDestacadasCategorias.innerHTML = categorias.map(crearTarjetaCategoriaDestacada).join("");
  }

  // Vitrina de Láminas Educativas
  const gridLaminas = document.getElementById("grid-laminas");
  if (gridLaminas){
    const laminas = productosPorCategoria("laminas-educativas").slice(0, 8);
    gridLaminas.innerHTML = laminas.map(crearTarjetaLamina).join("");
  }

  inicializarBusquedaHeader();
});
