<script setup lang="ts">
    import ContactCard from "../components/ContactCard.vue";
    import { useStore } from '../store'
    import { computed, onMounted } from 'vue'

    const store = useStore()

    const contacts = computed(() => store.state.contacts)

    onMounted(() => {
        store.dispatch('getContacts')
    })
</script>
<template>
    <div class="contacts-container">
        <div class="search-part">
            <input type="search" name="search" id="search" placeholder="Find contact">
            <button type="button">Search</button>
        </div>
        <div class="contacts-list" v-if="contacts.length > 0">
            <ContactCard v-for="contact in contacts" :contact="contact" :key="contact.id" />
        </div>
        <div class="footer-action-btns">
            <button type="button" class="delete-btn shadow">Delete</button>
        </div>
    </div>
</template>