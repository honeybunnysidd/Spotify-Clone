var songs = document.querySelectorAll("audio");
var icons = document.getElementsByClassName("btn");

for (let i = 0; i < icons.length; i++) {
  icons[i].onclick = function () {
    // Pause all other songs
    songs.forEach((song, index) => {
      if (index !== i) {
        song.pause();
        icons[index].innerHTML = '<i class="fa-solid fa-play"></i>'; // Change other icons back to play
      }
    });

    // Play or pause the current song
    if (songs[i].paused) {
      songs[i].play();
      icons[i].innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      songs[i].pause();
      icons[i].innerHTML = '<i class="fa-solid fa-play"></i>'; // Change back to play icon
    }
  };
}