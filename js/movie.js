async function loadVideo() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const video = document.getElementById("videoPlayer");

    video.src = `${API_URL}/api/movies/play/${id}`;
    const english = document.createElement("track");

    english.kind = "subtitles";
    english.label = "English";
    english.srclang = "en";
    english.src = `${API_URL}/api/movies/subtitles/${id}/0`;
    english.default = true;
    video.appendChild(english);
    
    video.load();
        console.log("Video URL:", video.src);
    console.log("Subtitle URL:", english.src);

    english.addEventListener("load", () => {
        console.log("Subtitle loaded successfully");
    });

    english.addEventListener("error", (e) => {
        console.error("Subtitle failed to load", e);
    });
}

loadVideo();