class Star {
    constructor(canvasWidth, canvasHeight) {
        this.position = {
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
        };

        this.radius = Math.random() * 1 + 0.3;
        this.velocity = (Math.random() * 0.4 + 0.1) * this.radius;

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.color = "white";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.position.y > this.canvasHeight + this.radius) {
            this.position.y = -this.radius;
            this.position.x = Math.random() * this.canvasWidth;
            this.velocity = (Math.random() * 0.4 + 0.1) * this.radius;
        }

        this.position.y += this.velocity;
    }
}

export default Star;
