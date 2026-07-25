/* =========================================================
   PRODUCTO.JS — página de detalle de un producto
   ========================================================= */

function crearTarjetaRelacionada(producto){
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
          <div class="product-price">${formatearPrecio(producto.precio)}</div>
          <button class="btn-add-cart" ${agotado ? "disabled" : ""} data-add-to-cart="${producto.id}">
            <i class="bi bi-bag-plus"></i> ${agotado ? "Agotado" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderizarDetalle(producto){
  const agotado = producto.disponibilidad === "Agotado";

  document.title = `${producto.nombre} · Los Retoñitos`;

  document.getElementById("breadcrumb-producto").innerHTML = `
    <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
    <li class="breadcrumb-item"><a href="catalogo.html">Productos</a></li>
    <li class="breadcrumb-item"><a href="catalogo.html?categoria=${producto.categoria}">${nombreCategoria(producto.categoria)}</a></li>
    <li class="breadcrumb-item active" aria-current="page">${producto.nombre}</li>
  `;

  const miniaturas = producto.imagenes.map((img, i) => `
    <div class="col-3">
      <img src="${img}" alt="Vista ${i + 1} de ${producto.nombre}" class="${i === 0 ? "active" : ""}" data-thumb="${i}">
    </div>
  `).join("");

  document.getElementById("detalle-producto").innerHTML = `
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <div class="gallery-main mb-3">
            <img src="${producto.imagenes[0]}" alt="${producto.nombre}" id="imagen-principal">
          </div>
          <div class="row g-2 gallery-thumbs">
            ${miniaturas}
          </div>
        </div>
        <div class="col-lg-6">
          <span class="product-card-cat position-static d-inline-block mb-2">${nombreCategoria(producto.categoria)}</span>
          <h1 class="h2 mb-2">${producto.nombre}</h1>
          <div class="stock-pill ${agotado ? "out" : ""} mb-3">
            <span class="dot"></span> ${producto.disponibilidad}
          </div>
          <div class="product-price mb-3" style="font-size:1.7rem;">
            ${formatearPrecio(producto.precio)}
            ${producto.precioAnterior ? `<span class="old">${formatearPrecio(producto.precioAnterior)}</span>` : ""}
          </div>
          <p class="text-ink-soft">${producto.descripcion}</p>

          <div class="my-4">
            <div class="spec-row"><span>Categoría</span><span>${nombreCategoria(producto.categoria)}</span></div>
            <div class="spec-row"><span>Edad recomendada</span><span>${producto.edad}</span></div>
            <div class="spec-row"><span>Material</span><span>${producto.material}</span></div>
            <div class="spec-row"><span>Disponibilidad</span><span>${producto.disponibilidad}</span></div>
          </div>

          <div class="d-flex flex-wrap align-items-center gap-3">
            <div class="qty-selector">
              <button type="button" id="qty-menos" aria-label="Disminuir cantidad">−</button>
              <input type="number" id="qty-input" value="1" min="1" max="20" aria-label="Cantidad">
              <button type="button" id="qty-mas" aria-label="Aumentar cantidad">+</button>
            </div>
            <button class="btn btn-brand btn-lg flex-grow-1" id="btn-agregar-detalle" ${agotado ? "disabled" : ""} style="min-width:220px;">
              <i class="bi bi-bag-plus"></i> ${agotado ? "Producto agotado" : "Agregar al carrito"}
            </button>
          </div>

          <a href="${urlWhatsApp(NEGOCIO.whatsappPrincipal, "Hola, quisiera más información sobre: " + producto.nombre)}" target="_blank" rel="noopener" class="btn btn-whatsapp w-100 mt-3">
            <i class="bi bi-whatsapp"></i> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  // Galería: cambiar imagen principal al hacer clic en una miniatura
  document.querySelectorAll("[data-thumb]").forEach(thumb => {
    thumb.addEventListener("click", () => {
      document.getElementById("imagen-principal").src = thumb.src;
      document.querySelectorAll("[data-thumb]").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // Selector de cantidad
  const qtyInput = document.getElementById("qty-input");
  document.getElementById("qty-menos").addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
  });
  document.getElementById("qty-mas").addEventListener("click", () => {
    qtyInput.value = Math.min(20, Number(qtyInput.value) + 1);
  });

  // Agregar al carrito con la cantidad seleccionada
  const btnAgregar = document.getElementById("btn-agregar-detalle");
  if (btnAgregar && !agotado){
    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto.id, Number(qtyInput.value));
      const original = btnAgregar.innerHTML;
      btnAgregar.innerHTML = '<i class="bi bi-check2"></i> Agregado al carrito';
      setTimeout(() => { btnAgregar.innerHTML = original; }, 1500);
    });
  }

  // Relacionados: misma categoría, excluyendo el producto actual
  const relacionados = productosPorCategoria(producto.categoria, producto.id).slice(0, 4);
  const grid = document.getElementById("grid-relacionados");
  grid.innerHTML = relacionados.length
    ? relacionados.map(crearTarjetaRelacionada).join("")
    : `<p class="text-ink-soft">Aún no hay más productos en esta categoría.</p>`;
  inicializarBotonesAgregar(grid);
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const producto = obtenerProductoPorId(id) || PRODUCTOS[0];
  renderizarDetalle(producto);
  inicializarBusquedaHeader();
});
