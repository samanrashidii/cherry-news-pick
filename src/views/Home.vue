<template>
  <b-container
    @scroll="console.log('asdad')"
    class="home p-5"
    fluid="lg"
  >
    <Logo />
    <Search
      @do-search="searchNews"
    />
    <b-card-group
      class="mt-5"
      columns
    >
      <template
        v-if="allNews && allNews.length > 0"
      >
        <NewsCard
          v-for="(news, index) in allNews"
          :news="news"
          :key="index"
        />
      </template>
    </b-card-group>
    <div
      v-if="isLoading"
      class="text-center mt-5"
    >
      <b-spinner
        type="grow"
        variant="danger"
      />
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Logo from '@/components/Logo.vue'
import Search from '@/components/Search.vue'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    NewsCard
  },
  data () {
    return {
      isLoading: false,
      keyword: '',
      pageSize: 27,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters({
      allNews: 'news/allNews'
    })
  },
  methods: {
    ...mapActions({
      getAllNews: 'news/getAllNews'
    }),
    searchNews (data) {
      this.keyword = data
      // Required data before calling API
      const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000))
      const query = {
        q: this.keyword,
        from: yesterday,
        pageSize: this.pageSize,
        page: this.pageNumber,
        sortBy: 'popularity',
        apiKey: '713aa40a3cb4450fa3040457c80967cc'
      }
      // Call API to get all News
      this.isLoading = true
      this.getAllNews(query)
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
