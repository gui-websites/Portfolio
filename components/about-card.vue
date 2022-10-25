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
        <h1 class="text-base font-semibold md:text-2xl">Guillaume Roussin</h1>
        <p>2002-now ({{ age("22-06-2002") }} yo.)</p>
        <p>He/Him</p>
      </div>
      <Button>
        <vue-feather type="send" class="w-4 md:w-6" />
        <span class="hidden md:inline">Send an email</span></Button
      >
    </header>

    <!-- Social links -->
    <div class="flex gap-2 overflow-x-auto">
      <chip v-for="s in socials">
        <vue-feather :type="s.icon" size="16" />
        <!-- <span class="inline text-xs md:hidden">{{ s.name }}</span> -->
        <span class="hidden md:inline">{{ s.tag }}</span>
      </chip>
    </div>

    <!-- Description -->
    <div class="overflow-y-auto text-justify text-xs md:text-base">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi,
        porro cumque labore provident esse? Ratione eligendi odit quod unde quis
        sed, ad animi esse sit aspernatur cumque cum pariatur? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Iste commodi, porro cumque labore
        provident esse? Ratione eligendi odit quod unde quis sed, ad animi esse
        sit aspernatur cumque cum pariatur? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iste commodi, porro cumque labore
        provident esse? Ratione eligendi odit quod unde quis sed, ad animi esse
        sit aspernatur cumque cum pariatur? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iste commodi, porro cumque labore
        provident esse? Ratione eligendi odit quod unde quis sed, ad animi esse
        sit aspernatur cumque cum pariatur?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi,
        porro cumque labore provident esse? Ratione eligendi odit quod unde quis
        sed, ad animi esse sit aspernatur cumque cum pariatur?
      </p>
      <div class="mt-4">
        <h3 class="mb-2 font-semibold">Credits</h3>
        <p>Photograph of face by <b>@southwest_astro</b></p>
        <p>Descent illustration by <b>I love waтer#3168</b></p>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";

const age = (birthday: string) => {
  const [d, m, y] = birthday.split("-").map((x) => parseInt(x));
  const bday = new Date(y, m - 1, d);

  var diffYear = (Date.now() - bday.getTime()) / 1000;
  diffYear /= 60 * 60 * 24;
  return Math.abs(Math.round(diffYear / 365.25));
};

type Social = { name: string; tag: string; icon: string };
const socials: Social[] = [
  { name: "GitHub", tag: "Guillaume-prog", icon: "github" },
  { name: "Instagram", tag: "french.fry.06", icon: "instagram" },
  { name: "LinkedIn", tag: "Guillaume Roussin", icon: "linkedin" },
];

const emit = defineEmits(["bg-click"]);
</script>

<style scoped>
br {
  @apply mb-2;
}
</style>
