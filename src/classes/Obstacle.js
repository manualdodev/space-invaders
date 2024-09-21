class Obstacle {
    constructor(position, width, height, color) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    hit(projectile) {
        const projectilePositionY =
            projectile.velocity < 0
                ? projectile.position.y
                : projectile.position.y + projectile.height;

        return (
            projectile.position.x >= this.position.x &&
            projectile.position.x <= this.position.x + this.width &&
            projectilePositionY >= this.position.y &&
            projectilePositionY <= this.position.y + this.height
        );
    }
}

export default Obstacle;
