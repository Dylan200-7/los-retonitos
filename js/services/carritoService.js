/* =========================================================
   SERVICES / CARRITO-SERVICE.JS
   =========================================================
   Encapsula TODO el acceso al carrito de compras.

   >>> ESCALABILIDAD: hoy el "almacenamiento" es localStorage
   (carrito por navegador, sin cuentas de usuario). El día que
   el proyecto tenga autenticación y base de datos, solo hay
   que reescribir las funciones de esta sección (leerCarrito /
   guardarCarrito) para que hagan fetch() a una API tipo
   GET/POST /api/carrito — las páginas que llaman a
   agregarAlCarrito(), actualizarCantidad(), etc. no cambian.
   ========================================================= */

const CART_KEY = "retonitos_carrito";

function leerCarrito(){
  try{
    const data = JSON.parse(localStorage.getItem(CART_KEY));
    return Array.isArray(data) ? data : [];
  }catch(e){
    return [];
  }
}

function guardarCarrito(carrito){
  localStorage.setItem(CART_KEY, JSON.stringify(carrito));
  actualizarBadgeCarrito();
}

function agregarAlCarrito(idProducto, cantidad = 1){
  const carrito = leerCarrito();
  const existente = carrito.find(item => item.id === idProducto);
  if (existente){
    existente.cantidad += cantidad;
  } else {
    carrito.push({ id: idProducto, cantidad });
  }
  guardarCarrito(carrito);
}

function actualizarCantidad(idProducto, cantidad){
  let carrito = leerCarrito();
  if (cantidad <= 0){
    carrito = carrito.filter(item => item.id !== idProducto);
  } else {
    const item = carrito.find(item => item.id === idProducto);
    if (item) item.cantidad = cantidad;
  }
  guardarCarrito(carrito);
}

function quitarDelCarrito(idProducto){
  const carrito = leerCarrito().filter(item => item.id !== idProducto);
  guardarCarrito(carrito);
}

function totalItemsCarrito(){
  return leerCarrito().reduce((total, item) => total + item.cantidad, 0);
}

function actualizarBadgeCarrito(){
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const total = totalItemsCarrito();
    el.textContent = total;
    el.style.display = total > 0 ? "flex" : "none";
  });
}

/* ---------- Botón "agregar al carrito" con feedback visual ---------- */
/* Reutilizado por home.js, catalogo.js y producto.js */

function inicializarBotonesAgregar(contenedor = document){
  contenedor.querySelectorAll("[data-add-to-cart]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = Number(btn.getAttribute("data-add-to-cart"));
      const cantidad = Number(btn.getAttribute("data-qty") || 1);
      agregarAlCarrito(id, cantidad);

      const textoOriginal = btn.innerHTML;
      btn.classList.add("added");
      btn.innerHTML = '<i class="bi bi-check2"></i> Agregado';
      setTimeout(() => {
        btn.classList.remove("added");
        btn.innerHTML = textoOriginal;
      }, 1300);
    });
  });
}
