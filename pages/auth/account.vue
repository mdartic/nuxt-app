<template>
    <h3>Page de gestion de mon compte</h3>

    <p>Statut de l'authent : {{ status }}</p>
    <p>Données utilisateur : {{ data }}</p>
    <p><button @click="signOut">Se déconnecter</button></p>
</template>

<script setup lang="ts">
  const { status, data, signOut } = useAuth()
</script>
