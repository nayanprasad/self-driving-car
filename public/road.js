class Road {
    constructor(x, width, lanes = 4) {
        this.x = x;
        this.width = width ;
        this.lanes = lanes;

        this.diff = width/lanes;
        this.left = x - width/2 + 20;
        this.right = x + width/2 - 20;

        const infinity = 1000000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    getRoadCenter(laneIndex = this.lanes/2) {
        const index = laneIndex < 0 || laneIndex > this.lanes ? this.lanes/2  : laneIndex;
        return this.lanes % 2 === 0 ? this.diff * index + this.diff/2 : this.diff * index;
    }

    draw(ctx) {
        ctx.lineWidth = 8;
        ctx.strokeStyle = "white";

        for(let i = 0; i <= this.lanes; i++) {
            if(i === 0 || i === this.lanes) {
                ctx.setLineDash([])
                ctx.lineWidth = 12;
            }
            else {
                // ctx.setLineDash([5, 20])
                ctx.lineWidth = 4;
            }
            ctx.beginPath();
            ctx.moveTo(this.diff * i, this.top);
            ctx.lineTo(this.diff * i, this.bottom);
            ctx.stroke();
            ctx.closePath()
        }
    }
}
