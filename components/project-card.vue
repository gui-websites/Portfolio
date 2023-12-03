<template>
  <Card @bg-click="emit('bg-click')" v-if="data != null">
    <div class="layout">
      <!-- Header -->
      <header class="flex items-center gap-4">
        <div
          class="aspect-square w-20 rounded-lg bg-cover bg-center bg-no-repeat md:w-32"
          :style="`background-image: url('${icon(data.logo)}')`"
        ></div>
        <div class="flex flex-grow flex-col gap-2 text-xs md:text-base">
          <h1 class="text-base font-semibold md:text-2xl">{{ data.name }}</h1>
          <p>{{ data.date }}</p>
        </div>
        <nuxt-link :to="data.link.url" target="_blank" v-if="data.link">
          <Button>
            <vue-feather type="globe" class="w-4 md:w-6" />
            <span class="hidden md:inline">Visit {{ data.link.name }}</span>
          </Button>
        </nuxt-link>
      </header>

      <!-- Skills -->
      <div class="flex gap-2 overflow-x-auto">
        <chip v-for="s in data.skills">{{ s }}</chip>
      </div>

      <!-- Description & images -->
      <div
        class="-mr-4 flex flex-col gap-4 overflow-y-auto pr-4 text-justify text-xs md:text-base"
      >
        <p>{{ data.about }}</p>
        <h3 class="text-base font-bold md:text-lg" v-if="data.images">
          Images
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <img
            v-if="data.images"
            v-for="i in data.images"
            :src="proj_img(i)"
            class="w-full rounded-lg border-2 border-black"
            alt=""
          />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
import type { ProjectPage } from "~/types";

const props = defineProps<{ project: string }>();

const data = ref<ProjectPage | null>(null);
data.value = await load<ProjectPage>(`projects/${props.project}`);
// console.log(data.value);

watch(
  () => props.project,
  async (project) => {
    console.log("Updating project card");
    data.value = await load<ProjectPage>(`projects/${project}`);
    console.log(data.value);
  },
);

const icon = (name: string) => `/images/icons/${name}`;
const proj_img = (name: string) => `/images/projects/${name}`;

const emit = defineEmits(["bg-click"]);
</script>

<style scoped>
br {
  @apply mb-2;
}

.layout {
  @apply grid w-full h-full gap-6;
  grid-template-rows: auto auto 1fr;
}
</style>
