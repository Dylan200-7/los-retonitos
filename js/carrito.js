/* =========================================================
   CARRITO.JS — render del carrito, totales y envío por WhatsApp
   ========================================================= */

const COSTO_ENVIO = 12.00; // Envío simulado — reemplazar por el cálculo real

function renderizarCarritoVacio(){
  document.getElementById("carrito-contenido").innerHTML = `
    <div class="cart-empty">
      <div class="icon-pill bg-tint-blue mx-auto"><i class="bi bi-cart-x"></i></div>
      <h2 class="h5">Tu carrito está vacío</h2>
      <p class="text-ink-soft">Aún no has agregado productos. Explora el catálogo y encuentra el material ideal.</p>
      <a href="catalogo.html" class="btn btn-brand">Ver productos</a>
    </div>
  `;
}

function crearFilaCarrito(item, producto){
  const subtotal = producto.precio * item.cantidad;
  return `
    <div class="cart-row" data-row="${producto.id}">
      <a href="producto.html?id=${producto.id}">
        <img src="${producto.imagenes[0]}" alt="${producto.nombre}">
      </a>
      <div class="flex-grow-1">
        <a href="producto.html?id=${producto.id}" class="text-reset text-decoration-none">
          <h3 class="h6 mb-1">${producto.nombre}</h3>
        </a>
        <span class="text-ink-soft small d-block mb-2">${nombreCategoria(producto.categoria)}</span>
        <div class="qty-selector">
          <button type="button" class="btn-menos" data-id="${producto.id}" aria-label="Disminuir cantidad">−</button>
          <input type="number" class="cantidad-input" data-id="${producto.id}" value="${item.cantidad}" min="1" max="20" aria-label="Cantidad">
          <button type="button" class="btn-mas" data-id="${producto.id}" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>
      <div class="text-end">
        <div class="product-price mb-2" data-subtotal="${producto.id}">${formatearPrecio(subtotal)}</div>
        <button class="remove-btn" data-remove="${producto.id}" aria-label="Quitar producto">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  `;
}

function calcularTotales(){
  const carrito = leerCarrito();
  let subtotal = 0;
  carrito.forEach(item => {
    const producto = obtenerProductoPorId(item.id);
    if (producto) subtotal += producto.precio * item.cantidad;
  });
  const envio = subtotal > 0 ? COSTO_ENVIO : 0;
  return { subtotal, envio, total: subtotal + envio };
}

function construirMensajeWhatsApp(){
  const carrito = leerCarrito();
  const { subtotal, envio, total } = calcularTotales();

  let lineas = ["¡Hola! Quisiera hacer el siguiente pedido:", ""];
  carrito.forEach(item => {
    const producto = obtenerProductoPorId(item.id);
    if (!producto) return;
    lineas.push(`• ${producto.nombre} x${item.cantidad} — ${formatearPrecio(producto.precio * item.cantidad)}`);
  });
  lineas.push("");
  lineas.push(`Subtotal: ${formatearPrecio(subtotal)}`);
  lineas.push(`Envío: ${formatearPrecio(envio)}`);
  lineas.push(`Total: ${formatearPrecio(total)}`);
  lineas.push("");
  lineas.push("Quedo atento(a) para coordinar el pago y la entrega. ¡Gracias!");

  return lineas.join("\n");
}

function renderizarCarrito(){
  const carrito = leerCarrito();

  if (carrito.length === 0){
    renderizarCarritoVacio();
    return;
  }

  const filas = carrito.map(item => {
    const producto = obtenerProductoPorId(item.id);
    return producto ? crearFilaCarrito(item, producto) : "";
  }).join("");

  const { subtotal, envio, total } = calcularTotales();

  document.getElementById("carrito-contenido").innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        <div class="d-flex flex-column gap-3" id="lista-carrito">
          ${filas}
        </div>
      </div>
      <div class="col-lg-4">
        <div class="summary-card">
          <h2 class="h5 mb-3">Resumen del pedido</h2>
          <div class="summary-row"><span>Subtotal</span><span id="resumen-subtotal">${formatearPrecio(subtotal)}</span></div>
          <div class="summary-row"><span>Envío (referencial)</span><span id="resumen-envio">${formatearPrecio(envio)}</span></div>
          <div class="summary-row summary-total"><span>Total</span><span id="resumen-total">${formatearPrecio(total)}</span></div>
          <button class="btn btn-whatsapp w-100 mt-3 btn-lg" id="btn-enviar-pedido">
            <i class="bi bi-whatsapp"></i> Enviar pedido por WhatsApp
          </button>
          <a href="catalogo.html" class="btn btn-brand-outline w-100 mt-2">
            <i class="bi bi-arrow-left"></i> Seguir explorando
          </a>
          <p class="text-ink-soft small mt-3 mb-0">
            <i class="bi bi-info-circle me-1"></i> El costo de envío es referencial y se confirma directamente por WhatsApp según tu ubicación.
          </p>
        </div>
      </div>
    </div>
  `;

  vincularEventosCarrito();
}

function vincularEventosCarrito(){
  document.querySelectorAll(".btn-menos").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const carrito = leerCarrito();
      const item = carrito.find(i => i.id === id);
      if (item) actualizarCantidad(id, item.cantidad - 1);
      renderizarCarrito();
    });
  });

  document.querySelectorAll(".btn-mas").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const carrito = leerCarrito();
      const item = carrito.find(i => i.id === id);
      if (item) actualizarCantidad(id, Math.min(20, item.cantidad + 1));
      renderizarCarrito();
    });
  });

  document.querySelectorAll(".cantidad-input").forEach(input => {
    input.addEventListener("change", () => {
      const id = Number(input.dataset.id);
      const valor = Math.max(1, Math.min(20, Number(input.value) || 1));
      actualizarCantidad(id, valor);
      renderizarCarrito();
    });
  });

  document.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      quitarDelCarrito(Number(btn.dataset.remove));
      renderizarCarrito();
    });
  });

  const btnEnviar = document.getElementById("btn-enviar-pedido");
  if (btnEnviar){
    btnEnviar.addEventListener("click", () => {
      abrirWhatsApp(construirMensajeWhatsApp());
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
  inicializarBusquedaHeader();
});
