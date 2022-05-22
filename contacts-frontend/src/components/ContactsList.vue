<script setup>
    import ContactCard from "../components/ContactCard.vue";
</script>
<template>
    <div class="contacts-container">
        <div class="search-part">
            <input type="search" name="search" id="search" placeholder="Find contact">
            <button type="button">Search</button>
        </div>
        <div class="contacts-list">
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
        <div class="footer-action-btns">
            <button type="button" class="delete-btn shadow">Delete</button>
        </div>
    </div>
</template>