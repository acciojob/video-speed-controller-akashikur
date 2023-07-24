  const volumeInput = document.querySelector('.player__slider[name="volume"]');
  const playbackSpeedInput = document.querySelector('.player__slider[name="playbackRate"]');
  const playButton = document.querySelector('.player__button');
  const skipButtons = document.querySelectorAll('[data-skip]');

  // Function to toggle play/pause
  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  // Function to update play/pause button icon
  function updatePlayButtonIcon() {
    playButton.textContent = video.paused ? '►' : '❚ ❚';
  }

  // Function to update playback speed
  function updatePlaybackSpeed() {
    video.playbackRate = parseFloat(playbackSpeedInput.value);
    speedBar.textContent = playbackSpeedInput.value + '×';
  }

  // Function to handle skip buttons
  function handleSkip() {
    const skipTime = parseFloat(this.dataset.skip);
    video.currentTime += skipTime;
  }

  // Event listeners
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updatePlayButtonIcon);
  video.addEventListener('pause', updatePlayButtonIcon);
  video.addEventListener('timeupdate', updateProgress);

  playButton.addEventListener('click', togglePlay);

  volumeInput.addEventListener('input', handleVolumeChange);
  playbackSpeedInput.addEventListener('input', updatePlaybackSpeed);

  skipButtons.forEach(button => button.addEventListener('click', handleSkip));
});

// Function to update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

// Function to handle volume change
function handleVolumeChange() {
  video.volume = volumeInput.value;
}
