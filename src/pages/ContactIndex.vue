<template>
  <section class="contact-index">
    <h1>Contacts</h1>
    <section class="actions">
      <ContactFilter />
      <RouterLink :to="`/contact/edit/`"
        ><button class="add-button">
          <img src="@/assets/plus.png" /> <span>Add Contact</span>
        </button></RouterLink
      >
    </section>
    <ContactList
      v-if="contacts"
      @remove="removeContact"
      :contacts="contacts"
    />
    <h1 v-else>No Contacts!</h1>
    <RouterView />
  </section>
</template>

<script>
import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'
import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service'

export default {
  methods: {
    async removeContact(contactId) {
      try {
        await this.$store.dispatch({ type: 'removeContact', contactId })
        showSuccessMsg(`Removed contact ${contactId}`)
      } catch (err) {
        showErrorMsg('Something went wrong...')
      }
    },
  },
  async created() {
    this.$store.dispatch({ type: 'loadContacts' })
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts
    },
  },
  components: {
    ContactList,
    ContactFilter,
  },
}
</script>

<style lang="scss">
.contact-index {
  a {
    text-decoration: none
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .add-button {
    display: flex;
    align-self: center;
    background: transparent;
    color: rgba(255, 255, 255, 0.81);
    border: none;
    gap: 5px;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      align-self: center;
    }
    &:hover {
      opacity: 0.5;
      border: 2px black solid;
      border-radius: 5px;
      transition: 500ms opacity;
    }
  }
}
</style>
