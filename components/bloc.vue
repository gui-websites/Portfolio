<template>
  <div
    class="bloc"
    :style="bg"
    :class="{
      'aspect-square': shape == 'square',
      'aspect-bloc': shape == 'bloc',
      animate: img != '',
    }"
  ></div>
</template>

<script setup lang="ts">
type Shape = "square" | "bloc";
const props = withDefaults(defineProps<{ img?: string; shape?: Shape }>(), {
  shape: "bloc",
  img: "",
});

const bg = computed(() => `background-image: url("${props.img}");`);
</script>

<style scoped>
.bloc {
  @apply w-full cursor-pointer rounded-lg border-2 border-black bg-gray bg-cover bg-center;
}

.animate {
  @apply transition-transform hover:-translate-y-2;
}

.aspect-bloc {
  aspect-ratio: 4/3;
}
</style>
