<template>
  <h1>Contacts</h1>
  <ContactFilter />
  <ContactList
    v-if="contacts"
    @remove="removeContact"
    :contacts="contacts"
  />
  <h1 v-else>No Contacts!</h1>
  <RouterView />
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

<style lang="scss"></style>
