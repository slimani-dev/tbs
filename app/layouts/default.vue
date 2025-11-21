<script setup>

</script>

<template>
  <div class="container mx-auto max-w-2xl p-4 min-h-screen flex flex-col">
    <main class="w-full flex-grow">
      <Header/>
      <!--<Navbar />-->
      <div class="mt-8">
        <slot/>
      </div>
    </main>
    <Footer/>
  </div>
</template>


