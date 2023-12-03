<template>
  <main
    class="mx-auto flex h-full min-h-full w-full max-w-7xl flex-col justify-between p-4 md:max-h-full md:flex-row md:gap-20"
  >
    <header class="my-16 h-1/4 md:my-auto">
      <h1 class="title mb-10 text-5xl font-semibold">
        Hey there!<br />I'm
        <!-- <span class="cursor-pointer border-b-2 border-black">Guillaume</span> -->
        <span>Guillaume</span>
      </h1>
      <Button class="text-xl md:px-8 md:text-2xl" @click="showAboutCard = true">
        Whoami / Contact
      </Button>
    </header>

    <div class="no-scroll h-full pb-4 md:w-3/5 md:overflow-y-scroll md:pb-0">
      <section class="relative flex gap-4 md:gap-6 md:py-48">
        <div id="left" class="col">
          <Bloc
            img="/images/icons/vr-hud.png"
            @click="popup('vr-hud')"
            shape="square"
          />
          <Bloc img="/images/icons/percu.png" @click="popup('percu')" />
          <Bloc img="/images/icons/sfinder.png" @click="popup('sfinder')" />
        </div>

        <div id="right" class="col">
          <Bloc
            img="/images/icons/posh-michael.png"
            @click="popup('descent')"
          />
          <Bloc img="/images/icons/superedt.png" @click="popup('super-edt')" />
          <Bloc
            img="/images/icons/youpssitech.jpg"
            @click="popup('youpssitech')"
          />
          <Bloc />
        </div>
      </section>
    </div>
  </main>

  <project-card
    v-show="showCard"
    @bg-click="showCard = false"
    :project="project_name"
  ></project-card>
  <about-card v-show="showAboutCard" @bg-click="showAboutCard = false" />
</template>

<script setup lang="ts">
const showCard = ref(false);
const showAboutCard = ref(false);
const project_name = ref<ProjectName>(null);

useHead({
  title: "Guillaume-prog",
});

type ProjectName =
  | "super-edt"
  | "sfinder"
  | "descent"
  | "percu"
  | "youpssitech"
  | "vr-hud"
  | null;

const popup = (p: ProjectName) => {
  console.log("click", project_name.value);
  project_name.value = p;
  showCard.value = true;
};
</script>

<style scoped>
.col {
  @apply flex h-full flex-grow flex-col items-center gap-4 md:gap-6;
}

.title {
  line-height: 1.25;
}

.no-scroll {
  scrollbar-width: none;
}

.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>
