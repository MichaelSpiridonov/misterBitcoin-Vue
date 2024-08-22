import { contactService } from "@/services/contact.service"

export const contact = {
    state: {
        contacts: null,
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact({ contacts }, { contactId }) {
            const idx = contacts.findIndex(contact => contact._id === contactId)
            contacts.splice(idx, 1)
        },
        updateContact({ contacts }, { contactToEdit }) {
            const idx = contacts.findIndex(contact => contact._id === contactToEdit._id)
            contacts.splice(idx, 1, contactToEdit)
        },
    },
    actions: {
        async loadContacts({ commit }, { filterBy }) {
            try {
                const contacts = await contactService.getContacts(filterBy)
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                console.log(err)                
                throw err
            }
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.deleteContact(contactId)
            commit({ type: 'removeContact', contactId })
        },
        async updateContact({ commit }, { contactToEdit }) {
            await contactService.saveContact(contactToEdit)
            commit({ type: 'updateContact', contactToEdit })
        },
    },
    getters: {
        contacts(state) {
            return state.contacts
        }
    }
}