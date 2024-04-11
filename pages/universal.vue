<template>
  Universal

  Both working at the server & client side.
  Use, eg., a timeout ?

  {{  time  }}
</template>

<script setup lang="ts">
let time = ref(0)
const stopTimer = ref(false)
console.log(import.meta.client, import.meta.server)
function timer() {
  setTimeout(() => {
    time.value++
    // recreate another timer when called,
    // unless stopTimer is true, i.e. when user change the page
    if (!stopTimer.value) timer()
  }, 1000);
}
timer()

onUnmounted(() => {
  stopTimer.value = true
})
</script>
