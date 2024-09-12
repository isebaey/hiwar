<script setup>
import MainSidebarVue from "./components/MainSidebar.vue";
</script>

<template>
  <div class="flex">
    <!-- Sidebar Component -->
    <MainSidebarVue />

    <!-- Main Content -->
    <main class="flex-1">
      <header>
        <h1 class="bg-red-500 text-center text-2xl p-4">Hello Vue!</h1>
      </header>

      <section class="p-10">
        <p>This is the main content area of your application.</p>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
