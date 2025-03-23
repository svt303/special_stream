const video = document.getElementById('custom-video');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');
const fullscreenButton = document.getElementById('fullscreen');
const controls = document.querySelector('.controls');

// Play/Pause
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Volume Control
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Fullscreen
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Auto-hide controls
let timeout;
video.addEventListener('mousemove', () => {
    controls.classList.remove('hide');
    clearTimeout(timeout);
    timeout = setTimeout(() => controls.classList.add('hide'), 2000);
});

// Ensure video is not muted
video.muted = false;
