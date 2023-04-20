<!-- src/components/SnowDropEffect.vue -->
<template>
  <canvas
    ref="canvas"
    class="snowdrop"
  />
</template>

<script>
export default {
  name: 'SnowDropEffect',
  mounted() {
    this.createSnowdropEffect();
  },
  methods: {
    createSnowdropEffect() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const snowdrops = [];

      for (let i = 0; i < 100; i++) {
        snowdrops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speed: Math.random() * 3 + 0.5,
        });
      }

      function drawSnowdrops() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'white';
        ctx.beginPath();

        for (const snowdrop of snowdrops) {
          ctx.moveTo(snowdrop.x, snowdrop.y);
          ctx.arc(snowdrop.x, snowdrop.y, snowdrop.radius, 0, Math.PI * 2);
        }

        ctx.fill();

        updateSnowdrops();
      }

      function updateSnowdrops() {
        for (const snowdrop of snowdrops) {
          snowdrop.y += snowdrop.speed;

          if (snowdrop.y > canvas.height) {
            snowdrop.y = 0;
            snowdrop.x = Math.random() * canvas.width;
          }
        }
      }

      function animate() {
        drawSnowdrops();
        requestAnimationFrame(animate);
      }

      animate();
    },
  },
};
</script>

<style>
.snowdrop {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
}
</style>
