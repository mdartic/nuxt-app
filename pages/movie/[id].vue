<template>
  <main>
    <NuxtPicture
      v-if="movie.imageURL"
      :src="movie.imageURL"
      width="400px"
      sizes="400px"
    />
    <div style="margin: 0 1rem;">
      <p>
        {{ movie.text }}
        <span v-if="movie.year">
          ({{movie.year}})
        </span>
      </p>
      <p>
        {{ movie.author}}
      </p>
    </div>
  </main>
</template>


<script setup lang="ts">
const movie = ref({})
/**
 * Load data from the web
 * classicly, without their fetch
 */
const route = useRoute()
const { data } = await useFetch('http://localhost:3030/movies/' + route.params.id)
movie.value = data.value

useSeoMeta({
  title: () => movie.value.text || 'Titre en cours de chargement...',
  ogTitle: () => movie.value.text || 'Titre en cours de chargement...',
  author: () => movie.value.author || 'Auteur inconnu',
})
</script>

<style scoped>
main {
  display: flex;
}

</style>
