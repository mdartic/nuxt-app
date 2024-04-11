<template>
  Page 1 prerendered

  Check the content will be available once generated.

  <table v-if="json">
    <tr>
      <th>Id</th>
      <th>Titre</th>
      <th>Auteur</th>
      <th>Année</th>
    </tr>
    <tr v-for="d in json.data">
      <td>{{ d.id }}</td>
      <td>{{ d.text }}</td>
      <td>{{ d.author }}</td>
      <td>{{ d.year }}</td>
      <td>
        <a
          :href="d.imageURL"
          v-if="d.imageURL"
          target="_blank"
        >
          <NuxtPicture
            :src="d.imageURL"
            width="100"
            sizes="100px"
          />
        </a>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">

/**
 * Load data from the web
 * classicly, without their fetch
 */
const res = await fetch('http://localhost:3030/movies')
const json = await res.json()

</script>