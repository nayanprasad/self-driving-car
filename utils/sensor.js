class Sensor {
    constructor(car) {

        this.x = car.x;
        this.y = car.y - car.height / 2;
        this.angle = car.angle;

        this.car = car;
        this.rayCount = 4; // 1 dont works
        this.rayLength = 300;
        this.raySpread = 1;
        this.rays = [];
    }

    draw(ctx) {
        ctx.strokeStyle = "yellow";
        ctx.lineWidth = 1;
        for (let i = 0; i < this.rayCount; i++) {
            const angle = (this.raySpread / 2 + (-this.raySpread / 2 - this.raySpread / 2) * i / (this.rayCount - 1) )+ this.car.angle
            ctx.beginPath();
            ctx.moveTo(this.car.x, this.car.y);
            ctx.lineTo(this.car.x - Math.sin(angle) * this.rayLength, this.car.y - Math.cos(angle) * this.rayLength);
            ctx.stroke();
        }
    }
}
