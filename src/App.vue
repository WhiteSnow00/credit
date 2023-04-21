<template>
  <div id="app">
    <MainPage />
    <ContactButtons />
    <SnowDropEffect />
    <SnowFlakeDrop />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import ContactButtons from './components/ContactButtons.vue';
import SnowDropEffect from './components/SnowDropEffect.vue';
import SnowFlakeDrop from './components/SnowFlakeDrop.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    ContactButtons,
    SnowDropEffect,
    SnowFlakeDrop,
  },
};
</script>

<style>
@import '~animate.css/animate.css';
</style>
