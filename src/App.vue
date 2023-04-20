<template>
  <div id="app">
    <MainPage />
    <ContactButtons />
    <SnowDropEffect />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import ContactButtons from './components/ContactButtons.vue';
import SnowDropEffect from './components/SnowDropEffect.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    ContactButtons,
    SnowDropEffect,
  },
};
</script>

<style>
@import '~animate.css/animate.css';
</style>
