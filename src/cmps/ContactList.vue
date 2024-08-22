<template>
  <section class="contact-list">
    <TransitionGroup
      name="list"
      tag="ul"
    >
      <li
        v-for="contact in contacts"
        :key="contact._id"
      >
        <ContactPreview :contact="contact" />
        <section class="actions">
          <button @click="onRemoveContact(contact._id)">
            <img src="@/assets/delete.png" /> <span>Delete</span>
          </button>
          <RouterLink :to="`/contact/edit/${contact._id}`"
            ><button>
              <img src="@/assets/edit.png" /> <span>Edit</span>
            </button></RouterLink
          >
          <RouterLink :to="`/contact/${contact._id}`"
            ><button>
              <img src="@/assets/plus.png" /> <span>Details</span>
            </button></RouterLink
          >
        </section>
      </li>
    </TransitionGroup>
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
    .list-move, /* apply transition to moving elements */
    .list-enter-active,
  .list-leave-active {
      transition: all 1s ease;
    }

    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(30px);
      .actions {
        display: none;
        &:hover {
          display: none;
        }
      }
    }

    /* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
    .list-leave-active {
      position: absolute;
      .actions {
        display: none;
      }
    }
  }
  li {
    display: flex;
    &:hover {
      opacity: 0.7;
      border: 1px black solid;
      transition: 500ms opacity;
    }
    .actions {
      display: flex;
    }
    button {
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
        padding-inline-end: 5px;
      }
    }
  }
  a {
    align-self: center;
    text-decoration: none;
  }
}
</style>
