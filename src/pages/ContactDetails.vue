<template>
  <RouterLink to="/contact"
    ><button class="back-btn">
      <img src="@/assets/back.png" /> Back
    </button></RouterLink
  >
  <section
    v-if="contact"
    class="contact-details"
  >
    <img
      class="contact-img"
       :src="`https://robohash.org/${contact._id}.png?set=set2`"
    />
    <h2>{{ contact.name }}</h2>
    <h2>{{ contact.email }}</h2>
    <h2>{{ contact.phone }}</h2>
  </section>
  <p v-else>Loading...</p>
</template>

<script>
import { contactService } from '@/services/contact.service'

export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const { id: contactId } = this.$route.params
    this.contact = await contactService.getContactById(contactId)
  },
}
</script>

<style lang="scss">
.contact-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50px;
  }
  .contact-img {
    width: 200px;
  }
}
.back-btn {
  display: flex;
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.81);
  align-items: center;
  &:a {
    text-decoration: none;
  }
}
</style>
