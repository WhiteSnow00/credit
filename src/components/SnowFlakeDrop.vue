<!-- src/components/SnowDropEffect.vue -->

<template>
  <canvas ref="canvas" class="snowdrop"></canvas>
</template>

<script>
import SnowflakeSVG from '@/SnowflakeSVG';

export default {
  name: 'SnowDropEffect',
  mounted() {
    this.createSnowdropEffect();
  },
  methods: {
    createSnowdropEffect() {
      const canvas = this.$refs.canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const ctx = canvas.getContext('2d');

      const snowflakes = [];

      for (let i = 0; i < 200; i++) {
        snowflakes.push(new SnowflakeSVG(canvas));
      }

      function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const snowflake of snowflakes) {
          snowflake.draw(ctx);
        }
      }

      function updateSnowflakes() {
        for (const snowflake of snowflakes) {
          snowflake.update();
        }
      }

      function animate() {
        drawSnowflakes();
        updateSnowflakes();
        requestAnimationFrame(animate);
      }

      animate();
    },
  },
};
</script>

<style scoped>
.snowdrop {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
}
</style>
