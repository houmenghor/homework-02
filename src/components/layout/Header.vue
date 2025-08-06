<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import '../../assets/css/main.css'
import { homeStore } from '@/stores/homeStore';
import ModalLogin from '../views/ModalLogin.vue';
import ModalSignup from '../views/ModalSignup.vue'

const useHomeStore = homeStore();
const route = useRoute();
const showModalSignup = () => {
    useHomeStore.modalSignup.show();

}
const showModalLogin = () => {
    useHomeStore.modalLogin.show();
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
                            <p class="p-0 m-0 fw-bold">Free shipping on all U.S. orders $50+</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="auth-buttons d-flex justify-content-end">
                            <button class="btn text-black fw-bold me-2" @click="showModalLogin">Login</button>
                            <button class="btn btn-dark fw-bold" @click="showModalSignup">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main navigation section with improved structure -->
        <div class="container px-0">
            <nav class="navbar navbar-expand-lg align-items-baseline">

                <!-- Mobile toggle button (moved to left) -->
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#mainNavOffcanvas" aria-controls="mainNavOffcanvas" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Logo centered for all screen sizes -->
                <div class="logo position-absolute top-50 start-50 translate-middle text-center">
                    <img src="@/assets/img/logo.png" alt="Logo" class="img-fluid">
                </div>

                <!-- Desktop navigation links -->
                <div class="collapse navbar-collapse d-none d-lg-flex justify-content-start ">
                    <ul class="navbar-nav px-0 text-uppercase fw-bold text-black">
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link px-0" aria-current="page" to="/" style="margin-left: -10px;"
                                :class="route.name == 'home' ? 'active' : 'inactive'">Home</RouterLink>
                        </li>
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link" to="/teespace"
                                :class="route.name == 'teespace' ? 'active' : 'inactive'">Teespace</RouterLink>
                        </li>
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link" to="/shop"
                                :class="route.name == 'shop' ? 'active' : 'inactive'">Shop</RouterLink>

                        </li>
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link" to="/blog"
                                :class="route.name == 'blog' ? 'active' : 'inactive'">Blog</RouterLink>
                        </li>
                        <li class="nav-item mx-2">
                            <RouterLink class="nav-link" to="/about"
                                :class="route.name == 'about' ? 'active' : 'inactive'">About Us</RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Action icons positioned on the right -->
                <div class="action-icons d-flex align-items-baseline ms-auto pe-2">
                    <div class="search-icon me-3 position-relative">
                        <form class="d-flex mt-2" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
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