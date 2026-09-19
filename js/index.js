async function loadMovies() {
    const response = await fetch(`${API_URL}/api/movies`);
    const data = await response.json();
    const movies= data.movies;
    const container = document.getElementById("movies");
    container.innerHTML = "";
    movies.forEach(movie => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${movie.movie_title}</h2>
            <p>ID: ${movie.id}</p>
        `;

        div.addEventListener("click", () => {
            window.location.href = `movie.html?id=${movie.id}`;
        });

        container.appendChild(div);
    });
}

loadMovies();