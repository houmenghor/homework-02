<template>
    <main>
        <div class="modal fade" id="modalSignup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-5">
                    <div class="mb-4">
                        <h1 class="modal-title fs-2 fw-bold text-center" id="staticBackdropLabel text-center">Welcome
                            back!</h1>
                        <p class="text-center text-black">Enter your Credentials to access your account</p>
                    </div>
                    <div class="">
                        <form action="" @submit.prevent>
                            <div class="mb-3">
                                <label for="" class="form-label text-black m-1">Name</label>
                                <input type="text" placeholder="Enter your name" class="form-control"
                                    v-model="useHomeStore.formSignup.name"
                                    :class="useHomeStore.validateSignup.name.$error ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="useHomeStore.validateSignup.name.$error">{{
                                    useHomeStore.validateSignup.name.$errors[0].$message }}</div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label text-black m-1">Email</label>
                                <input type="email" placeholder="Enter your email" class="form-control"
                                    v-model="useHomeStore.formSignup.email"
                                    :class="useHomeStore.validateSignup.email.$error ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="useHomeStore.validateSignup.email.$error">{{
                                    useHomeStore.validateSignup.email.$errors[0].$message }}</div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label text-black m-1">Password</label>
                                <input type="password" placeholder="Enter your password" class="form-control"
                                    v-model="useHomeStore.formSignup.password"
                                    :class="useHomeStore.validateSignup.password.$error ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="useHomeStore.validateSignup.password.$error">{{
                                    useHomeStore.validateSignup.password.$errors[0].$message }}</div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label text-black m-1">Confirm password</label>
                                <input type="password" placeholder="Confirm your password" class="form-control"
                                    v-model="useHomeStore.formSignup.confirmPassword"
                                    :class="useHomeStore.validateSignup.confirmPassword.$error ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="useHomeStore.validateSignup.confirmPassword.$error">
                                    {{ useHomeStore.validateSignup.confirmPassword.$errors[0].$message }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex algin-items-baseline">
                                    <input type="checkbox" class="form-check-input me-1"
                                        v-model="useHomeStore.formSignup.agree">


                                    <p class="text-black">I agree to the <span
                                            class="text-decoration-none text-primary pointer">Terms of
                                            Service</span> and <span
                                            class="text-decoration-none text-primary pointer">Privacy
                                            Policy</span>
                                    </p>
                                </div>
                            </div>
                            <div class="button mb-4">
                                <button type="submit" class="btn bg-primary w-100 text-white"
                                    @click="onSignup" :disabled="!useHomeStore.formSignup.agree" 
                                    :class="useHomeStore.formSignup.agree ? 'pointer' : 'pointer-error'">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="">
                        <p class="text-center text-black">Already have an account? <span
                                class="text-decoration-none text-primary pointer" @click="showModalLogin">Login</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { homeStore } from '@/stores/homeStore';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'
import { onMounted, computed } from 'vue';
import { Modal } from 'bootstrap'
const useHomeStore = homeStore();
onMounted(() => {
    useHomeStore.modalSignup = Modal.getOrCreateInstance(document.getElementById('modalSignup'))
    const onCloseModal = document.getElementById('modalSignup')
    onCloseModal.addEventListener('hidden.bs.modal', () => {
        onClose();
    })

})
const rule = computed(() => ({
    name: {
        required: helpers.withMessage("Name is required", required)
    },
    email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Email is not a valid email address", email)
    },
    password: {
        required: helpers.withMessage("Password is required", required),
        minLength: helpers.withMessage("Password must be at least 8 characters", minLength(8))
    },
    confirmPassword: {
        required: helpers.withMessage("Confirm password is required", required),
        minLength: helpers.withMessage("Confirm password must be at least 8 characters", minLength(8)),
        sameAs: helpers.withMessage("Confirm password does not match", sameAs(useHomeStore.formSignup.password))
    }
}))
useHomeStore.validateSignup = useVuelidate(rule, useHomeStore.formSignup)
const onSignup = () => {
    useHomeStore.validateSignup.$validate();
    console.log(useHomeStore.validateSignup.$error)
    if (useHomeStore.validateSignup.$error) {
        return
    }
    alert('Sign up success')
    useHomeStore.modalSignup.hide();
    useHomeStore.formSignup.name = '';
    useHomeStore.formSignup.email = '';
    useHomeStore.formSignup.password = '';
    useHomeStore.formSignup.confirmPassword = '';
    useHomeStore.formSignup.agree = null;
    useHomeStore.validateSignup.$reset();
}
const showModalLogin = () => {
    useHomeStore.modalLogin.show();
    useHomeStore.modalSignup.hide();
}
const onClose = () => {
    useHomeStore.validateSignup.$reset();
    useHomeStore.formSignup.name = '';
    useHomeStore.formSignup.email = '';
    useHomeStore.formSignup.password = '';
    useHomeStore.formSignup.confirmPassword = '';
    useHomeStore.formSignup.agree = null;
    useHomeStore.modalSignup.hide();
}
</script>