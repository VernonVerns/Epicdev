<template>
    <div class="navigation-bar">
        <div class="logo">
            <img src="../assets/img/full-logo_1.png" alt="EpicDev Logo">
        </div>

        <ul class="navigation-menu list-unstyled">
            <li class="current-logged">
                <router-link to="/">Gilfoyle&nbsp;<img src="../assets/img/Icons/user.svg" alt="user icon"></router-link>
            </li>
            <li>
                <router-link to="/"><img src="../assets/img/Icons/facebook.svg" class="facebook-icon" alt="facebook icon"></router-link>
            </li>
            <li>
                <router-link to="/"><img src="../assets/img/Icons/linkedin.svg" alt="linkedIn icon"></router-link>
            </li>
        </ul>
    </div>
</template>