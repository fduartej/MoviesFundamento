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
    movieGrid.appendChild(movieItem);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Cargar películas
  cargarPeliculas();
});
