<template>
  <div>
    <Header
      :is-authenticated="isAuthenticated"
      :user-email="data?.email"
    />
    <main>
      <NuxtPage
        :is-authenticated="isAuthenticated"
      />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Formation Nuxt Sapiens',
  ogTitle: 'Formation Nuxt Sapiens',
  description: 'Site du TP de la formation Nuxt Sapiens',
  ogDescription: 'Site du TP de la formation Nuxt Sapiens',
  ogImage: 'http://mc-nuxt.surge.sh/images/MC_Formation_Logo_Horizontal_Quadri.svg',
  twitterCard: 'summary_large_image',
})

const { status, data } = useAuth()

const isAuthenticated = computed(() => status.value === 'authenticated')
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  font-family: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
}
body, #__nuxt {
  min-height: 100vh;
}
html {
	line-height: 1.5;
	-webkit-text-size-adjust: 100%;
	-moz-tab-size: 4;
	tab-size: 4;
	font-feature-settings: normal;
	font-variation-settings: normal;
}
a {
  color: inherit;
  text-decoration: inherit;
}

/* visited link */
a:link,
a:visited {
  color: blue;
}

/* mouse over link */
a:hover {
  color: darkblue;
  text-decoration: underline;
}

/* selected link */
a:active {
  color: blue;
}

.nuxt-link {
  margin: 0.5rem;
}

.router-link-active.router-link-exact-active.nuxt-link {
  text-decoration: underline;
}
</style>

<style scoped>
div {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  width: 960px;
  padding: 0 2rem;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
