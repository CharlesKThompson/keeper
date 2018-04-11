<template>
    <div class="vault">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 vault-title">
                    Vault Name: {{vault.name}}
                </div>
                <form class="form-control mtop" @submit.prevent="addKeep">
                    <div class="row">
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="add-new-keep" v-model="keep.title" name="title" placeholder="Add a New Keep">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 keep-buttons">
                            <!-- ADD TASK BUTTON -->
                            <button class="btn btn-primary btn-sm mleft">
                                Add New Keep
                            </button>
                            <!-- RESET BUTTON -->
                            <button class="btn btn-warning btn-sm" type="reset">
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- Keeps DRAW HERE -->
            <div class="row" v-for="keep in keeps">
                <div class="col-sm-12">
                    <keep :keepProp='keep'></keep>
                </div>
                <!-- DELETE Keep ICON-BUTTON -->
                <div class="col-sm-12">
                    <button class="keep-btn trash-keep" @click.prevent='removeKeep(keep)'>
                        <p>Delete this keep</p>
                    </button>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Keep from './Keep'
    export default {
        name: 'Vault',
        // props: ['vaultProp'],
        mounted() {
            this.$store.dispatch('getKeeps', {
                homeId: this.$route.params.homeId,
                vaultId: this.vault._id
            })
        },
        data() {
            return {
                keep: {
                    title: ""
                },
            }
        },
        components: {
            Keep
        },
        methods: {
            addKeep(keep) {
                this.keep.homeId = this.$route.params.homeId
                this.keep.vaultId = this.vaultProp._id
                console.log(this.keep)
                this.$store.dispatch('addKeep', this.keep);
            },
            removeVault(vault) {
                this.$store.dispatch('removeVault', vault)
            },
            getKeeps() {
                this.$store.dispatch('getKeeps', {
                    homeId: this.$route.params.homeId,
                    vaultId: this.vaultProp._id
                })
            },
            removeKeep(keep) {
                this.$store.dispatch('removeKeep', keep)
            },
        },
        computed: {
            keeps() {
                return this.$store.state.keeps[this.vaultProp._id]
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