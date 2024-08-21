<template>
  <section class="contact-list">
    <ul>
      <li
        v-for="contact in contacts"
        :key="contact._id"
      >
        <ContactPreview :contact="contact" />
        <section class="actions">
          <button @click="onRemoveContact(contact._id)">
            <img src="@/assets/delete.png" /> <span>Delete</span>
          </button>
          <button><img src="@/assets/edit.png" /> <span>Edit</span></button>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue'

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove', contactId)
    },
  },
  components: {
    ContactPreview,
  },
}
</script>

<style lang="scss">
.contact-list {
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    display: flex;
    &:hover {
        padding-left: 15px;
        opacity: 0.7;
        border: 1px black solid;
        transition: 500ms opacity;
      }
    button {
      text-align: center;
      display: flex;
      align-self: center;
      background: transparent;
      color: rgba(255, 255, 255, 0.81);
      border: none;
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
      &:nth-last-child(1) {
        padding-inline-end: 15px;
      }
    }
  }
}
</style>
