let energy = 0;

function tapCosmos() {
  energy++;

  // update energy display
  document.getElementById("energy").innerText = energy;

  // create planet
  let universe = document.getElementById("universe");

  let planet = document.createElement("div");
  planet.className = "planet";
  planet.innerHTML = "🪐 Cosmic Planet " + energy;

  universe.appendChild(planet);

  // simple reset system (basic idea)
  if (energy % 10 === 0) {
    alert("🌌 Cosmic Reset Triggered!");
    universe.innerHTML = "";
  }
}
