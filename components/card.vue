<template>
  <transition>
    <div
      class="absolute inset-0 flex items-end justify-center bg-background px-4"
      @click="onclick"
      ref="bg"
    >
      <div
        class="slide-up-comp flex h-4/5 w-full max-w-3xl flex-col gap-6 rounded-tl-2xl rounded-tr-2xl bg-white p-4 md:p-8"
      >
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const emit = defineEmits(["bg-click"]);

const bg = ref();
const onclick = (e: MouseEvent) => {
  if (e.target == bg.value) emit("bg-click");
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.25);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 300ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active .slide-up-comp,
.v-leave-active .slide-up-comp {
  transition: all 300ms ease-in-out;
}

.v-enter-from .slide-up-comp,
.v-leave-to .slide-up-comp {
  transform: translateY(100%);
}
</style>
