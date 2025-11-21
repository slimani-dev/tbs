<script setup lang="ts">

const route = useRoute()

const { data: post } = await useAsyncData(() => queryCollection('news').where('stem', '=', route.params.slug).first())

console.log(post.value)

</script>

<template>

  <article class="text-right space-y-6" v-if="post">
    <div class="">
      <h3 class="text-xl font-bold">{{ post.title }}</h3>
      <p class="text-sm text-muted-foreground mt-1 mb-3">{{ post.date }}</p>
      <p class="leading-relaxed">
        {{ post.description }}
      </p>
    </div>

    <img :src="post.cover" alt="" class="aspect-video w-full rounded-t-lg object-cover">


    <div class="prose dark:prose-invert">
      <ContentRenderer :value="post" />
    </div>
  </article>

</template>

<style scoped>

</style>
