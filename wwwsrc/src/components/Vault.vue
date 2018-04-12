<template>
    <div class="vaults">
        <div class="card bg-1">
            <div class="card-body">
                <h4 class="card-title">{{vault.name}}</h4>
            </div>
        </div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#keepModal">
                Add Keep
            </button>
    
            <div class="modal fade" id="keepModal" tabindex="-1" role="dialog" aria-labelledby="#keepModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="#keepModalLabel">Create a new Keep</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit="addKeep()">
                                <input type="URL" v-model="keep.link" name="link" placeholder="enter URL here">
                                <input type="text" v-model="keep.name" name="name" placeholder="Name of Vault">
                                <input type="text" v-model="keep.description" name="description" placeholder="description">
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
            <div class="list-group-item bg-2" v-for="keep in keeps">
                <Keep :keep="keep"></Keep>
            </div>
        </div>
    </div>
</template>

<script>
    import Keep from './Keep'
    export default {
        name: 'Vault',
        props: ["vault"],

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