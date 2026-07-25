/* =========================================================
   SERVICES / WHATSAPP-SERVICE.JS
   =========================================================
   Punto único para abrir conversaciones de WhatsApp.

   >>> ESCALABILIDAD: si en el futuro se integra una pasarela
   de pagos, esta es la capa que se reemplazaría (o se
   complementaría) con un servicio de checkout real —
   por ejemplo, abrirCheckout(carrito) en lugar de
   abrirWhatsApp(mensaje). El resto del sitio seguiría
   llamando a un único punto de "confirmar pedido".
   ========================================================= */

function abrirWhatsApp(mensaje, numero = NEGOCIO.whatsappPrincipal){
  window.open(urlWhatsApp(numero, mensaje), "_blank");
}
