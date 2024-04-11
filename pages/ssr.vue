<template>
  SSR

  Make something on the server side, and check it's working on the client side,
  eg. loading data from the selected API
  {{ isAuthenticated }}
  <Movies
    :movies="json?.data"
    :items-per-page="json?.limit"
    :total="json?.total"
    :is-authenticated="isAuthenticated"
  />

  <NuxtLink href="/movie/add">
    <button>Ajouter un film</button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps(['isAuthenticated'])
/**
 * Load data from the web
 * classicly, without their fetch
 */
const json = ref<{
  data: any[],
  total: number,
  limit: number,
  skip: number
} | null>(null)
const res = await fetch('http://localhost:3030/movies')
json.value = await res.json()
</script>
