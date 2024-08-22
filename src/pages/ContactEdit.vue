<template>
  <Transition name="contact-edit">
      <form
        v-if="contactToEdit"
        @submit.prevent="onSave"
        class="contact-edit-frm"
      >
        <label>Name</label>
        <input
          v-model="contactToEdit.name"
          type="text"
          autofocus
        />
        <label>Email</label>
        <input
          v-model="contactToEdit.email"
          type="text"
        />
        <label>Phone Number</label>
        <input
          v-model="contactToEdit.phone"
          type="text"
        />
        <button :disabled="!isValid">Save</button>
      </form>
  </Transition>
</template>

<script>
import { contactService } from '@/services/contact.service'

export default {
  data() {
    return {
      contactToEdit: null,
    }
  },
  methods: {
    async onSave() {
      try {
        await contactService.saveContact({ ...this.contactToEdit })
        this.$store.dispatch({ type: 'loadContacts' })
        this.$router.push('/contact')
      } catch (error) {
        alert('Bad stuff')
      }
    },
  },
  async created() {
    const { id: contactId } = this.$route.params
    if (contactId) {
      const contact = await contactService.getContactById(contactId)
      this.contactToEdit = { ...contact }
    } else {
      this.contactToEdit = contactService.getEmptyContact()
    }
  },
  computed: {
    isValid() {
      return (
        !!this.contactToEdit.name &&
        !!this.contactToEdit.email &&
        !!this.contactToEdit.phone
      )
    },
  },
}
</script>

<style lang="scss">
.modal-container {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  transition: opacity 0.3s ease;
}
.contact-edit-frm {
  height: 200px;
  width: 200px;
  position: fixed;
  inset: 0;
  top: -10%;
  margin: auto;
  background-color: #191919;
  border: rgb(255, 255, 255) 3px solid;
  box-shadow: -3px 1px 28px #00000061;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  border-radius: 2px;
  transition: all 1s ease;

  label {
    align-self: flex-start;
    padding: 10px;
  }
  button {
    width: 50%;
    display: block;
    margin: 10px auto;
    border-radius: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    label {
      margin-top: 0.5em;
    }
  }
  input {
    width: 200px;
    padding: 10px;
    &:focus {
      opacity: 0.7;
    }
  }
}

.contact-edit-enter-from {
  opacity: 0;
}

.contact-edit-leave-to {
  opacity: 0;
}

.contact-edit-enter-from .contact-edit-frm,
.contact-edit-leave-to .contact-edit-frm {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
