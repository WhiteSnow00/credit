// src/SnowflakeSVG.js

import snowflakeSVG from '@/assets/snowflake.svg';

export default class SnowflakeSVG {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.img = new Image();
    this.img.src = snowflakeSVG;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.parentElement.clientWidth;
    this.y = Math.random() * this.parentElement.clientHeight * -1;
    this.size = 5 + Math.random() * 15;
    this.velocity = 0.5 + Math.random() * 1.5;
  }

  update() {
    this.y += this.velocity;
    if (this.y > this.parentElement.clientHeight) {
      this.reset();
    }
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
}
