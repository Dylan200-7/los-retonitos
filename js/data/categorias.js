/* =========================================================
   DATA / CATEGORIAS.JS
   =========================================================
   Catálogo de categorías reales de LOS RETOÑITOS.

   >>> ESCALABILIDAD: este arreglo simula lo que en el futuro
   sería la respuesta de un endpoint tipo GET /api/categorias.
   Cuando exista backend, basta con reemplazar esta constante
   por el resultado de un fetch() — el resto del sitio (home,
   catálogo, filtros, footer) consume CATEGORIAS sin saber de
   dónde vinieron los datos.

   Cada categoría tiene:
   - id: usado en la URL (?categoria=...) y como llave de filtro
   - nombre: texto visible
   - icono: clase de Bootstrap Icons
   - color: clase de acento (definida en css/styles.css)
   - imagen: TODO (reemplazar) — foto representativa real
   ========================================================= */

const CATEGORIAS = [
  {
    id: "juegos-didacticos",
    nombre: "Juegos Didácticos",
    icono: "bi-puzzle",
    color: "bg-tint-blue",
    imagen: "https://placehold.co/500x400/2E6F9E/FFFFFF?text=Juegos+Didacticos",
  },
  {
    id: "laminas-educativas",
    nombre: "Láminas Educativas",
    icono: "bi-image",
    color: "bg-tint-orange",
    imagen: "https://placehold.co/500x400/FF9F6E/FFFFFF?text=Laminas+Educativas",
  },
  {
    id: "posters-educativos",
    nombre: "Posters Educativos",
    icono: "bi-easel",
    color: "bg-tint-green",
    imagen: "https://placehold.co/500x400/7FCB9E/FFFFFF?text=Posters+50x70",
  },
  {
    id: "libros-didacticos",
    nombre: "Libros Didácticos",
    icono: "bi-book",
    color: "bg-tint-yellow",
    imagen: "https://placehold.co/500x400/FFC94A/26313A?text=Libros+Didacticos",
  },
  {
    id: "libros-coquito",
    nombre: "Libros Coquito",
    icono: "bi-journal-bookmark",
    color: "bg-tint-blue",
    imagen: "https://placehold.co/500x400/2E6F9E/FFFFFF?text=Libros+Coquito",
  },
  {
    id: "cuadernos-trabajo",
    nombre: "Cuadernos de Trabajo",
    icono: "bi-journal-text",
    color: "bg-tint-orange",
    imagen: "https://placehold.co/500x400/FF9F6E/FFFFFF?text=Cuadernos+de+Trabajo",
  },
  {
    id: "caligrafia",
    nombre: "Caligrafía",
    icono: "bi-pencil",
    color: "bg-tint-green",
    imagen: "https://placehold.co/500x400/7FCB9E/FFFFFF?text=Caligrafia",
  },
  {
    id: "cuentos-infantiles",
    nombre: "Cuentos Infantiles",
    icono: "bi-stars",
    color: "bg-tint-yellow",
    imagen: "https://placehold.co/500x400/FFC94A/26313A?text=Cuentos+Infantiles",
  },
  {
    id: "libros-colorear",
    nombre: "Libros para Colorear",
    icono: "bi-palette",
    color: "bg-tint-blue",
    imagen: "https://placehold.co/500x400/2E6F9E/FFFFFF?text=Libros+para+Colorear",
  },
  {
    id: "sopa-letras",
    nombre: "Sopas de Letras",
    icono: "bi-grid-3x3",
    color: "bg-tint-orange",
    imagen: "https://placehold.co/500x400/FF9F6E/FFFFFF?text=Sopa+de+Letras",
  },
  {
    id: "sudoku",
    nombre: "Sudoku",
    icono: "bi-grid",
    color: "bg-tint-green",
    imagen: "https://placehold.co/500x400/7FCB9E/FFFFFF?text=Sudoku",
  },
  {
    id: "rompecabezas",
    nombre: "Rompecabezas",
    icono: "bi-puzzle-fill",
    color: "bg-tint-yellow",
    imagen: "https://placehold.co/500x400/FFC94A/26313A?text=Rompecabezas",
  },
  {
    id: "juegos-mesa",
    nombre: "Juegos de Mesa",
    icono: "bi-dice-5",
    color: "bg-tint-blue",
    imagen: "https://placehold.co/500x400/2E6F9E/FFFFFF?text=Juegos+de+Mesa",
  },
  {
    id: "maquetas-escolares",
    nombre: "Maquetas Escolares",
    icono: "bi-buildings",
    color: "bg-tint-orange",
    imagen: "https://placehold.co/500x400/FF9F6E/FFFFFF?text=Maquetas+Escolares",
  },
  {
    id: "materiales-maquetas",
    nombre: "Materiales para Maquetas",
    icono: "bi-tools",
    color: "bg-tint-green",
    imagen: "https://placehold.co/500x400/7FCB9E/FFFFFF?text=Materiales+para+Maquetas",
  },
  {
    id: "material-escolar",
    nombre: "Material Escolar",
    icono: "bi-backpack2",
    color: "bg-tint-yellow",
    imagen: "https://placehold.co/500x400/FFC94A/26313A?text=Material+Escolar",
  },
];

// Categorías destacadas para la sección "¿Qué encontrarás en Los Retoñitos?" (Inicio)
const CATEGORIAS_DESTACADAS_HOME = [
  "juegos-didacticos",
  "laminas-educativas",
  "libros-didacticos",
  "maquetas-escolares",
  "rompecabezas",
  "material-escolar",
  "caligrafia",
  "libros-colorear",
];

function obtenerCategoria(id){
  return CATEGORIAS.find(c => c.id === id);
}

function nombreCategoria(id){
  const c = obtenerCategoria(id);
  return c ? c.nombre : id;
}
