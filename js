<a id="spotifyBtn" href="#">Escuchar en Spotify</a>

<script>
document.getElementById("spotifyBtn").onclick = function () {
  const appLink = "spotify:track:1xm343jLVRrE6F3seWr5OP";
  const webLink = "https://open.spotify.com/track/1xm343jLVRrE6F3seWr5OP";

  window.location = appLink;

  setTimeout(() => {
    window.location = webLink;
  }, 1500);
};
</script>
