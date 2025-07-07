const canvas = document.getElementById("figmaCanvas");
const ctx = canvas.getContext("2d");

let tool = "select";
let isDrawing = false;
let startX = 0;
let startY = 0;

document.getElementById("selectTool").onclick = () => tool = "select";
document.getElementById("rectTool").onclick = () => tool = "rect";
document.getElementById("circleTool").onclick = () => tool = "circle";
document.getElementById("clearCanvas").onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.addEventListener("mousedown", (e) => {
  if (tool === "select") return;
  isDrawing = true;
  startX = e.offsetX;
  startY = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  if (!isDrawing) return;
  isDrawing = false;
  const endX = e.offsetX;
  const endY = e.offsetY;

  const width = endX - startX;
  const height = endY - startY;

  ctx.fillStyle = "#3498db";

  if (tool === "rect") {
    ctx.fillRect(startX, startY, width, height);
  } else if (tool === "circle") {
    const radius = Math.sqrt(width ** 2 + height ** 2);
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, Math.PI * 2);
    ctx.fill();
  }
});
