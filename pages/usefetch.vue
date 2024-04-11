<template>
  useFetch

  avoid to make the call to the API both client & server side

  call once the API<br/>

  Pending: {{ pending }} <br/>
  Status: {{ status }} <br/>

  <Movies :movies="movies?.data"></Movies>

  <NuxtLink href="/movie/add">
    <button>Ajouter un film</button>
  </NuxtLink>

</template>

<script setup lang="ts">
const {
  data: movies,
  pending,
  status,
} = await useFetch('http://localhost:3030/movies')

</script>
