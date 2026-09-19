const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const video = document.getElementById("videoPlayer");

video.src = `${API_URL}/api/movies/play/${id}`;