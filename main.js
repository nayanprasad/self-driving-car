const canvas = document.getElementById("canvas");
canvas.width = 400;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width);
const car = new Car(road.getRoadCenter(), 700, 40, 60, road.boundaries);
const sensor = new Sensor(car);


animate();

function animate() {
    car.update();
    sensor.update();
    canvas.height = window.innerHeight;
    ctx.save();
    ctx.translate(0, -car.y + canvas.height - 100);

    road.draw(ctx);
    car.draw(ctx);
    sensor.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}
