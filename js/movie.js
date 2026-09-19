async function loadVideo() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const video = document.getElementById("videoPlayer");

    const res = await fetch(`${API_URL}/api/movies/${id}/type`);
    const data = await res.json();

    const source = document.createElement("source");

    source.type = "video/" + data.type;
    source.src = `${API_URL}/api/movies/play/${id}`;

    video.appendChild(source);
    video.load();
}

loadVideo();