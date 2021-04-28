<template>
  <b-container
    class="home p-5"
    fluid="lg"
  >
    <Logo />
    <Search />
  </b-container>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Search
  }
}
</script>
