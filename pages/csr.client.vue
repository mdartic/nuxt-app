<template>
  CSR
  Only on client side

  Make something reactive here, analyze it without JavaScript enabled in the browser to see it's not working.

  <Movies :movies="json?.data"></Movies>

  <NuxtLink href="/movie/add">
    <button>Ajouter un film</button>
  </NuxtLink>

</template>

<script setup lang="ts">

/**
 * Load data from the web
 * classicly, without their fetch
 */
const res = await fetch('http://localhost:3030/movies')
const json = await res.json()

</script>
