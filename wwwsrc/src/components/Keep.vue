<template>
    <div class="keep">
        <div class="results">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        <p>{{keep.name}}</p>
                    </h5>
                    <p>{{keep.description}}</p>
                    <h4 class="name">{{keep.link}}</h4>
                    <a href="#" class="card-link">Views</a>
                    <a href="#" class="card-link">Keep</a>
                    <a href="#" class="card-link">Share</a>
                </div>
                <button @click="removeKeep(keep)" class="btn btn-link">Delete this Keep</button>
            </div>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'Keep',
        props: ["keep"],

        data() {
            return {
                newVaultId: {

                },
            }
        },

        methods: {
            removeKeep(keep) {
                this.$store.dispatch('removeKeep', keep)
            },
            moveKeep() {
                var updatedKeep = {
                    vaultId: this.newVaultId,
                    _id: this.keep._id,
                    homeId: this.keep.homeId
                }

                this.$store.dispatch('moveKeep', { keep: updatedKeep, oldVaultId: this.keep.vaultId })
                console.log("results", updatedKeep)
            },
        },

        computed: {

            vaults() {
                return this.$store.state.vaults
            },

            user() {
                return this.$store.state.user
            },
            // keep() {
            //     return this.$store.state.activeKeep
            // },
        }
    }

</script>


<style>
</style>