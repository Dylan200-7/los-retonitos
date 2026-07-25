/* =========================================================
   CONFIG.JS — Información central del negocio
   =========================================================
   Toda la información de la tienda vive AQUÍ. Si necesitas
   actualizar el nombre, dirección, WhatsApp, redes sociales,
   etc. este es el ÚNICO archivo que debes tocar: el resto del
   sitio lee estos datos, no los repite.

   >>> ESCALABILIDAD: cuando este catálogo evolucione a un
   sistema con backend (panel de administración, base de
   datos, login de usuarios, pasarela de pagos), este archivo
   se convierte naturalmente en la configuración de entorno
   (variables .env / tabla "configuracion" en la BD). El resto
   del código (services/, data/) ya está preparado para leer
   esos valores desde una fuente distinta sin tener que
   reescribir las páginas.
   ========================================================= */

const NEGOCIO = {
  nombre: "LOS RETOÑITOS",
  eslogan: "El Mundo de las Láminas",
  descripcionCorta: "Materiales educativos, juegos didácticos y material escolar para todas las edades.",

  // TODO (reemplazar): logo real de la tienda.
  // Mientras tanto se usa un marcador de posición con las iniciales.
  logoIniciales: "LR",
  logoUrl: null, // Cuando tengas el archivo del logo, coloca aquí su ruta (ej. "img/logo.png")

  // --- Contacto ---
  whatsappPrincipal: "51987611863", // 987 611 863 (formato internacional sin +)
  whatsappSecundario: "51992321037", // 992 321 037
  correo: "contacto@losretonitos.pe", // TODO (reemplazar): correo real de la tienda

  direccion: {
    stand: "Stand D22",
    referencia: "Cámara Popular de Libreros del Perú",
    calle: "Jr. Amazonas N° 401",
    zona: "Alt. Puente Balta - Esq. con Andahuaylas",
    ciudad: "Lima, Perú",
  },

  horario: "Lunes a sábado, 9:00 am – 7:00 pm", // TODO (confirmar horario real)

  // TODO (reemplazar): enlaces reales a redes sociales
  redes: {
    facebook: "#",
    instagram: "#",
  },

  // Mensaje de bienvenida usado como base para las conversaciones de WhatsApp
  mensajeWhatsappGenerico: "Hola, vi su catálogo web y quisiera más información.",
};

/* ---------- Utilidades de contacto reutilizables ---------- */

function urlWhatsApp(numero, mensaje){
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

function direccionCompleta(){
  const d = NEGOCIO.direccion;
  return `${d.referencia}, ${d.calle}, ${d.zona}`;
}
