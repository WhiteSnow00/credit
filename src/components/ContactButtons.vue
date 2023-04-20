<template>
  <ul class="navigation">
    <li class="navigation__item">
      <a
        :href="facebookLink"
        target="_blank"
        title="私のフェイスブック"
      >
        <i
          class="social fab fa-facebook"
          style="color:rgb(149, 231, 241)"
        />
      </a>
    </li>
    <li class="navigation__item">
      <a
        :href="telegramLink"
        target="_blank"
        title="テレグラム"
      >
        <i
          class="social fab fa-telegram"
          style="color:rgb(133, 161, 214)"
        />
      </a>
    </li>
    <li class="navigation__item">
      <a
        :href="githubLink"
        target="_blank"
        title="ギットハブ"
      >
        <i
          class="social fab fa-github"
          style="color:rgb(77, 77, 77)"
        />
      </a>
    </li>
    <li class="navigation__item">
      <a
        :href="emailLink"
        target="_blank"
        title="メールアドレス"
      >
        <i
          class="social fa fa-envelope"
          style="color:rgb(191, 146, 241)"
        />
      </a>
    </li>
  </ul>
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
