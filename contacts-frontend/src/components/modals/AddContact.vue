<script setup lang="ts">
   import { reactive } from 'vue'
   import { Contact, Note } from '../../types'
   import { useStore } from '../../store'
   import cloneDeep from 'lodash.clonedeep'
   const store = useStore()
   
   const contactForm = reactive<Contact>({
        error: [],
       name: '',
       surname: '',
       username: '',
       email: '',
       password: '',
       cellNumber: '',
       homeNumber: ''
   })

   const noteForm = reactive<Note>({
       noteTitle: '',
       noteDescription: ''
   })

   async function submitForm() {
        //TODO: Validation
        this.error = []
        if(!this.name) {
            this.error.push("Name is required")
        }

        if(!this.surname) {
            this.error.push("Surname is required")
        }

        if(!this.surname) {
            this.error.push("Surname is required")
        }

        if (!this.password) {
            this.error.push("Password is required")
        } else if(this.password.length < 6) {
            this.error.push("Password should have at least 6 characters")
        }

        if(!this.email) {
            this.error.push("Email is required")
        } else if(!this.validEmail(this.email)) {
            this.error.push("Email is not valid")
        }

        if(!this.cellNumber) {
            this.error.push("Cell number is required")
        }

        function validEmail(email) {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return re.test(email)
        }

        if (noteForm.noteTitle && noteForm.noteDescription) {
            contactForm.notes[0] = cloneDeep(noteForm)
        }
        await store.dispatch('addContact', cloneDeep(contactForm))
   }
</script>
<template>
    <div class="modal fade" id="add_contact" tabindex="-1" aria-labelledby="add_contactLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create New Contact</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="submitForm()" autocomplete="off">
                    <div class="modal-body">
                        <h4 class="mini-title2">Basic Details</h4>
                        <div class="row mb-4">
                            <div class="col-sm-6">
                                <input type="text" placeholder="Name" v-model="contactForm.name" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Surname" v-model="contactForm.surname" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Username" v-model="contactForm.username" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="password" placeholder="Password" v-model="contactForm.password" required>
                            </div>
                        </div>
                        <h4 class="mini-title2">Contact Details</h4>
                        <div class="row mb-4">
                            <div class="col-sm-12">
                                <input type="email" placeholder="Email" v-model="contactForm.email" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Cell Number (e.g. 0731072459" v-model="contactForm.cellNumber" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Home Number (e.g. 0397272624)" v-model="contactForm.homeNumber">
                            </div>
                        </div>
                        <h4 class="mini-title2">Notes</h4>
                        <div class="row">
                            <div class="col-sm-12">
                                <input type="text" name="note_title" id="note_title" placeholder="Note Title" v-model="noteForm.noteTitle">
                            </div>
                            <div class="col-sm-12">
                                <textarea name="note_description" id="note_description" placeholder="Note Description" v-model="noteForm.noteDescription"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="main-btn">Add Contact</button>
                    </div>
                </form>
            </div>
        </div>
     </div>
</template>