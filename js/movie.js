const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const source = document.createElement("source");
const video = document.getElementById("videoPlayer");
source.type = "video/x-matroska";

video.src = `${API_URL}/api/movies/play/${id}`;