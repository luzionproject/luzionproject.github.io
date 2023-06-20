document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const videoContainer = document.getElementById("videoContainer");
    const video = videoContainer.querySelector("video");
  
    playButton.addEventListener("click", function() {
      videoContainer.style.display = "block";
      video.play();
      playButton.style.display = "none";
      video.requestFullscreen();
    });
  });