<template>
  <transition>
    <div
      class="fixed inset-0 flex items-end justify-center bg-background"
      @click="onclick"
      ref="bg"
    >
      <div
        class="slide-up-comp flex h-4/5 w-full max-w-3xl flex-col gap-6 rounded-tl-2xl rounded-tr-2xl bg-white p-4 md:p-8"
      >
        <div ref="chip" class="-my-4 w-full py-4">
          <div class="mx-auto h-1 w-1/3 rounded-full bg-black md:hidden"></div>
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const emit = defineEmits(["bg-click"]);
const swiper = new SwipeHandler();
const chip = ref<HTMLElement | null>(null);

const bg = ref();
const onclick = (e: MouseEvent) => {
  if (e.target == bg.value) emit("bg-click");
};

swiper.onSwipe((state, pos) => {
  if (!chip.value) return;

  const rect = chip.value.getBoundingClientRect();
  const on_chip =
    pos.x > rect.left &&
    pos.x < rect.right &&
    pos.y > rect.top &&
    pos.y < rect.bottom;

  if (state == "down" && on_chip) emit("bg-click");
});
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
