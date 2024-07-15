var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = '<i class="uil uil-pause"></i>'; // Replace with the appropriate class for volume off icon
    } else {
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = '<i class="uil uil-play"></i>'; // Replace with the appropriate class for volume icon
    }
}

function togglepopup(popupId){
    var popup = document.getElementById(popupId);
    popup.classList.toggle("active");
}

