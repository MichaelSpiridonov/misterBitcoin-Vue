<template>
  <article class="contact-preview">
    <img  :src="`https://robohash.org/${contact._id}.png?set=set2`" />
    <h1>{{ contact.name }}</h1>
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.contact-preview {
  flex-grow: 1;
  display: flex;
  h1 {
    padding-left: 10px;
    flex-grow: 1;
  }
  img {
    align-self: center;
    height: 40px;
  }
}
</style>
