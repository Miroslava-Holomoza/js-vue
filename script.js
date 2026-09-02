const liquid = document.getElementById('liquid');
const levelText = document.getElementById('levelText');
const volumeText = document.getElementById('volumeText');
const fillBtn = document.getElementById('fillBtn');
const drainBtn = document.getElementById('drainBtn');
const nozzle = document.getElementById('nozzle');

let fuelLevel = 35;
let pumping = false;

function updateFuelView() {
  const clampedLevel = Math.min(100, Math.max(0, fuelLevel));
  const fillHeight = 12 + (clampedLevel / 100) * 76;

  liquid.style.height = `${fillHeight}%`;
  levelText.textContent = `${Math.round(clampedLevel)}%`;
  volumeText.textContent = `${Math.round((clampedLevel / 100) * 3000)} л`;

  if (clampedLevel > 75) {
    nozzle.style.opacity = '1';
  } else {
    nozzle.style.opacity = '0.7';
  }
}

function pumpAnimation(active) {
  pumping = active;
  nozzle.style.animationPlayState = active ? 'running' : 'paused';
  nozzle.style.filter = active ? 'drop-shadow(0 0 12px rgba(34,197,94,0.6))' : 'none';
}

fillBtn.addEventListener('click', () => {
  pumpAnimation(true);
  const interval = setInterval(() => {
    fuelLevel += 3;
    updateFuelView();

    if (fuelLevel >= 100) {
      fuelLevel = 100;
      updateFuelView();
      clearInterval(interval);
      pumpAnimation(false);
    }
  }, 100);
});

drainBtn.addEventListener('click', () => {
  pumpAnimation(true);
  const interval = setInterval(() => {
    fuelLevel -= 4;
    updateFuelView();

    if (fuelLevel <= 0) {
      fuelLevel = 0;
      updateFuelView();
      clearInterval(interval);
      pumpAnimation(false);
    }
  }, 100);
});

updateFuelView();
