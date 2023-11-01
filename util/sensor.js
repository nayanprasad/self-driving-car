class Sensor {
    constructor(car) {

        this.x = car.x;
        this.y = car.y - car.height / 2;
        this.angle = car.angle;

        this.car = car;
        this.rayCount = 2;
        this.rayLength = 200;
        this.raySpread = 0.5;
        this.rays = [];
    }

    update() {
        this.x = car.x;
        this.angle = car.angle;
    }

    draw(ctx) {
        ctx.strokeStyle = "yellow";
        for (let i = 0; i < this.rayCount; i++) {
            const angle = this.angle + (i - this.rayCount / 2) * this.raySpread;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - Math.sin(angle) * this.rayLength, this.y - Math.cos(angle) * this.rayLength);
            ctx.stroke();
        }
    }
}
