<template>
  <header v-if="$route.path.startsWith('/blog')">
    <NuxtLink href="/blog">
      < Blog
    </NuxtLink>
  </header>
  <main>
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('my-page', queryContent('/').findOne)

console.log(page)
useContentHead(page)
</script>

<style scoped>
h1 {
  font-weight: 600;
  text-align: center;
}
</style>
