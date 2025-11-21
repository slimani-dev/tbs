<script setup>

const { data } = await useAsyncData(() => queryCollection('weeklyLetter').first())

console.log(data.value)
</script>


<template>
  <div class="animate-fade-in">
    <h2 class="text-2xl font-bold mb-2 text-primary-DEFAULT text-center">
      الرسالة الاسبوعية
    </h2>
    <p class="text-center mb-6">
      مع إشراقة كل أسبوع، ستجدون رسالتَنا الأسبوعية نبراسًا يوجِّه العمل، ويبعث في الميدان روحًا من التفاؤل
    </p>
    <LazyClientOnly>
      <div class="space-y-6">
        <NuxtLink :to="{ name: 'news-slug', params: { slug: data.stem } }"
        >
          <WeeklyLetterCarousel
                    :images="data.images"
                    :date="data.date">
          </WeeklyLetterCarousel>
        </NuxtLink>
      </div>
    </LazyClientOnly>

    <div class="flex flex-wrap items-center justify-center mt-6 text-muted underline">
      <NuxtLink to="/activities" class="nav-button" active-class="nav-button-active">
        رسائل الاسابيع الماضية
      </NuxtLink>
    </div>
  </div>
</template>
