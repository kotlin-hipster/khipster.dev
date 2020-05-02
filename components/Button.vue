<template>
    <a class="ma-3 flex flex-row justify-center" v-bind="$attrs">
        {{ text }}
    </a>  
</template>

<script>
export default {    
    props: ['color', 'text'],
}
</script>

<style scoped>
a {
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
}
</style>
