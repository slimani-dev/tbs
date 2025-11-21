<template>
  <header class="flex flex-col items-center text-center">
    <div class="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden mb-[-48px] shadow-lg">
      <img
        alt="A vibrant collage of school supplies"
        class="w-full h-full object-cover"
        src="/img/banner.jpg"
      />
    </div>
    <NuxtLink to="/" class="relative">
      <img
        alt="Al-Tayeb Ibrahim Cherifa Middle School Logo"
        class="w-24 h-24 rounded-full border-4 border-background-light dark:border-background-dark bg-white object-cover"
        src="/img/logo.jpg"
      />
    </NuxtLink>
    <section class="text-center mt-4 px-4">
      <h1 class="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark">
        متوسطة الطيب ابراهيم شريفة
      </h1>
      <p class="text-muted mt-1 max-w-md">
        الصفحة الرسمية لمتوسطة الطيب إبراهيم شريفة، لغرز العلم لترقى القيم، ونبني مستقبلا مشرقا
      </p>
    </section>
  </header>
</template>
