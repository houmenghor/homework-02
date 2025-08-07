<template>
    <main>
        <!-- Modal -->
        <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-5">
                    <div class="mb-4">
                        <h1 class="modal-title fs-2 fw-bold text-center" id="staticBackdropLabel text-center">
                            {{ $t('loginModal.title') }}
                        </h1>
                        <p class="text-center text-black">{{ $t('loginModal.des') }}</p>
                    </div>
                    <div class="">
                        <form action="" @submit.prevent>
                            <div class="mb-3">
                                <label for="email" class="form-label text-black m-1">{{ $t('loginModal.labelEmail') }}</label>
                                <input type="email" class="form-control" id="email" name="email"
                                    v-model="useHomeStore.formLogin.email" :placeholder="$t('loginModal.email')"
                                    :class="useHomeStore.validateLogin.email.$error ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="useHomeStore.validateLogin.email.$error">
                                    {{ useHomeStore.validateLogin.email.$errors[0].$message }}</div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <label for="password" class="form-label text-black m-1">{{ $t('loginModal.labelPassword') }}</label>
                                    <p class="text-black m-1">
                                        <span class="text-decoration-none text-primary pointer">{{ $t('loginModal.forgot') }}</span>
                                    </p>
                                </div>
                                <input type="password" class="form-control" id="password" name="password"
                                    :placeholder="$t('loginModal.password')" autocomplete=""
                                    v-model="useHomeStore.formLogin.password"
                                    :class="useHomeStore.validateLogin.password.$error ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="useHomeStore.validateLogin.password.$error">
                                    {{ useHomeStore.validateLogin.password.$errors[0].$message }}</div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex align-items-baseline">
                                    <input type="checkbox" class="form-check-input me-1" v-model="useHomeStore.formLogin.remember">
                                    <p class="text-black">{{ $t('loginModal.remember') }}</p>
                                </div>

                            </div>
                            <div class="button mb-4">
                                <button type="submit" class="btn bg-primary w-100 text-white"
                                    @click="onLogin">{{ $t('loginModal.button') }}</button>
                            </div>
                        </form>
                    </div>
                    <div class="">
                        <p class="text-center text-black">{{ $t('loginModal.noAccount') }} 
                            <span class="text-decoration-none text-primary pointer" @click="showModalSignup">{{ $t('loginModal.signUp') }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import useVuelidate from '@vuelidate/core';
import { email, helpers, minLength, required, } from '@vuelidate/validators';
import { Modal } from 'bootstrap';
import { homeStore } from '@/stores/homeStore';
import { onMounted, computed } from 'vue';
const useHomeStore = homeStore();
onMounted(() => {
    useHomeStore.modalLogin = Modal.getOrCreateInstance(document.getElementById('modalLogin'))
    const onCloseModal = document.getElementById('modalLogin')
    onCloseModal.addEventListener('hidden.bs.modal', () => {
        onClose();
    })

})
const rule = computed(() => ({
    email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Email is not a valid email address", email)
    },
    password: {
        required: helpers.withMessage("Password is required", required),
        minLength: helpers.withMessage("Password must be at least 8 characters", minLength(8)),
    }
}))
useHomeStore.validateLogin = useVuelidate(rule, useHomeStore.formLogin);
const onLogin = () => {
    useHomeStore.validateLogin.$validate();
    console.log(useHomeStore.validateLogin.$error)
    if (useHomeStore.validateLogin.$error) {
        return
    }
    alert('Login success');
    useHomeStore.modalLogin.hide();
    useHomeStore.formLogin.email = '';
    useHomeStore.formLogin.password = '';
    useHomeStore.formLogin.remember = null;
    useHomeStore.validateLogin.$reset();

}
const onClose = () => {
    useHomeStore.validateLogin.$reset();
    useHomeStore.formLogin.email = '';
    useHomeStore.formLogin.password = '';
    useHomeStore.formLogin.remember = null;
    useHomeStore.modalLogin.hide();


}
const showModalSignup = () => {
    useHomeStore.modalSignup.show();
    useHomeStore.modalLogin.hide();
}

</script>