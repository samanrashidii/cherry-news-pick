<template>
  <div class="home">
    <img
      width="100"
      src="@/assets/logo.svg"
      alt="Cherry Logo"
    >
    <Search />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    Search
  }
}
</script>
