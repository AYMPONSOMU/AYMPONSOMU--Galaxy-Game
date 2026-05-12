let energy = 0;

function tapCosmos() {
  energy++;

  // update energy display
  document.getElementById("energy").innerText = energy;

  let universe = document.getElementById("universe");

  // ✨ create planet with animation class
  let planet = document.createElement("div");
  planet.className = "planet spawn";
  planet.innerHTML = "🪐 Cosmic Planet " + energy;

  universe.appendChild(planet);

  // 🌟 smooth reset system (no harsh alert spam later)
  if (energy % 10 === 0) {
    
    // cosmic reset effect
    universe.classList.add("resetFlash");

    setTimeout(() => {
      universe.innerHTML = "";
      universe.classList.remove("resetFlash");
    }, 800);

    // optional message
    console.log("🌌 Cosmic Reset Occurred");
  }
}
