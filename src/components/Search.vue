<template>
  <b-form
    @submit.prevent="doSearch()"
    class="search d-flex p-2 my-2 mx-auto border border-dark rounded-lg"
  >
    <b-form-input
      v-model="text"
      class="border-secondary"
      placeholder="Type here..."
    />
    <b-button
      type="submit"
      class="ml-2"
      variant="danger"
    >
      Search
    </b-button>
  </b-form>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    doSearch () {
      console.log(this.text)
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
$searchWidth: 440px;

.search{
  max-width: $searchWidth;
}

</style>
