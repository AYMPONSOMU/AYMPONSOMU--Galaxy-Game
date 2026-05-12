function openRealm() {

  const messages = [

    "🌌 A hidden galaxy has awakened...",

    "👁️ The cosmic eye is watching...",

    "🪐 Saturn alignment detected...",

    "🔮 A secret portal is opening...",

    "✨ Unknown energy entering reality..."
  ];

  const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

  alert(randomMessage);
}
