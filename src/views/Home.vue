<template>
  <b-container
    class="home p-4"
    fluid
  >
    <div
      class="d-flex justify-content-center"
    >
      <Logo />
      <Search />
    </div>

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
