<template>
    <div class="side-bar">
        <ul class="list-unstyled">
            <li><router-link to="/"><span><img src="../assets/img/Icons/dashboard.svg" alt="dashboard icon"></span> Dashboard</router-link></li>
            <li><router-link to="/" class="active-router"><span><img src="../assets/img/Icons/list.svg" alt="contacts list icon"></span> Contacts</router-link></li>
            <li><router-link to="/"><span><img src="../assets/img/Icons/contacts.svg" alt="friends icon"></span> Friends</router-link></li>
            <li><router-link to="/" class="trash"><span><img src="../assets/img/Icons/trash.svg" alt="trash icon"></span> Trash <span class="badge number-deleted">0</span></router-link></li>
        </ul>

        <div class="footer-options">
            <ul class="list-unstyled">
                <li><router-link to="/"><span><img src="../assets/img/Icons/cogs.svg" alt="settings icon"></span> Settings</router-link></li>
                <li><router-link to="/"><span><img src="../assets/img/Icons/support.svg" alt="support icon"></span> Support</router-link></li>
                <hr />
                <li class="developer">
                    <router-link to="/" class="details">
                        <div class="avatar">
                            <img src="../assets/img/simamkele.jpg" alt="Simamkele Ndabeni">
                        </div>
                        <div class="name-and-position">
                            <h3 class="name">Simamkele Ndabeni</h3>
                            <h5 class="position">Application Developer</h5>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>