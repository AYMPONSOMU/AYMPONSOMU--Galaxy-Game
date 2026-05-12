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
let selectedNode = null;

const nodes = document.querySelectorAll(".node");

nodes.forEach(node => {

  node.addEventListener("click", () => {

    if (!selectedNode) {

      selectedNode = node;

      node.style.background = "white";

    } else {

      connectNodes(selectedNode, node);

      selectedNode.style.background = "cyan";

      selectedNode = null;
    }
  });
});

function connectNodes(nodeA, nodeB) {

  const line =
    document.getElementById("line");

  const rectA =
    nodeA.getBoundingClientRect();

  const rectB =
    nodeB.getBoundingClientRect();

  const x1 =
    rectA.left + rectA.width / 2;

  const y1 =
    rectA.top + rectA.height / 2;

  const x2 =
    rectB.left + rectB.width / 2;

  const y2 =
    rectB.top + rectB.height / 2;

  const length =
    Math.hypot(x2 - x1, y2 - y1);

  const angle =
    Math.atan2(y2 - y1, x2 - x1)
    * 180 / Math.PI;

  line.style.width =
    length + "px";

  line.style.left =
    x1 + "px";

  line.style.top =
    y1 + "px";

  line.style.transform =
    `rotate(${angle}deg)`;

  line.style.display =
    "block";
      }
