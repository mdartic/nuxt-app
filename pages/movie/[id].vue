<template>
  <main>
    <NuxtPicture
      v-if="movie.imageURL"
      :src="movie.imageURL"
      width="400px"
      sizes="400px"
    />
    <template style="margin: 0 1rem;">
      <p>
        {{ movie.text }}
        <span v-if="movie.year">({{movie.year}})</span>
      </p>
      <p>
        {{ movie.author}}
      </p>
    </template>
  </main>
</template>


<script setup lang="ts">

/**
 * Load data from the web
 * classicly, without their fetch
 */
const route = useRoute()
const { data: movie } = await useFetch('http://localhost:3030/movies/' + route.params.id)

useSeoMeta({
  title: () => movie.value.text || 'Titre en cours de chargement...',
  ogTitle: () => movie.value.text || 'Titre en cours de chargement...',
})
</script>

<style scoped>
main {
  display: flex;
}

</style>
