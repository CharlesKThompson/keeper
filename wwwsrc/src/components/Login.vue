<!-- /* eslint-disable */ -->
<template>
    <div class="entry">
      <div class="flexor">
        <div class="login-page flexor2">
          <div class="bg-1">
            <div>
              <h1>
                Time to test Final Project
              </h1>
            </div>
            <div>
              <h2>Please login to continue</h2>
            </div>
            <div v-if="loginForm == true" class="login">
              <div class="login-box">
                <div class="row login-credentials">
                  <div class="col-sm-12 login-form">
                    <form @submit.prevent="login">
                      <div class="form-group flexor2">
                        <input v-model="user.email" type="text" name="email" placeholder="email" class="form-control">
                        <input v-model="user.password" type="password" name="password" placeholder="password" class="form-control">
                      </div>
                      <div class="col-sm-12 login-button">
                        <button type="submit" class="btn btn-success">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <button class="btn btn-link" @click="loginForm = !loginForm">Create an account</button>
              </div>
            </div>
  
            <div v-if="loginForm == false" class="create-account-box">
              <div class="createUser">
                <div class="col-sm-12 create-form">
                  <form @submit.prevent="createUser" class="flexor2">
                    <input v-model="user.username" type="text" name="username" placeholder="username" class="form-control">
                    <input v-model="user.email" type="text" name="email" placeholder="email" class="form-control">
                    <input v-model="user.password" type="password" name="password" placeholder="password" class="form-control">
                    <div class="col-sm-12 login-button">
                      <button type="submit" class="btn btn-success login-button">Create Account</button>
                    </div>
                  </form>
                </div>
              </div>
              <div>
                <button class="btn btn-link" @click="loginForm = !loginForm">Back to Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'Login',
      data() {
        return {
          loginForm: true,
          user: {
            username: '',
            email: '',
            password: ''
          }
        }
      },
  
      methods: {
        createUser() {
          this.$store.dispatch('createUser', this.user)
        },
        login() {
          this.$store.dispatch('login', this.user)
        },
      }
    }
  </script>
  
  
  
  <style scoped>
  </style>