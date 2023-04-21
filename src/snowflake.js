// src/snowflake.js

export default class Snowflake {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.speed = Math.random() * 3 + 0.5;
    this.alpha = 0.4 + Math.random() * 0.3;
  }

  draw() {
    const { ctx, x, y, radius, alpha } = this;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fill();
  }

  update() {
    this.y += this.speed;

    if (this.y > this.canvas.height) {
      this.y = 0;
    }
  }
}
