<script lang="ts" setup>
const search  = ref('')
const results = ref([])
async function onClick() {
  results.value = await searchContent(search.value)
}
</script>

<template>
  <main>
    <input v-model="search">
    <button @click="onClick">Chercher</button>

    <pre>{{ results }} </pre>
  </main>
</template>
