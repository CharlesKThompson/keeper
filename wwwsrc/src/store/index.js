/* eslint-disable */
import vue from 'vue'
import vuex from 'vuex'
import router from "../router/index"
import axios from 'axios'

var baseURL = '//localhost:5000/account/'

var auth = axios.create({
    baseURL: baseURL,
    withCredentials: true
})
var user = axios.create({
    baseURL: baseURL + 'users/',
    withCredentials: true
})

vue.use(vuex)
let store = new vuex.Store(
    {
        state: {
            user: {},
            vaults: {}
        },

        mutations: {
            setUser(state, user) {
                state.user = user
            },

            loginUser(state, payload) {
                state.user = payload
            },

            clearData(state, payload) {
                state.user = {}
            },

            addVault(state, payload) {
                state.vaults = payload
            }

        },

        actions: {
            //Add a Vault
            addVault({ commit, dispatch }, payload) {
                user.post("vaults/", payload)
                    .then(results => {
                        dispatch("AddVault", results.data)
                    })
            },

            //Get all Vaults

            getVaults({ commit, dispatch }, payload) {
                user.get("vaults/")
                    .then(results => {
                        commit("GetVaults", results.data)
                    })
                    .catch(err => { console.log(err) })
            },

            //Get a Vault
            getVault({ commit, dispatch }, payload) {
                user.get("vaults/" + payload._id)
                    .then(results => {
                        commit("GetVault", results.data)
                    })
                    .catch(err => { console.log(err) })
            },

            //User section
            login({ commit, dispatch }, payload) {
                auth.post('login', payload)
                    .then(res => {
                        commit('loginUser', res.data)
                        router.push({ name: 'Home' })
                    })
                    .catch(err => {
                        console.log(err);
                        console.log('Catch handle error')
                    })
            },

            createUser({ commit, dispatch }, payload) {
                auth.post('createUser', payload)
                    .then(user => {
                        commit('setUser', user.data)
                        router.push({ name: 'Home' })
                        console.log(user.data)
                    })
                    .catch(err => {
                        commit("Create user Error", err)
                    })
            },

            authenticate({ commit, dispatch }) {
                auth.get('authenticate')
                    .then(res => {
                        console.log("You are signed in", res.data)
                        commit('setUser', res.data)
                        router.push({ name: 'Home' })
                    })
                    .catch(err => {
                        console.error(err);
                    })
            },

            logout({ commit, dispatch }, payload) {
                auth.delete('logout')
                    .then(res => {
                        commit('setUser', {})
                        commit('clearData', res)
                        router.push({ name: 'Login' })
                    })
                    .catch(err => {
                        commit('error', err)
                    })
            }

        }
    })

export default store