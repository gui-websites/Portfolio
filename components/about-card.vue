<template>
  <Card @bg-click="emit('bg-click')">
    <!-- Header -->
    <header class="flex items-center gap-4">
      <img
        src="/images/face.jpg"
        class="aspect-square w-20 rounded-lg md:w-32"
        alt=""
      />
      <div class="flex flex-grow flex-col gap-2 text-xs md:text-base">
        <h1 class="text-base font-semibold md:text-2xl">{{ data.name }}</h1>
        <p>{{ birthyear(data.birthday) }}-now ({{ age(data.birthday) }} yo.)</p>
        <p>{{ data.pronouns }}</p>
      </div>
      <nuxt-link :to="`mailto:${data.email}`">
        <Button>
          <vue-feather type="send" class="w-4 md:w-6" />
          <span class="hidden md:inline">Send an email</span></Button
        >
      </nuxt-link>
    </header>

    <!-- Social links -->
    <div class="flex gap-2 overflow-x-auto">
      <nuxt-link v-for="s in data.socials" :to="s.link" target="_blank">
        <chip>
          <vue-feather :type="icon(s.name)" size="16" />
          <!-- <span class="inline text-xs md:hidden">{{ s.name }}</span> -->
          <span class="hidden md:inline">{{ s.tag }}</span>
        </chip>
      </nuxt-link>
    </div>

    <!-- Description -->
    <div class="overflow-y-auto text-justify text-xs md:text-base">
      <p>{{ data.about }}</p>
      <!-- <div class="mt-4">
        <h3 class="mb-2 font-semibold">Credits</h3>
        <p>Photograph of face by <b>@southwest_astro</b></p>
        <p>Descent illustration by <b>I love waтer#3168</b></p>
      </div> -->
    </div>
  </Card>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
import { AboutPage } from "~/types";

const data = await load<AboutPage>("about");

const birthyear = (birthday: string) => birthday.split("-").pop();

const age = (birthday: string) => {
  const [d, m, y] = birthday.split("-").map((x) => parseInt(x));
  const bday = new Date(y, m - 1, d);

  var diffYear = (Date.now() - bday.getTime()) / 1000;
  diffYear /= 60 * 60 * 24;
  return Math.abs(Math.round(diffYear / 365.25));
};

const icon = (name: string) => name.toLocaleLowerCase();

const emit = defineEmits(["bg-click"]);
</script>

<style scoped>
br {
  @apply mb-2;
}
</style>
