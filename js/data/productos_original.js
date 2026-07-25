/* =========================================================
   DATA / PRODUCTOS.JS
   =========================================================
   Catálogo de productos de ejemplo para LOS RETOÑITOS.
   TODO (reemplazar): nombres, precios, descripciones e
   imágenes reales de cada producto cuando estén disponibles.

   >>> ESCALABILIDAD: al igual que categorias.js, este arreglo
   simula la respuesta de un futuro GET /api/productos. Los
   campos ya están pensados para un modelo de base de datos
   relacional (id, categoria como llave foránea, stock,
   fechaCreacion) para que la migración a un backend real con
   panel de administración no requiera cambiar el "shape" de
   los datos, solo su origen.
   ========================================================= */

const PRODUCTOS = [

  /* ---------------------------------------------------------
     LÁMINAS EDUCATIVAS
     Producto insignia de la tienda ("El Mundo de las Láminas").
     TODO (reemplazar): fotos reales de cada lámina 50x70.
     --------------------------------------------------------- */
  {
    id: 1,
    nombre: "Lámina del Cuerpo Humano",
    categoria: "laminas-educativas",
    precio: 12.00,
    edad: "6 a 14 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-28",
    descripcion: "Lámina educativa grande (50x70) con la anatomía del cuerpo humano: sistemas óseo, muscular y órganos principales, ideal para tareas y exposiciones escolares.",
    imagenes: [
      "https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+Cuerpo+Humano",
      "https://placehold.co/700x700/FF9F6E/FFFFFF?text=Detalle+1",
    ],
  },
  {
    id: 2,
    nombre: "Lámina de Animales del Mundo",
    categoria: "laminas-educativas",
    precio: 12.00,
    edad: "3 a 10 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-20",
    descripcion: "Lámina ilustrada con animales representativos de distintos continentes, pensada para introducir a los más pequeños en el reino animal.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+Animales"],
  },
  {
    id: 3,
    nombre: "Lámina del Alfabeto Ilustrado",
    categoria: "laminas-educativas",
    precio: 10.00,
    edad: "3 a 6 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: false,
    fecha: "2026-05-30",
    descripcion: "Cada letra del abecedario acompañada de una imagen representativa, perfecta para reforzar el reconocimiento de letras en casa o en el aula.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+Alfabeto"],
  },
  {
    id: 4,
    nombre: "Lámina de Números y Cantidades",
    categoria: "laminas-educativas",
    precio: 10.00,
    edad: "3 a 7 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-05-12",
    descripcion: "Asocia cada número con su cantidad correspondiente mediante ilustraciones simples y coloridas.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+N%C3%BAmeros"],
  },
  {
    id: 5,
    nombre: "Lámina del Sistema Solar",
    categoria: "laminas-educativas",
    precio: 13.00,
    edad: "6 a 14 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-15",
    descripcion: "Representación a escala referencial de los planetas del sistema solar, con datos breves de cada uno. Ideal para proyectos de ciencia.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+Sistema+Solar"],
  },
  {
    id: 6,
    nombre: "Lámina de Geografía del Perú",
    categoria: "laminas-educativas",
    precio: 13.00,
    edad: "7 a 15 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-04-22",
    descripcion: "Mapa físico y político del Perú con sus regiones naturales, ideal para clases de geografía.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+Geograf%C3%ADa"],
  },
  {
    id: 7,
    nombre: "Lámina de Ciencias Naturales",
    categoria: "laminas-educativas",
    precio: 12.00,
    edad: "7 a 14 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-03-10",
    descripcion: "Ciclo de vida de las plantas, ecosistemas y fenómenos naturales explicados con ilustraciones claras.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+Ciencias"],
  },
  {
    id: 8,
    nombre: "Lámina de Tablas de Multiplicar",
    categoria: "laminas-educativas",
    precio: 10.00,
    edad: "7 a 12 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-05",
    descripcion: "Tablas de multiplicar del 1 al 12 presentadas de forma visual para facilitar la memorización.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+Matem%C3%A1tica"],
  },
  {
    id: 9,
    nombre: "Lámina de Historia del Perú",
    categoria: "laminas-educativas",
    precio: 13.00,
    edad: "8 a 15 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-02-18",
    descripcion: "Línea de tiempo con los principales periodos de la historia del Perú, desde las culturas preincas hasta la actualidad.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=L%C3%A1mina+Historia"],
  },

  /* ---------------------------------------------------------
     POSTERS EDUCATIVOS (50x70) — formato afiche
     --------------------------------------------------------- */
  {
    id: 10,
    nombre: "Poster Educativo 50x70 — Esqueleto Humano",
    categoria: "posters-educativos",
    precio: 14.00,
    edad: "8 a 15 años",
    material: "Papel couché 50x70 cm",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-04-05",
    descripcion: "Poster de gran formato con el esqueleto humano detallado, pensado para exposiciones de anatomía.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Poster+Esqueleto"],
  },

  /* ---------------------------------------------------------
     JUEGOS DIDÁCTICOS
     --------------------------------------------------------- */
  {
    id: 11,
    nombre: "Base 10 en Caja",
    categoria: "juegos-didacticos",
    precio: 0.00, // Coloca aquí tu precio de venta
    edad: "5 años a más",
    material: "Plástico",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-07-14",
    descripcion: "Material didáctico para trabajar el sistema decimal y comprender de forma visual las unidades, decenas, centenas y millares.",
    imagenes: [
      "assets/productos/base-10-en-caja.jpg"
    ],
  },
  {
    id: 12,
    nombre: "Ábaco Educativo de Madera",
    categoria: "juegos-didacticos",
    precio: 32.00,
    edad: "5 a 9 años",
    material: "Madera natural",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-04-02",
    descripcion: "Ábaco clásico de 10 filas ideal para introducir operaciones básicas de suma y resta.",
    imagenes: ["https://placehold.co/700x700/2E6F9E/FFFFFF?text=%C3%81baco"],
  },

  /* ---------------------------------------------------------
     LIBROS DIDÁCTICOS
     --------------------------------------------------------- */
  {
    id: 13,
    nombre: "Mi Primer Libro de las Letras",
    categoria: "libros-didacticos",
    precio: 28.50,
    edad: "3 a 5 años",
    material: "Cartoné resistente",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-01",
    descripcion: "Libro interactivo con solapas y texturas para acompañar el reconocimiento del abecedario.",
    imagenes: ["https://placehold.co/700x700/FFC94A/26313A?text=Libro+Letras"],
  },

  /* ---------------------------------------------------------
     LIBROS COQUITO
     --------------------------------------------------------- */
  {
    id: 14,
    nombre: "Coquito — Silabario Tradicional",
    categoria: "libros-coquito",
    precio: 18.00,
    edad: "4 a 6 años",
    material: "Tapa blanda",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-18",
    descripcion: "El clásico Coquito para el aprendizaje de la lectoescritura, con método silábico progresivo.",
    imagenes: ["https://placehold.co/700x700/2E6F9E/FFFFFF?text=Coquito"],
  },

  /* ---------------------------------------------------------
     CUADERNOS DE TRABAJO
     --------------------------------------------------------- */
  {
    id: 15,
    nombre: "Cuaderno de Trabajo — Números y Cantidades",
    categoria: "cuadernos-trabajo",
    precio: 22.90,
    edad: "4 a 6 años",
    material: "Papel bond 90gr",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-03-18",
    descripcion: "Cuaderno con ejercicios progresivos para reforzar el conteo y la escritura de números.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=Cuaderno+N%C3%BAmeros"],
  },

  /* ---------------------------------------------------------
     CALIGRAFÍA
     --------------------------------------------------------- */
  {
    id: 16,
    nombre: "Cuadernillo de Caligrafía — Trazos Iniciales",
    categoria: "caligrafia",
    precio: 12.90,
    edad: "4 a 6 años",
    material: "Papel bond 90gr",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: false,
    fecha: "2026-04-30",
    descripcion: "Ejercicios de trazos, líneas y curvas para preparar la mano antes de la escritura formal.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Caligraf%C3%ADa"],
  },
  {
    id: 17,
    nombre: "Pizarra Mágica de Trazos Reutilizable",
    categoria: "caligrafia",
    precio: 34.90,
    edad: "3 a 7 años",
    material: "PVC + plumón especial",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: true,
    fecha: "2026-03-05",
    descripcion: "Pizarra con guías de trazos que se borran fácilmente para practicar la escritura sin gastar papel.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Pizarra+M%C3%A1gica"],
  },

  /* ---------------------------------------------------------
     CUENTOS INFANTILES
     --------------------------------------------------------- */
  {
    id: 18,
    nombre: "Cuento: El Bosque de las Preguntas",
    categoria: "cuentos-infantiles",
    precio: 24.90,
    edad: "5 a 8 años",
    material: "Tapa blanda",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: false,
    fecha: "2026-05-28",
    descripcion: "Cuento ilustrado que invita a explorar la curiosidad a través de una ardilla que hace preguntas sobre el mundo.",
    imagenes: ["https://placehold.co/700x700/FFC94A/26313A?text=Cuento+Bosque"],
  },

  /* ---------------------------------------------------------
     LIBROS PARA COLOREAR
     --------------------------------------------------------- */
  {
    id: 19,
    nombre: "Libro para Colorear: Animales del Mundo",
    categoria: "libros-colorear",
    precio: 15.90,
    edad: "3 a 10 años",
    material: "Papel bond 75gr",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-10",
    descripcion: "50 láminas para colorear con animales de distintos continentes y datos curiosos de cada especie.",
    imagenes: ["https://placehold.co/700x700/2E6F9E/FFFFFF?text=Colorear+Animales"],
  },

  /* ---------------------------------------------------------
     SOPA DE LETRAS
     --------------------------------------------------------- */
  {
    id: 20,
    nombre: "Cuadernillo de Sopa de Letras",
    categoria: "sopa-letras",
    precio: 9.90,
    edad: "7 a 12 años",
    material: "Papel bond 75gr",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-02-14",
    descripcion: "Sopas de letras de dificultad progresiva para fortalecer vocabulario y concentración.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=Sopa+de+Letras"],
  },

  /* ---------------------------------------------------------
     SUDOKU
     --------------------------------------------------------- */
  {
    id: 21,
    nombre: "Cuadernillo de Sudoku para Niños",
    categoria: "sudoku",
    precio: 9.90,
    edad: "8 a 14 años",
    material: "Papel bond 75gr",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-01-30",
    descripcion: "Retos de sudoku adaptados para introducir la lógica numérica de forma entretenida.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Sudoku"],
  },

  /* ---------------------------------------------------------
     ROMPECABEZAS
     --------------------------------------------------------- */
  {
    id: 22,
    nombre: "Rompecabezas de Animales del Bosque",
    categoria: "rompecabezas",
    precio: 39.90,
    precioAnterior: 49.90,
    edad: "3 a 6 años",
    material: "Madera certificada",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-20",
    descripcion: "Rompecabezas de piezas grandes pensado para las primeras etapas de motricidad fina.",
    imagenes: [
      "https://placehold.co/700x700/FFC94A/26313A?text=Rompecabezas+1",
      "https://placehold.co/700x700/FFC94A/26313A?text=Rompecabezas+2",
    ],
  },
  {
    id: 23,
    nombre: "Rompecabezas del Mapa del Perú",
    categoria: "rompecabezas",
    precio: 36.90,
    edad: "7 a 12 años",
    material: "Madera",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-03-22",
    descripcion: "Cada pieza representa una región del Perú, ideal para aprender geografía jugando.",
    imagenes: ["https://placehold.co/700x700/FFC94A/26313A?text=Rompecabezas+Peru"],
  },

  /* ---------------------------------------------------------
     JUEGOS DE MESA
     --------------------------------------------------------- */
  {
    id: 24,
    nombre: "Juego de Mesa — Bingo Numérico",
    categoria: "juegos-mesa",
    precio: 29.90,
    edad: "5 a 99 años",
    material: "Cartón + fichas",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: false,
    fecha: "2026-05-02",
    descripcion: "Juego de bingo pensado para toda la familia, incluyendo a los abuelitos, para repasar números en compañía.",
    imagenes: ["https://placehold.co/700x700/2E6F9E/FFFFFF?text=Bingo+Num%C3%A9rico"],
  },

  /* ---------------------------------------------------------
     MAQUETAS ESCOLARES (producto terminado / de ejemplo)
     --------------------------------------------------------- */
  {
    id: 25,
    nombre: "Maqueta del Sistema Solar para Armar",
    categoria: "maquetas-escolares",
    precio: 59.90,
    edad: "7 a 12 años",
    material: "Foam + madera",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: false,
    fecha: "2026-06-15",
    descripcion: "Kit completo para armar una maqueta giratoria del sistema solar, con guía paso a paso.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=Maqueta+Sistema+Solar"],
  },
  {
    id: 26,
    nombre: "Maqueta del Ciclo del Agua",
    categoria: "maquetas-escolares",
    precio: 44.90,
    edad: "6 a 11 años",
    material: "Cartón ecológico",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-02-27",
    descripcion: "Modelo tridimensional que representa las etapas del ciclo del agua, ideal para ferias de ciencia.",
    imagenes: ["https://placehold.co/700x700/FF9F6E/FFFFFF?text=Maqueta+Ciclo+Agua"],
  },

  /* ---------------------------------------------------------
     MATERIALES PARA MAQUETAS
     Insumos sueltos para armar maquetas y experimentos escolares.
     TODO (reemplazar): fotos reales de cada insumo.
     --------------------------------------------------------- */
  {
    id: 27,
    nombre: "Tecnopor en Planchas",
    categoria: "materiales-maquetas",
    precio: 6.50,
    edad: "Todas las edades",
    material: "Poliestireno expandido",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-25",
    descripcion: "Planchas de tecnopor en distintos grosores, base indispensable para maquetas escolares.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Tecnopor"],
  },
  {
    id: 28,
    nombre: "Silicona en Barra",
    categoria: "materiales-maquetas",
    precio: 1.50,
    edad: "Todas las edades",
    material: "Silicona termofusible",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: true,
    fecha: "2026-06-25",
    descripcion: "Barras de silicona compatibles con pistolas encoladoras estándar.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Silicona+en+Barra"],
  },
  {
    id: 29,
    nombre: "Pistola de Silicona",
    categoria: "materiales-maquetas",
    precio: 15.90,
    edad: "Uso con supervisión",
    material: "Metal + plástico resistente",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: false,
    fecha: "2026-06-25",
    descripcion: "Pistola encoladora de silicona para acabados firmes en maquetas y manualidades.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Pistola+de+Silicona"],
  },
  {
    id: 30,
    nombre: "Foamy (Fon) Multicolor",
    categoria: "materiales-maquetas",
    precio: 1.20,
    edad: "Todas las edades",
    material: "Goma eva",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-05-20",
    descripcion: "Planchas de foamy en distintos colores para decorar y dar acabado a maquetas.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Foamy"],
  },
  {
    id: 31,
    nombre: "Cartón Corrugado para Maquetas",
    categoria: "materiales-maquetas",
    precio: 3.00,
    edad: "Todas las edades",
    material: "Cartón corrugado",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-04-11",
    descripcion: "Planchas de cartón resistente, ideales como base o estructura de maquetas.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Cart%C3%B3n"],
  },
  {
    id: 32,
    nombre: "Manguera Plástica Flexible",
    categoria: "materiales-maquetas",
    precio: 2.50,
    edad: "Todas las edades",
    material: "PVC flexible",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-03-28",
    descripcion: "Ideal para simular tuberías, ríos o instalaciones en maquetas de ciencias.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Manguera"],
  },
  {
    id: 33,
    nombre: "Cable Eléctrico para Circuitos",
    categoria: "materiales-maquetas",
    precio: 2.00,
    edad: "Uso con supervisión",
    material: "Cobre con recubrimiento",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-03-28",
    descripcion: "Cable delgado para armar circuitos simples en proyectos de experimentos escolares.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Cable"],
  },
  {
    id: 34,
    nombre: "Foquitos LED + Portapilas",
    categoria: "materiales-maquetas",
    precio: 5.90,
    edad: "Uso con supervisión",
    material: "LED + plástico",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: false,
    fecha: "2026-05-05",
    descripcion: "Set de foquitos LED con su portapilas, perfectos para dar luz a maquetas y experimentos.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=LED+%2B+Portapilas"],
  },
  {
    id: 35,
    nombre: "Árboles Miniatura para Maquetas",
    categoria: "materiales-maquetas",
    precio: 8.00,
    edad: "Todas las edades",
    material: "Espuma + alambre",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-02-19",
    descripcion: "Set de arbolitos miniatura en distintos tamaños para ambientar maquetas urbanas o rurales.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=%C3%81rboles+Miniatura"],
  },
  {
    id: 36,
    nombre: "Casitas Miniatura para Maquetas",
    categoria: "materiales-maquetas",
    precio: 12.00,
    edad: "Todas las edades",
    material: "Plástico resistente",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-02-19",
    descripcion: "Set de casitas a escala para maquetas urbanas y rurales.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Casitas+Miniatura"],
  },
  {
    id: 37,
    nombre: "Carritos Miniatura para Maquetas",
    categoria: "materiales-maquetas",
    precio: 10.00,
    edad: "Todas las edades",
    material: "Plástico resistente",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-01-15",
    descripcion: "Set de carros miniatura para dar vida a maquetas de ciudades.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Carritos+Miniatura"],
  },
  {
    id: 38,
    nombre: "Personajes Miniatura para Maquetas",
    categoria: "materiales-maquetas",
    precio: 9.00,
    edad: "Todas las edades",
    material: "Plástico resistente",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-01-15",
    descripcion: "Figuras de personas a escala para dar contexto y proporción a las maquetas.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Personajes+Miniatura"],
  },
  {
    id: 39,
    nombre: "Edificios Miniatura para Maquetas",
    categoria: "materiales-maquetas",
    precio: 14.00,
    edad: "Todas las edades",
    material: "Plástico resistente",
    disponibilidad: "En stock",
    destacado: false,
    masVendido: false,
    fecha: "2026-01-08",
    descripcion: "Edificios a escala para maquetas de ciudades y proyectos urbanísticos escolares.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Edificios+Miniatura"],
  },
  {
    id: 40,
    nombre: "Kit de Herramientas Escolares para Maquetas",
    categoria: "materiales-maquetas",
    precio: 19.90,
    edad: "Uso con supervisión",
    material: "Metal + plástico",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: false,
    fecha: "2026-06-01",
    descripcion: "Incluye cortador de tecnopor, tijera y otras herramientas básicas para trabajar maquetas con precisión.",
    imagenes: ["https://placehold.co/700x700/7FCB9E/FFFFFF?text=Kit+Herramientas"],
  },

  /* ---------------------------------------------------------
     MATERIAL ESCOLAR
     --------------------------------------------------------- */
  {
    id: 41,
    nombre: "Set Escolar Básico (12 piezas)",
    categoria: "material-escolar",
    precio: 29.90,
    edad: "6 a 12 años",
    material: "Mixto",
    disponibilidad: "En stock",
    destacado: true,
    masVendido: true,
    fecha: "2026-06-25",
    descripcion: "Incluye lápices, borrador, tajador, colores, regla y tijera punta roma en un estuche resistente.",
    imagenes: ["https://placehold.co/700x700/FFC94A/26313A?text=Set+Escolar"],
  },
];

function obtenerProductoPorId(id){
  return PRODUCTOS.find(p => p.id === Number(id));
}

function formatearPrecio(valor){
  return "S/ " + valor.toFixed(2);
}

function productosPorCategoria(categoriaId, excluirId){
  return PRODUCTOS.filter(p => p.categoria === categoriaId && p.id !== excluirId);
}
