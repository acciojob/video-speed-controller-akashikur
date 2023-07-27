const video = document.querySelector('.flex');
const speedBar = document.querySelector('.speed-bar');
let isMouseDown = false;

function handleSpeedScrub(e) {
  if (!isMouseDown) return;
  const scrubY = e.pageY - this.offsetTop;
  const percent = scrubY / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;
  speedBar.textContent = `${playbackRate.toFixed(1)}x`;
  video.playbackRate = playbackRate;
}

speedBar.addEventListener('mousedown', () => isMouseDown = true);
speedBar.addEventListener('mouseup', () => isMouseDown = false);
speedBar.addEventListener('mouseleave', () => isMouseDown = false);
speedBar.addEventListener('mousemove', handleSpeedScrub);
