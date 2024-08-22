<template>
    <form v-if="contact" @submit.prevent="onSave" class="contact-edit-frm">
    <label>Name</label>
    <input
      v-model="contact.name"
      type="text"
    />
    <label>Email</label> 
    <input
      v-model="contact.email"
      type="text"
    />
    <label>Phone Number</label> 
    <input
      v-model="contact.phone"
      type="text"
    />
    <button>Save</button>
  </form>
</template>

<script>
import { contactService } from '@/services/contact.service'

export default {
  data() {
        return {
            contact: null,
        }
    },
  methods: {
    async onSave() {
      try {
        await contactService.saveContact(this.contact)
        this.$router.push('/contact')
      } catch (error) {
        alert('Bad stuff')
      }
    }
  },
  async created() {
    const { id: contactId } = this.$route.params
    if (contactId) {
      this.contact = await contactService.getContactById(contactId)
    } else {
      this.contact = contactService.getEmptyContact()
    }
  },
}
</script>

<style lang="scss">
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
    }
}
</style>
