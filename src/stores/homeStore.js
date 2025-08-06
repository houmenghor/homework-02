import { defineStore } from 'pinia';
export const homeStore = defineStore('home', {
  state: () => ({
    modalLogin: null,
    formLogin: {
      email: null,
      password: null,
      remember: null
    },
    validateLogin: null,
    modalSignup: null,
    formSignup: {
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      agree: null

    },
    validateSignup: null
  })
})