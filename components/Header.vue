<template>
  <header>
    <div class="content">
      <NuxtLink
                class="nuxt-link" to="/">
        <NuxtPicture
          src="/makina_sapiens.png"
          sizes="200px"
          :style="{
            margin: '1rem'
          }"
        />
      </NuxtLink>
      <div>
        <NuxtLink
                              class="nuxt-link"
          to="/"
        >
          Home
        </NuxtLink>
        <NuxtLink
                              class="nuxt-link"
          to="/blog"
        >
          Blog
        </NuxtLink>
        <NuxtLink
                              class="nuxt-link"
          to="/csr"
        >
          CSR
        </NuxtLink>
        <NuxtLink
                              class="nuxt-link"
          to="/ssr"
        >
          SSR
        </NuxtLink>
        <NuxtLink
                              class="nuxt-link"
          to="/usefetch"
        >
          useFetch
        </NuxtLink>
        <NuxtLink
                              class="nuxt-link"
          to="/universal"
        >
          Universal
        </NuxtLink>
        <NuxtLink
          class="nuxt-link"
          to="/auth/login"
          v-if="!isAuthenticated"
        >
          S'identifier
        </NuxtLink>
        <NuxtLink
          class="nuxt-link"
          to="/auth/login-usefetch"
          v-if="!isAuthenticated"
        >
          S'identifier useFetch
        </NuxtLink>
        <NuxtLink
          class="nuxt-link"
          to="/auth/account"
          v-if="isAuthenticated"
        >
          {{ userEmail }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps(['isAuthenticated', 'userEmail'])
</script>

<style scoped>
header {
  padding: 1rem;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: auto;
  border-bottom: 2px solid lightgray;
}

</style>
