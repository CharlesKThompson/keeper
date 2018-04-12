/* eslint-disable */
import vue from 'vue'
import vuex from 'vuex'
import router from "../router/index"
import axios from 'axios'

var baseURL = '//localhost:5000/'

var auth = axios.create({
    baseURL: baseURL,
    withCredentials: true
})
var api = axios.create({
    baseURL: baseURL + 'api/',
    withCredentials: true
})

vue.use(vuex)
let store = new vuex.Store(
    {
        state: {
            user: {},
            vaults: {},
            keeps: {},
            activeHome: {}
        },

        mutations: {
            setUser(state, user) {
                state.user = user
            },

            setActiveHome(state, home) {
                state.activeHome = home
            },

            loginUser(state, payload) {
                state.user = payload
            },

            clearData(state, payload) {
                state.user = {}
            },

            addVault(state, payload) {
                state.vaults = payload
            },
            getVaults(state, payload) {
                state.vaults = payload
            },
            getKeeps(state, payload) {
                state.keeps = payload
            }

        },

        actions: {
            //Add a Vault
            addVault({ commit, dispatch }, payload) {
                api.post("vaults/", payload)
                    .then(results => {
                        dispatch("addVault", results.data)
                    })
            },

            //Delete a Vault
            removeVault({ commit, dispatch }, payload) {
                api.delete("vaults/" + payload.id)
                    .then(result => {
                        dispatch("getVaults")
                    })
            },

            //Get all Vaults

            getVaults({ commit, dispatch }, payload) {
                api.get("vaults/")
                    .then(results => {
                        commit("getVaults", results.data)
                    })
                    .catch(err => { console.log(err) })
            },

            //Get a Vault
            getVault({ commit, dispatch }, payload) {
                api.get("vaults/" + payload.id)
                    .then(results => {
                        commit("getVault", results.data)
                    })
                    .catch(err => { console.log(err) })
            },
            //Keeps
            getKeeps({ commit, dispatch }, payload) {
                api.get("keeps/")
                    .then(results => {
                        commit("getKeeps", results.data)
                    })
                    .catch(err => { console.log(err) })
            },

            setActiveHome({ commit, dispatch }, payload) {
                api.get("home/" + payload._id)
                    .then(result => {
                        commit('setActiveHome', { id: payload, data: result.data })
                        router.push({ name: 'Home' })
                        commit('setActiveHome', result.data)
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