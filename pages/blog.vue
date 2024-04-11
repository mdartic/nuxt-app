<template>
  <div>
    <h2>Blog</h2>

    <p>
      Voici l'ensemble des articles de blog publié sur ce TP.
    </p>

    <main v-if="navigation?.[0].children?.length">
      <a
        v-for="article in navigation?.[0].children"
        :href="article._path"
      >
        <div class="blog-article">
          <h3>{{ article.title }}</h3>
          <p>{{  article.description }}</p>
        </div>
      </a>
    </main>
    <p v-else>
      Aucun article de blog n'a été publié !
    </p>

  </div>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(queryContent('blog')))
</script>

<style scoped>
.blog-article {
  height: 200px;
  width: calc(960px / 4 - 4rem);
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0 1rem;
  margin-bottom: .5rem;
  margin-right: .5rem;
}
.blog-article:hover {
  border-color: gray;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
main {
  display: flex;
  flex-wrap: wrap;
}
</style>
