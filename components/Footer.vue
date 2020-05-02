<template>
    <div class="hero-foot">
      created with &nbsp; <a href="https://www.jhipster.tech">JHipster</a>
    </div>
</template>

<style scoped>
  .hero-foot {
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    padding: 2rem;
    animation: .3s pull-in;
  }

  @keyframes pull-in {
    0% {
      transform: translateY(100px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid rgba(40,54,72,0.2);
    color: #272727;
  }

  a:hover {
    padding: 0 16px;
    color: #fff;
    background-color: #272727;
    border-bottom: 1px solid #0d5a9c;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
    transition: box-shadow .2s, color 450ms, padding .2s ease-out, background-color 300ms ease-in;
  }

</style>