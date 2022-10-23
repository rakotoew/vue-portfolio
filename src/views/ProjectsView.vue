<template>
  <div>
    <h1>Mes projets notables :</h1>
    <div class="card-holder">
      <RouterLink to="/projects/pec" class="card">
          <h2>Private Encrypted Cloud</h2>
          <span>React & Nest</span>
          <p>
            Project d'un cloud avec un chiffrement bout-en-bout pour stocker et
            partager des données de façon sécuriser
          </p>
      </RouterLink>
      <RouterLink to="/projects/byod" class="card">
        <h2>BYOD</h2>
        <span class="blue">C#, Unity</span>
        <p>
          Jeux sérieux réaliser avec Unity dans le but d'avoir un jeux crossplatform
        </p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card-holder {
  display: flex;
  flex-direction: row;
}

RouterLink{
}

.card {
  background: var(--vt-c-black-soft);
  padding: 5px;
  text-decoration: none;
  margin: 1rem;
  text-align: left;
  border-radius: 10px;
  width: 25%;
}

.card h2{
  color: var(--vt-c-text-dark-1);
}

.card span{
  color: cadetblue;
}

.card p{
  color: var(--vt-c-text-dark-2)
}
</style>
