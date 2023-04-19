<template>
  <div>
    <link rel="stylesheet" href="../assets/css/fontawesome/css/all.min.css" />
    <link rel="stylesheet" href="../assets/css/main.css" />

    <div class="panel-cover" :style="{'background-image': 'url(' + currentBg + ')'}">
      <div class="panel-main">
        <div class="panel-main__inner panel-inverted">
          <div class="panel-main__content">
            <img src="https://avatars.githubusercontent.com/u/105199668?s=400&u=01156b92074fcaff82540f33cb603ce849cfe670&v=4" width="150" alt="LOGO" class="panel-cover__logo logo">
            <h1 class="panel-cover__title panel-title">[_Kanaria_]</h1>

            <span class="panel-cover__subtitle panel-subtitle">
              <hr class="panel-cover__divider">
              <p class="panel-cover__description">非営利の性的コンテンツ チャンネル</p>
              <hr class="panel-cover__divider">
              <p class="panel-cover__description">ここには何もない</p>
            </span>
            <p class="footer">Copyright © 2022 WhiteSnow00</p>  
            <div>
              <nav class="cover-navigation navigation--social">
                <ul class="navigation">
                  <!-- Facebook -->
                  <li class="navigation__item">
                    <a target="_blank" href="https://www.facebook.com/F.Ena.2001/" title="私のフェイスブック">
                      <i class="social fab fa-facebook" style="color:rgb(149, 231, 241)"></i>
                    </a>
                  </li>
                  <!-- Telegram -->
                  <li class="navigation__item">
                    <a target="_blank" href="https://t.me/sech_ayaya" title="テレグラム">
                      <i class="social fab fa-telegram" style="color:rgb(133, 161, 214)"></i>
                    </a>
                  </li>
                  <!-- Github -->
                  <li class="navigation__item">
                    <a target="_blank" href="https://github.com/WhiteSnow00" title="ギットハブ">
                      <i class="social fab fa-github" style="color:rgb(77, 77, 77)"></i>
                    </a>
                  </li>
                  <!-- Email -->
                  <li class="navigation__item">
                    <a target="_blank" href="mailto:animelovefanam@gmail.com" title="メールアドレス">
                      <i class="social fa fa-envelope" style="color:rgb(191, 146, 241)"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-cover--overlay"></div>
    </div>
  </div>
</template>

<script>
import "@/assets/js/main.js";

export default {
  name: "MainPage",
  data() {
    return {
      bg: [
        require("@/assets/images/0.jpg"),
        require("@/assets/images/1.jpg"),
        require("@/assets/images/2.jpg"),
        require("@/assets/images/3.jpg"),
        require("@/assets/images/4.jpg"),
        require("@/assets/images/5.jpg"),
        require("@/assets/images/6.jpg"),
        require("@/assets/images/7.jpg"),
        require("@/assets/images/8.jpg"),
        require("@/assets/images/9.jpg"),
      ],
      currentBg: "",
    };
  },
  methods: {
    randomBg() {
      const randomBgIndex = Math.floor(Math.random() * this.bg.length);
      this.currentBg = this.bg[randomBgIndex];
    },
  },
  mounted() {
    this.randomBg();
  },
};
</script>

<style scoped>
  /* Add the CSS styles here, if needed */
</style>
