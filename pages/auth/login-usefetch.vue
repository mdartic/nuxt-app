<template>
  <h3>Page de connexion</h3>
  <form @submit.prevent="() => execute">
    <input type="text" name="email" v-model="auth.email" /><br/>
    <input type="password" name="password" v-model="auth.password" /><br/>
    <button type="submit">Se connecter</button>

    {{ status }}
    {{ data }}
  </form>
</template>

<script setup lang="ts">
  const auth = reactive({
    email: "admin@sapiens",
    password: "supersecret",
    strategy: 'local',
  })
  const { data, error, status, execute } = await useFetch('http://localhost:3030/authentication', {
    method: 'POST',
    body: auth
  })
</script>
