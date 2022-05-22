<script setup lang="ts">
    import { PropType } from 'vue'
    import router from '../router'
    
    const { contact } = defineProps({
        contact: {type: Object, required: true}
    })

    function showContact(id) {
        router.push(`/single-contact/${id}`)
    }
</script>
<template>
    <div class="contact nice-card shadow-sm" @click="showContact(contact.id)">
        <div class="contact-avatar">
            <img src="https://www.advansix.com/assets/uploads/2016/08/gilfoyle.png" alt="Gilfoyle As Default Avatar">
        </div>
        <div class="name-and-contact">
            <h3 class="name">{{contact.name+ ' '+ contact.surname}}</h3>
            <h5 class="quick-contact">{{contact.cellNumber}} &bull; {{contact.email}}</h5>
        </div>
        <span class="arrow-right">
            &rarr;
        </span>

        <input type="checkbox" name="select_contact" :id="contact.id" hidden>
        <label :for="contact.id"></label>
    </div>
</template>