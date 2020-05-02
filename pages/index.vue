<template>
    <!-- <div class="hero-body container">
      <h1 class="title">
        
      </h1>
      <h2 class="subtitle">
        
      </h2>
      
    </div> -->

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          KHipster
        </h1>
        <h2 class="subtitle">
          Full Stack Application with Kotlin
        </h2>

        <div class="diff">
          <p> npm i -g generator-jhipster-kotlin </p>
        </div>

        <div class="links">
          <a
              href="https://github.com/jhipster/jhipster-kotlin"
              target="_blank"
              text="GitHub"
              class="button gh"
            > GitHub </a>

            <a
              href="https://asciinema.org/a/dvESXUMGHqxCORGqpz1294kf6"
              target="_blank"
              class="button ascii"
            > Demo </a>

            <a
              href="https://twitter.com/kotlin-hipster"
              target="_blank"
              class="button tw"
            > Twitter </a>
        </div>
      </div>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style>

.diff {
  padding: 0.25rem;
}

p {
  font-size: 1rem;
}


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #35495e;
  letter-spacing: 1px;
  font-weight: bold;
}


.title:hover {
  background: linear-gradient(90deg, rgba(12,149,211,1) 0%, rgba(76,128,193,1) 6%, rgba(106,113,181,1) 20%, rgba(119,109,178,1) 33%, rgba(183,93,164,1) 43%, rgba(208,97,155,1) 52%, rgba(225,115,92,1) 68%, rgba(237,126,45,1) 81%, rgba(244,134,32,1) 94%, rgba(246,137,31,1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.image {
  background-color: white;
  color: white;
}

.subtitle {
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
}

.button:hover {
  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
  transition: box-shadow .2s, color 450ms, background-color 300ms ease-in;
}

.gh {
  border: 1px solid #1B1F23;
  color: #1B1F23;
}

.gh:hover {
  color: #fff;
  border: 1px solid #1B1F23;
  background-color: #1B1F23;
}

.tw {
  border: 1px solid #00acee;
  color: #00acee;
}

.tw:hover {
  color: #fff;
  background-color:  #00acee;
  border: 1px solid #00acee;
}

.ascii {
  border: 1px solid #776DB2;
  color: #776DB2;
}

.ascii:hover {
  color: #fff;
  background-color:  #776DB2;
  border: 1px solid #776DB2;
}
</style>
