let energy = 0;

function tapCosmos() {
  energy++;

  document.getElementById("energy").innerText = energy;

  let universe = document.getElementById("universe");

  let planet = document.createElement("div");
  planet.className = "planet spawn";
  planet.innerHTML = "🪐 Cosmic Planet " + energy;

  universe.appendChild(planet);

  // 🌌 smooth cosmic reset
  if (energy % 10 === 0) {
    universe.classList.add("resetFlash");

    setTimeout(() => {
      universe.innerHTML = "";
      universe.classList.remove("resetFlash");
    }, 800);
  }
}
