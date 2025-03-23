const iframe = document.getElementById('video-iframe');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');
const fullscreenButton = document.getElementById('fullscreen');
const customControls = document.querySelector('.custom-controls');

// Play/Pause
playPauseButton.addEventListener('click', () => {
    const iframeWindow = iframe.contentWindow;
    if (iframeWindow) {
        const video = iframeWindow.document.querySelector('video');
        if (video) {
            if (video.paused) {
                video.play();
                playPauseButton.textContent = 'Pause';
            } else {
                video.pause();
                playPauseButton.textContent = 'Play';
            }
        }
    }
});

// Volume Control
volumeControl.addEventListener('input', () => {
    const iframeWindow = iframe.contentWindow;
    if (iframeWindow) {
        const video = iframeWindow.document.querySelector('video');
        if (video) {
            video.volume = volumeControl.value;
        }
    }
});

// Fullscreen Toggle
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        iframe.requestFullscreen();
        fullscreenButton.textContent = 'Exit Fullscreen';
    } else {
        document.exitFullscreen();
        fullscreenButton.textContent = 'Fullscreen';
    }
});

// Auto-hide Controls
let timeout;
iframe.addEventListener('mousemove', () => {
    customControls.classList.remove('hide');
    clearTimeout(timeout);
    timeout = setTimeout(() => customControls.classList.add('hide'), 2000);
});

// Ensure controls are visible initially
customControls.classList.remove('hide');
