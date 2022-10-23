<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      Vous naviguez actuellement sur le portfolio d'<strong>Ewan Rakotoanosy</strong>
      réalisé grace à
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 200;
  font-size: 2.6rem;
  top: -10px;
}

strong {
  font-weight: bolder;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
