<template>
  <h1>Contacts</h1>
  <ContactList
    v-if="contacts"
    @remove="removeContact"
    :contacts="contacts"
  />
  <h1 v-else>No Contacts!</h1>
</template>

<script>
import ContactList from '@/cmps/ContactList.vue'
import { contactService } from '@/services/contact.service'
import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service'

export default {
  data() {
    return {
      contacts: null,
    }
  },
  methods: {
    async removeContact(contactId) {
      try {
        await contactService.deleteContact(contactId)

        const idx = this.contacts.findIndex(
          (contact) => contact._id === contactId
        )
        this.contacts.splice(idx, 1)

        showSuccessMsg(`Removed contact ${contactId}`)
      } catch (err) {
        showErrorMsg('Something went wrong...')
      }
    },
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
  components: {
    ContactList,
  },
}
</script>

<style lang="scss"></style>
