<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <div class="desc">
      <img
          title="Ewan Rakotoanosy au Wicklow Moutains National Park"
          alt="Profile Picture"
          class="profile"
          src="@/assets/profile.png"
          width="250"
          height="250"
      />
      <div>
        <h1>Ewan Rakotoanosy</h1>
        <h3>Développeur Full Stack</h3>
        <h4>Etudiant en Master à l'Université Savoie Mont Blanc</h4>
      </div>
    </div>
  </main>
</template>

<style scoped>
.desc {
  display: flex;
}

.profile {
  border-radius: 40%;
  display: block;
  margin: 0 10px 2rem;
}
</style>
