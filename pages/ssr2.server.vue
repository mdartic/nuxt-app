<template>
  <div>SSR 2
    {{  json  }}
  </div>
</template>

<script setup lang="ts">
console.log("ssr2", import.meta.client, import.meta.server)
console.log("toto")
const json = ref<{
  data: any[],
  total: number,
  limit: number,
  skip: number
} | null>(null)
const res = await fetch('http://localhost:3030/movies')
json.value = await res.json()
</script>
