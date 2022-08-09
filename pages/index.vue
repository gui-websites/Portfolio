<template>
  <h1>Hello world</h1>

  <nuxt-content :document="page"></nuxt-content>
</template>

<script setup lang="ts">
  const page = await getContent('home').fetch();
</script>
