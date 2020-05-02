<template>
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
            <a href="/">
              <Logo />
            </a>
        </div>
      </header>
    </div>

</template>

<script>
import Logo from '~/components/Logo';
export default {
    components: {
        Logo
    }
}
</script>

<style scoped>
.container {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 130px;
}
</style>