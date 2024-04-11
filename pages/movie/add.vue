<template>
  Create a movie

  <form @submit.prevent="() => execute">
    <label for="text">Titre</label><br>
    <input type="text" name="text" v-model="movie.text" />
    <br>
    <label for="year">Année</label><br>
    <input type="number" name="year" v-model="movie.year" />
    <br>
    <label for="imageURL">Affiche (URL)</label><br>
    <input type="text" name="imageURL" v-model="movie.imageURL" />
    <br>
    <input type="submit" title="Ajouter" />
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  // middleware: 'auth' // provided by NuxtAuth module
  middleware: 'check-authenticated'
})

const movie = reactive({
  text: '',
  year: null,
  imageURL: null,
})

const { execute } = await useFetchSapiens('http://localhost:3030/movies', {
  method: 'POST',
  body: movie,
  immediate: false,
  watch: false,
})
</script>
