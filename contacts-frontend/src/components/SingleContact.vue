<script setup lang="ts">
    import { useStore } from '../store'
    import { onMounted, computed, watch } from 'vue'
    import router from '../router'
    const store = useStore()
    const contact = computed(() => store.state.contact)
    function getContact() {
        store.dispatch('getContact', router.currentRoute.value.params.id)
    }

    onMounted(() => getContact())
    watch(() => router.currentRoute.value, () => getContact())

</script>
<template>
    <div class="single-contact-container" v-if="contact">
        <div class="single-contact">
            <div class="content">
                <div class="avatar">
                    <img src="https://www.advansix.com/assets/uploads/2016/08/gilfoyle.png" alt="Gilfoyle As Default Avatar">
                </div>
                <div class="details">
                    <div class="header-sec">
                        <h3>{{contact.name+ ' '+contact.surname}}</h3>
                        <h5>@{{contact.username}}</h5>
                    </div>
                    <div class="contacts-sec">
                        <h4 class="mini-title">Contact Details</h4>
                        <div class="contact-details">
                            <div>
                                <h4 class="contact-label">Mobile Number</h4>
                                <h4 class="contact">{{contact.cellNumber}}</h4>
                            </div>
                            <div>
                                <h4 class="contact-label">Home Number</h4>
                                <h4 class="contact">{{contact.homeNumber}}</h4>
                            </div>
                            <div>
                                <h4 class="contact-label">Email Address</h4>
                                <h4 class="contact">{{contact.email}}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="contact-notes">
                        <h4 class="mini-title">Notes</h4>
                        <span>Note title</span>
                        <h4 class="mini-title note-title">What time can I call her?</h4>
                        <span>Note Description</span>
                        <p>
                            I can only call her during the week, anytime from 19H00-22H30. On the weekends I can only get her by chance because, she is a party freak. I love her.
                        </p>
                        <span>Note date</span>
                        <h5 class="note-date">May 20, 2022</h5>
                    </div>
                    <div class="action-icons">
                        <a :href="`tel:${contact.cellNumber}`"><img src="../assets/img/Icons/phone.svg" alt="phone icon" /></a>
                        <a :href="`mailto:${contact.email}`"><img src="../assets/img/Icons/envelope.svg" alt="Envelope Icon" /></a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>