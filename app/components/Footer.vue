<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="text-center py-6 mt-8">

    <!--
    <div class="flex flex-wrap items-center justify-center">
      <NuxtLink to="/activities" class="nav-button" active-class="nav-button-active">الأنشطة</NuxtLink>
      <NuxtLink to="/instructions" class="nav-button" active-class="nav-button-active">تعليمات</NuxtLink>
    </div>
    -->

    <p class="text-sm text-muted">
      &copy; {{ currentYear }} متوسطة الطيب ابراهيم شريفة. كل الحقوق محفوظة.
    </p>
  </footer>
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
