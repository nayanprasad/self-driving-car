const canvas = document.getElementById("canvas");
canvas.width = 400;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width);
const car = new Car(road.getRoadCenter(), 900, 40, 60, road.boundaries);
const traffic = [];


animate();

function animate() {
    for (let i = 0; i < 10000; i++) {
        const trafficCar = {
            x: road.getRoadCenter() - 150 + Math.random() * 300,
            y: 700 - i * 150,
            width: 40,
            height: 60,
            speed: Math.random() * 3.5 + 0.5
        }

        let isCollision = false;
        traffic.forEach((e) => {
            if(e.x > trafficCar.x - trafficCar.width && e.x < trafficCar.x + trafficCar.width){
                isCollision = true;
            }
        });

        if(!isCollision){
            traffic.push(new Traffic(trafficCar.x, trafficCar.y, trafficCar.width, trafficCar.height, trafficCar.speed));
        }
    }
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
