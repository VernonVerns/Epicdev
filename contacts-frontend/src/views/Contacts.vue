<script setup>
    import SideBar from "../components/SideBar.vue"
    import ContactCard from "../components/ContactCard.vue";
    import AddContact from "../components/modals/AddContact.vue"
    import SingleContact from "../components/SingleContact.vue"
    import DefaultView from "../components/DefaultView.vue"
</script>

<template>
    <div id="contacts_page">
        <div class="content">
            <SideBar />
            <div class="main-side">
                <div class="header-part">
                    <h4 class="mini-title" data-bs-toggle="modal" data-bs-target="#success_error">Contacts list</h4>
                    <div class="actions">
                        <button class="main-btn" data-bs-toggle="modal" data-bs-target="#add_contact">Add Contact</button>
                        <div class="dropdown">
                            <button class="border-btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                All
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                              <li><a class="dropdown-item active" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
                <div class="inner-sec">
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
                    <div class="single-contact-container">
                        <DefaultView hidden />
                        <SingleContact />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AddContact />
</template>