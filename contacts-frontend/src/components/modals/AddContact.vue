<script setup>
   
</script>
<template>
    <div class="modal fade" id="add_contact" tabindex="-1" aria-labelledby="add_contactLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create New Contact</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="#" method="post" autocomplete="off">
                        <h4 class="mini-title2">Basic Details</h4>
                        <div class="row mb-4">
                            <div class="col-sm-6">
                                <input type="text" name="fname" id="fname" placeholder="Name" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" name="surname" id="surname" placeholder="Surname" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" name="username" id="username" placeholder="Username" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="password" name="password" id="password" placeholder="Password" required>
                            </div>
                        </div>
                        <h4 class="mini-title2">Contact Details</h4>
                        <div class="row mb-4">
                            <div class="col-sm-12">
                                <input type="email" name="email" id="email" placeholder="Email" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="number" name="cell_number" id="cell_number" placeholder="Cell Number (e.g. 0731072459" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="number" name="tel_number" id="tel_number" placeholder="Tel Number (e.g. 0397272624)">
                            </div>
                        </div>
                        <h4 class="mini-title2">Notes</h4>
                        <div class="row">
                            <div class="col-sm-12">
                                <input type="text" name="note_title" id="note_title" placeholder="Note Title">
                            </div>
                            <div class="col-sm-12">
                                <textarea name="note_description" id="note_description" placeholder="Note Description"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="main-btn">Add Contact</button>
                </div>
            </div>
        </div>
     </div>
</template>