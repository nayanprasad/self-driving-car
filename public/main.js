const canvas = document.getElementById("canvas");
canvas.width = 500;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width);
const car = new Car(road.getRoadCenter(), 700, 40, 60);


animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;
  road.draw(ctx);
  car.draw(ctx);
  requestAnimationFrame(animate);
}
