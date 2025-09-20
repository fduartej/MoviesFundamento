let peliculasData = [];

async function cargarPeliculas() {
  const response = await fetch("moviesdb.json");
  peliculasData = await response.json();
  mostrarPeliculas(peliculasData);
}

function mostrarPeliculas(peliculas) {
  const movieGrid = document.querySelector(".movie-grid");
  movieGrid.innerHTML = "";
  peliculas.forEach((pelicula) => {
    const movieItem = document.createElement("div");
    movieItem.className = "movie-item";

    movieItem.style.cursor = "pointer";
    movieItem.setAttribute("data-movie-id", pelicula.id);

    movieItem.innerHTML = `
      <img src="${pelicula.image}" alt="${pelicula.title}" />
      <div class="movie-info">
        <h3>${pelicula.title}</h3>
        <p>${pelicula.description}</p>
        <div class="movie-details">
          <span class="year">${pelicula.year}</span>
          <span class="genre">${pelicula.genre}</span>
          <span class="rating">⭐ ${pelicula.rating}</span>
        </div>
      </div>
    `;

    movieItem.addEventListener("click", () => {
      mostrarDetallesPelicula(pelicula.id);
    });

    movieGrid.appendChild(movieItem);
  });
}

function mostrarDetallesPelicula(peliculaId) {
  const pelicula = peliculasData.find((p) => p.id === peliculaId);

  // Rellenar el modal con los datos de la película
  document.getElementById("modalImage").src = pelicula.image;
  document.getElementById("modalImage").alt = pelicula.title;
  document.getElementById("modalTitle").textContent = pelicula.title;
  document.getElementById("modalYear").textContent = pelicula.year;
  document.getElementById("modalDuration").textContent = pelicula.duration;
  document.getElementById("modalGenre").textContent = pelicula.genre;
  document.getElementById("modalDirector").textContent = pelicula.director;
  document.getElementById("modalRating").textContent = pelicula.rating;
  document.getElementById("modalSynopsis").textContent = pelicula.synopsis;

  // Mostrar el reparto
  const castContainer = document.getElementById("modalCast");
  castContainer.innerHTML = "";
  pelicula.cast.forEach((actor) => {
    const castSpan = document.createElement("span");
    castSpan.className = "cast-member";
    castSpan.textContent = actor;
    castContainer.appendChild(castSpan);
  });

  // Mostrar el modal
  document.getElementById("movieModal").classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevenir scroll del body
}

// Función para cerrar el modal
function cerrarModal() {
  document.getElementById("movieModal").classList.add("hidden");
  document.body.style.overflow = "auto"; // Restaurar scroll del body
}

document.addEventListener("DOMContentLoaded", function () {
  // Cargar películas
  cargarPeliculas();

  // Evento para cerrar el modal al hacer clic en el botón de cerrar
  document.querySelector(".close-btn").addEventListener("click", cerrarModal);

  // Opcional: cerrar el modal al hacer clic fuera del contenido
  document.getElementById("movieModal").addEventListener("click", function (e) {
    if (e.target === this) {
      cerrarModal();
    }
  });
});
