<template>
  <div class="contact-buttons">
    <ul class="navigation">
      <li class="navigation__item">
        <a target="_blank" :href="facebookUrl" title="Facebook">
          <i class="social fab fa-facebook"></i>
        </a>
      </li>
      <li class="navigation__item">
        <a target="_blank" :href="telegramUrl" title="Telegram">
          <i class="social fab fa-telegram"></i>
        </a>
      </li>
      <li class="navigation__item">
        <a target="_blank" :href="githubUrl" title="GitHub">
          <i class="social fab fa-github"></i>
        </a>
      </li>
      <li class="navigation__item">
        <a target="_blank" :href="'mailto:' + emailAddress" title="Email">
          <i class="social fa fa-envelope"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactButtons',
  data() {
    return {
      facebookUrl: 'https://www.facebook.com/F.Ena.2001/',
      telegramUrl: 'https://t.me/sech_ayaya',
      githubUrl: 'https://github.com/WhiteSnow00',
      emailAddress: 'animelovefanam@gmail.com',
    };
  },
};
</script>

<style scoped>
.social {
  font-size: 24px;
  margin-right: 10px;
}

.navigation__item {
  display: inline-block;
  list-style: none;
}
</style>
