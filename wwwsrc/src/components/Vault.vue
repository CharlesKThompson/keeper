<template>
    <div class="vaults">
        <div class="card bg-1">
            <div class="card-body">
                <h4 class="card-title">{{keep.name}}</h4>
            </div>
        </div>
        <div class="flexy" v-if="keep.userId == user._id">
            <button data-toggle="modal" class="btn">Add Keep</button>
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Create a new Keep</h5>
                            <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit="addKeep()" id="uForm">
                                <input type="text" v-model="keep.link" name="img" placeholder="Picture">
                                <input type="text" v-model="keep.name" name="name" placeholder="Name of Keep">
                                <input type="text" v-model="keep.description" name="description" placeholder="Image URL">
                                <button type="submit" class="btn btn-submit">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="removeKeep(keep)" class="btn">Delete Keep</button>
        </div>
        <!-- <div class="list-group">
                            <div class="list-group-item bg-2" v-for="vault in vaults">
                                <Vault :vault="vault"></Vault>
                            </div>
                        </div> -->
        <div class="list-group">
            <div class="list-group-item bg-2" v-for="keep in keeps">
                <Keep></Keep>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
    import Keep from './Keep'
    export default {
        name: 'Vault',
        mounted() {
        

            this.$store.dispatch('getKeeps')
            // , {
            //     _id: this.$route.params.vaultId
            // })
        },
        data() {
            return {
                keep: {
                    link: '',
                    name: '',
                    description: ''
                },
            }
        },
        components: {
            Keep
        },
        methods: {
            addKeep(keep) {

                this.$store.dispatch('addKeep', this.keep);
            },
            removeVault(vault) {
                this.$store.dispatch('removeVault', vault)
            },
            getKeeps() {
                this.$store.dispatch('getKeeps')
                // , {
                //     homeId: this.$route.params.homeId,
                //     vaultId: this.vault.id
                // }
            },
            removeKeep(keep) {
                this.$store.dispatch('removeKeep', keep)
            },
        },
        computed: {
            keeps() {
                return this.$store.state.keeps
            },
            user() {
                return this.$store.state.user
            },
            vaults() {
                return this.$store.state.vaults
            }
        },
    }
</script>

<style scoped>
    .vault-title {
        font-weight: 600;
        padding: .5rem;
        text-align: start
    }

    .mleft {
        margin-left: .5 rem;
    }

    .trash-keep {
        color: black;
        background: none;
        border: none;
        font-size: .6rem;
        text-align: center;
    }

    .label-keep-input {
        font-size: .8rem;
        text-align: left;

    }
</style>