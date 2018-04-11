<template>
    <div class="vault">
        <navbar></navbar>

        <div class="spacer col-sm-12">
        </div>

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-3">
                    <form class="form-inline mtop" @submit.prevent="addVault">
                        <!-- ADD Vault BUTTON -->
                        <button class="btn btn-primary mleft">
                            Add New Vault
                        </button>
                    </form>
                </div>
                <div class="col-sm-3">
                    <form class="form-inline mtop" @submit.prevent="getVaults">
                        <!-- ADD Vault BUTTON -->
                        <button class="btn btn-primary mleft">
                            Retreive your Vaults
                        </button>
                    </form>
                </div>
                <!-- CREATE A Vault FORM -->
                <div class="col-sm-3">
                    <form class="form-inline mtop" @submit.prevent="addKeep">
                        <!-- ADD Vault BUTTON -->
                        <button class="btn btn-primary mleft">
                            Add New Keep
                        </button>
                    </form>
                </div>
                <div class="col-sm-3">
                        <form class="form-inline mtop" @submit.prevent="getKeeps">
                            <!-- ADD Vault BUTTON -->
                            <button class="btn btn-primary mleft">
                                Retrieve your Keeps
                            </button>
                        </form>
                    </div>
            </div>
            <!-- Vaults DRAW HERE -->
            <div class="row justify-content-md-center">
                <div class="col-sm-3 vault-box-vault" v-for="vault in vaults">
                    <vault :vaultProp='vault'> </vault>
                    <!-- DELETE Vault ICON-BUTTON -->
                    <button class="vault-btn trash-vault" @click.prevent='removeVault(vault)'>
                        <p>Delete this vault</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    import Vault from './Vault'
    export default {
        name: 'Home',
        mounted() {
            this.$store.dispatch('getVaults', {
                _id: this.$route.params.homeId
            })
            // this.$store.dispatch('setActiveHome', {
            //     _id: this.$route.params.homeId
            // })
        },
        data() {
            return {
                vault: {
                    title: ""
                },
            }
        },
        components: {
            Navbar,
            Vault
        },
        methods: {
            addVault(vault) {
                this.vault.homeId = this.home._id
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
            }
        },
        computed: {
            vaults() {
                return this.$store.state.vaults
            },
            home() {
                return this.$store.state.activeHome
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