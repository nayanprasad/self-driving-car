class Traffic {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = 0;
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = speed;

        this.img = new Image();
        this.img.src = "./assets/car2.png";
    }

    update() {
        this.polygon = this.#createPolygon();
        this.#move();
    }

    #move() {
        this.speed += this.acceleration;

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }

        this.y -= this.speed;
    }

    #createPolygon() {
        const points = [];
        const rad = Math.hypot(this.width, this.height) / 2;
        const alpha = Math.atan2(this.width, this.height);
        points.push({
            x: this.x - Math.sin(this.angle - alpha) * rad,
            y: this.y - Math.cos(this.angle - alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(this.angle + alpha) * rad,
            y: this.y - Math.cos(this.angle + alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(Math.PI + this.angle - alpha) * rad,
            y: this.y - Math.cos(Math.PI + this.angle - alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(Math.PI + this.angle + alpha) * rad,
            y: this.y - Math.cos(Math.PI + this.angle + alpha) * rad
        });
        return points;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "red";
        // ctx.moveTo(this.polygon[0].x, this.polygon[0].y);
        // for (let i = 1; i < this.polygon.length; i++) {
        //     ctx.lineTo(this.polygon[i].x, this.polygon[i].y);
        // }
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
        ctx.fill();
    }
}
