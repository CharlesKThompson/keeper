<template>
    <div class="home">
        <navbar></navbar>

        <div class="spacer col-sm-12">
        </div>

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-3">
                    <form class="form" @submit.prevent="getVaults">
                        <!-- ADD Vault BUTTON -->
                        <button class="btn btn-primary mleft">
                            Retreive your Vaults
                        </button>
                    </form>
                </div>
                <!-- CREATE A Vault FORM -->
                <div class="col-sm-3">
                    <form class="form" @submit.prevent="addKeep">
                        <!-- ADD Vault BUTTON -->
                        <button class="btn btn-primary mleft">
                            Add New Keep
                        </button>
                    </form>
                </div>
                <div class="col-sm-3">
                    <form class="form" @submit.prevent="getKeeps">
                        <!-- ADD Vault BUTTON -->
                        <button class="btn btn-primary mleft">
                            Retrieve your Keeps
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Create Vaults -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#vaultModal">
            Add Vault
        </button>

        <div class="modal fade" id="vaultModal" tabindex="-1" role="dialog" aria-labelledby="#vaultModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="#vaultModalLabel">Create a new Vault</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit="addVault()">
                            <input type="text" v-model="vault.name" name="name" placeholder="Name of Vault">
                            <input type="text" v-model="vault.description" name="description" placeholder="description">
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-submit">Create</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="list-group">
            <div class="list-group-item bg-2" v-for="vault in vaults">
                <Vault :vault="vault">
                </Vault>
                <button @click="removeVault(vault)" class="btn">Delete Vault</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    import Vault from './Vault.vue'
    import Keep from './Keep.vue'
    export default {
        name: 'Home',

        mounted() {
            // this.$store.dispatch('authenticate');
            this.$store.state.vaults = [];
            this.$store.state.keeps = [];

            this.$store.dispatch('getVaults')
            // ,{
            //     _id: this.$route.params.homeId
            // }

            // this.$store.dispatch('setActiveHome'), {
            //     _id: this.$route.params.homeId
            // }

        },
        data() {
            return {
                vault: {
                    name: '',
                    description: ''
                },
                keep: {
                    link: '',
                    name: '',
                    description: ''
                }
            }
        },
        components: {
            Navbar,
            Vault,
            Keep
        },
        methods: {
            addVault(vault) {
                console.log(vault)
                this.$store.dispatch('addVault', this.vault)
            },
            removeVault(vault) {
                this.$store.dispatch('removeVault', vault)
            },
            getVaults() {
                this.$store.dispatch('getVaults')
            },
            getVault() {
                this.$store.dispatch('getVault', vault)
            },
            setActiveVault(vault) {
                this.$store.dispatch('setActiveVault', vault)
            },
            updateVault(vault) {
                this.$store.dispatch('updateVault', vault)
            },
            logout() {
                this.$store.dispatch('logout', {})
            },
            getKeeps() {
                this.$store.dispatch('getKeeps')
            },
            addKeep() {
                this.$store.dispatch('addKeep', this.keep)
            }
        },
        computed: {
            vaults() {
                return this.$store.state.vaults
            },
            keeps() {
                return this.$store.state.vaults
            },
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style scoped>
    .spacer {
        height: 3rem;
    }
</style>