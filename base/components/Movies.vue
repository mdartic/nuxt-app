<template>
  <main v-if="movies">
    <NuxtLink
      v-for="m in movies"
      class="card-movie"
      :href="'/movie/' + m.id"
    >
      <NuxtPicture
        v-if="m.imageURL"
        :src="m.imageURL"
        width="200px"
        sizes="200px"
        class="card-image"
      />
      <p class="card-title">
        {{ m.text }}
        <span v-if="m.year">({{m.year}})</span>
      </p>
    </NuxtLink>

    <NuxtLink
      class="card-movie add-one"
      href="/movie/add"
      v-if="isAuthenticated"
    >
      <p class="card-title">
        Ajouter un nouveau film
      </p>
    </NuxtLink>

    {{  isAuthenticated  }}
  </main>

  <p v-else>
    Aucun film à afficher
  </p>
</template>

<script setup lang="ts">
  defineProps([
    'total',
    'limit',
    'movies',
    'isAuthenticated'
  ])
  defineEmits(['update:page'])
</script>

<style scoped>
table {
  width: 600px;
  margin: auto;
}
main {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
}
.card-movie {
  width: 200px;
  height: 300px;
  position: relative;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
}
.card-movie:hover {
  box-shadow: 0px 0px 5px 5px rgb(0 0 0 / 0.1);
}
.card-movie.add-one {
  background-color: lightblue;
}
.card-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
  border-radius: 5px;
}
.card-title {
  background-color: white;
  color: black;
  text-align: center;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 0.1);
}
</style>
