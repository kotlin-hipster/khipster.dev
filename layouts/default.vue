<template>
  <section class="hero is-fullheight">
    <Header />
    <nuxt />
    <Footer />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
h1.title {
    font-size: 2.25rem;
}

h2.subtitle {
    font-size: 1.25rem;
}

a {
    font-size: 1rem;
}

@media (min-width: 414px){
  h1.title {
    font-size: calc(2.25rem + (((100vw - 20rem) / (90 - 20))) * (4.75 - 2.25));
  }

  h2.subtitle {
    font-size: calc(1.25rem + (((100vw - 20rem) / (90 - 20))) * (2.5 - 1.25));
  }
}

@media (min-width: 1440px){
  h1.title {
    font-size: 4.75rem;
  }

  h2.subtitle {
    font-size: 2.5rem;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
