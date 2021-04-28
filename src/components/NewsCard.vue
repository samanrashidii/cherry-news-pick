<template>
  <b-card>
    <!-- Image -->
    <b-link
      :href="news.url"
      target="_blank"
    >
      <b-card-img
        :src="news.urlToImage"
        :alt="news.title"
        class="rounded-0"
      />
    </b-link>
    <!-- Title -->
    <b-card-title
      class="mt-1"
    >
      <b-link
        :href="news.url"
        target="_blank"
        class="text-danger"
      >
        {{ news.title | truncate(50) }}
      </b-link>
    </b-card-title>
    <!-- Brief -->
    <b-card-text>
      {{ news.description }}
    </b-card-text>
    <!-- Date -->
    <b-card-text
      class="small text-muted"
    >
      {{ news.publishedAt | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    news: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
