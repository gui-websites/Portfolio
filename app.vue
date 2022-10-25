<template>
  <main
    class="mx-auto flex h-full w-full max-w-7xl flex-col justify-between p-4 md:flex-row md:gap-20"
  >
    <header class="my-16 h-1/4 md:my-auto">
      <h1 class="title mb-10 text-5xl font-semibold">
        Hey there!<br />I'm
        <span
          class="cursor-pointer border-b-2 border-black"
          @click="showAboutCard = true"
          >Guillaume</span
        >
      </h1>
      <Button class="text-xl md:px-8 md:text-2xl">Get in touch</Button>
    </header>

    <div class="no-scroll h-full overflow-y-scroll md:w-3/5">
      <section class="relative flex gap-4 md:gap-6 md:py-48">
        <div id="left" class="col">
          <Bloc
            img="/images/superedt.png"
            @click="popup('super-edt')"
            shape="square"
          />
          <Bloc img="/images/sfinder.png" @click="popup('sfinder')" />
          <Bloc />
        </div>

        <div id="right" class="col">
          <Bloc img="/images/posh-michael.png" @click="popup('descent')" />
          <Bloc img="/images/percu.png" @click="popup('percu')" />
          <Bloc img="/images/youpssitech.jpg" @click="popup('youpssitech')" />
        </div>
      </section>
    </div>
  </main>

  <Card v-show="showCard" @bg-click="showCard = false"> {{ project }} </Card>
  <about-card v-show="showAboutCard" @bg-click="showAboutCard = false" />
</template>

<script setup lang="ts">
const showCard = ref(false);
const showAboutCard = ref(false);
const project = ref<Project>();

type Project = "super-edt" | "sfinder" | "descent" | "percu" | "youpssitech";
const popup = (p: Project) => {
  showCard.value = true;
  project.value = p;
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
