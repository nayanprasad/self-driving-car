class Road {
    constructor(x, width, lanes = 3) {
        this.x = x;
        this.width = width;
        this.lanes = lanes;

        this.diff = width / lanes;
        this.left = x - width / 2 + 20;
        this.right = x + width / 2 - 20;

        const infinity = 10e6;
        this.top = -infinity;
        this.bottom = infinity;

        const topLeft = {x: this.left, y: this.top};
        const topRight = {x: this.right, y: this.top};
        const bottomLeft = {x: this.left, y: this.bottom};
        const bottomRight = {x: this.right, y: this.bottom};

        this.boundaries = [[topRight, bottomRight], [topLeft, bottomLeft]];
    }

    getRoadCenter(laneIndex = this.lanes / 2) {
        const index = laneIndex < 0 || laneIndex > this.lanes ? this.lanes / 2 : laneIndex;
        return this.lanes % 2 === 0 ? this.diff * index + this.diff / 2 : this.diff * index;
    }

    draw(ctx) {
        ctx.lineWidth = 8;
        ctx.strokeStyle = "white";

        ctx.setLineDash([50, 30])
        ctx.lineWidth = 8;
        for (let i = 1; i < this.lanes; i++) {
            ctx.beginPath();
            ctx.moveTo(this.diff * i, this.top);
            ctx.lineTo(this.diff * i, this.bottom);
            ctx.stroke();
        }
        //
        // console.log(this.boundaries[1][0].x, this.boundaries[1][0].y)
        // console.log(this.boundaries[1][1].x, this.boundaries[1][1].y)
        ctx.setLineDash([])
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(this.boundaries[0][0].x, this.boundaries[0][0].y);
        ctx.lineTo(this.boundaries[0][1].x, this.boundaries[0][1].y);
        ctx.moveTo(this.boundaries[1][0].x, this.boundaries[1][0].y);
        ctx.lineTo(this.boundaries[1][1].x, this.boundaries[1][1].y);
        ctx.stroke();
    }
}
