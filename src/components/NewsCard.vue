<template>
  <b-card>
    <!-- Image -->
    <b-link
      href="https://www.google.com"
      target="_blank"
    >
      <b-card-img
        src="https://placekitten.com/g/400/450"
        alt="Image"
        class="rounded-0"
      />
    </b-link>
    <!-- Title -->
    <b-card-title>
      <b-link
        href="https://www.google.com"
        target="_blank"
        class="text-danger"
      >
        Card title that wraps to a new line
      </b-link>
    </b-card-title>
    <!-- Brief -->
    <b-card-text>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </b-card-text>
    <!-- Date -->
    <b-card-text
      class="small text-muted"
    >
      Last updated 3 mins ago
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
