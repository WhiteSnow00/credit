<template>
  <div id="app">
    <MainPage />
    <ContactButtons />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import ContactButtons from './components/ContactButtons.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    ContactButtons,
  },
};
</script>

<style>
@import '~animate.css/animate.css';
</style>
