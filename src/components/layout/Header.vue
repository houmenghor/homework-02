<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import '../../assets/css/main.css'
import { homeStore } from '@/stores/homeStore';
import ModalLogin from '../views/ModalLogin.vue';
import ModalSignup from '../views/ModalSignup.vue'
import en from '../../assets/img/en.jpg'
import kh from '../../assets/img/kh.jpg'


const useHomeStore = homeStore();
const route = useRoute();
const showModalSignup = () => {
    useHomeStore.modalSignup.show();

}
const showModalLogin = () => {
    useHomeStore.modalLogin.show();
}

const { locale } = useI18n();
const changeLang = (lang) => {
    locale.value = lang;
    localStorage.setItem('lang', lang)
}


</script>
<template>
    <header>
        <!-- Top bar with social icons, shipping info, and auth buttons -->
        <div class="bg-body-tertiary ">
            <div class="container px-0 py-2">
                <div class="row align-items-baseline">
                    <div class="col-4">
                        <div class="social-icons d-none d-md-block ">
                            <i class="bi bi-twitter me-3 opacity-50 hover-icon"></i>
                            <i class="bi bi-facebook me-3 opacity-50 hover-icon"></i>
                            <i class="bi bi-instagram me-3 opacity-50 hover-icon"></i>
                            <i class="bi bi-youtube me-3 opacity-50 hover-icon"></i>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="shipping-info text-center mx-auto mx-md-0">
                            <i class=""></i>
                            <p class="p-0 m-0 fw-bold">{{ $t('header.title') }}</p>
                        </div>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <div class="dropdown me-2">
                            <button class="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <!-- {{ locale === 'en' ? 'English' : 'Khmer' }} -->
                                <img :src="locale === 'en' ? en : kh " alt="" height="25">

                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" @click="changeLang('en')"> English</a></li>
                                <li><a class="dropdown-item" @click="changeLang('kh')">Khmer</a></li>
                            </ul>
                        </div>
                        <div class="auth-buttons">
                            <button class="btn text-black fw-bold me-2" @click="showModalLogin">{{ $t('header.login') }}</button>
                            <button class="btn btn-dark fw-bold" @click="showModalSignup">{{ $t('header.register') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main navigation section with improved structure -->
        <div class="container px-0">
            <nav class="navbar navbar-expand-lg align-items-baseline">

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span class="bi bi-list"></span>
                </button>
                <!-- Logo centered for all screen sizes -->
                <div class="logo position-absolute top-50 start-50 translate-middle text-center">
                    <img src="@/assets/img/logo.png" alt="Logo" class="img-fluid">
                </div>
                <!-- Desktop navigation links -->
                <div class="offcanvas offcanvas-start d-none d-lg-flex justify-content-start " tabindex="-1"
                    id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <ul class="navbar-nav px-0 text-uppercase fw-bold text-black">
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link px-0" aria-current="page" to="/" style="margin-left: -10px;"
                                :class="route.name == 'home' ? 'active' : 'inactive'">{{ $t('header.home') }}</RouterLink>
                        </li>
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link" to="/teespace"
                                :class="route.name == 'teespace' ? 'active' : 'inactive'">{{ $t('header.teespace') }}</RouterLink>
                        </li>
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link" to="/shop"
                                :class="route.name == 'shop' ? 'active' : 'inactive'">{{ $t('header.shop') }}</RouterLink>

                        </li>
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link" to="/blog"
                                :class="route.name == 'blog' ? 'active' : 'inactive'">{{ $t('header.blog') }}</RouterLink>
                        </li>
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link" to="/about"
                                :class="route.name == 'about' ? 'active' : 'inactive'">{{ $t('header.about') }}</RouterLink>
                        </li>
                    </ul>
                </div>
                <!-- Action icons positioned on the right -->
                <div class="action-icons d-flex align-items-baseline ms-auto pe-2">
                    <div class="search-icon me-3 position-relative">
                        <form class="d-flex mt-2" role="search">
                            <input class="form-control me-2" type="search" :placeholder="$t('header.search')" aria-label="Search">
                            <button class="btn" type="submit">
                                <i class="bi bi-search" data-bs-toggle="collapse" data-bs-target="#searchCollapse"
                                    aria-expanded="false"></i>
                            </button>
                        </form>
                    </div>
                    <div class="nav-icon me-4">
                        <i class="bi bi-star"></i>
                        <span class="overlay">
                            0
                        </span>
                    </div>
                    <div class="nav-icon">
                        <i class="bi bi-cart"></i>
                        <span class="overlay">
                            0
                        </span>
                    </div>
                </div>
            </nav>
        </div>
        <ModalLogin />
        <ModalSignup />
    </header>
</template>
