<template>
  <nav
      class="mt-8 p-2 bg-card-light dark:bg-card-dark rounded-lg shadow-sm flex items-center justify-center gap-2">
    <NuxtLink to="/" class="nav-button" active-class="nav-button-active">الرئيسية</NuxtLink>
    <NuxtLink to="/content/news" class="nav-button" active-class="nav-button-active">الأخبار</NuxtLink>
    <NuxtLink to="/about" class="nav-button" active-class="nav-button-active">حول المدرسة</NuxtLink>
    <NuxtLink to="/contact" class="nav-button" active-class="nav-button-active">اتصل بنا</NuxtLink>
  </nav>
</template>

<style scoped>

@reference "@/assets/css/tailwind.css";

.nav-button {
  @apply px-4 py-2 rounded-md  text-sm font-bold transition-colors duration-300 text-muted-foreground hover:bg-gray-200;
}

.nav-button-active {
  @apply bg-primary text-primary-foreground shadow-md hover:text-muted-foreground;
}
</style>
<script setup lang="ts">
</script>
