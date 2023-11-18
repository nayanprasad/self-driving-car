const canvas = document.getElementById("canvas");
canvas.width = 400;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width);
const car = new Car(road.getRoadCenter(), 700, 40, 60, road.boundaries);
const traffic = [
    new Traffic(road.getRoadCenter() - 100, 700, 40, 60, 2),
    new Traffic(road.getRoadCenter() + 100, 700, 40, 60, 1.5)
];

animate();

function animate() {
    car.update(road.boundaries, traffic);
    traffic.forEach((e) => e.update());
    canvas.height = window.innerHeight;
    ctx.save();
    ctx.translate(0, -car.y + canvas.height - 100);
    road.draw(ctx);
    traffic.forEach((e) => e.draw(ctx));
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}
