<template>
  <b-container
    class="home p-5"
    fluid="lg"
  >
    <Logo />
    <Search />
    <b-card-group
      class="mt-5"
      columns
    >
      <NewsCard
        :news="{}"
      />
    </b-card-group>
  </b-container>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Search from '@/components/Search.vue'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    NewsCard
  }
}
</script>
