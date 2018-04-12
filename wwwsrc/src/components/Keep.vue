<template>
    <div class="keep">
        <div class="row flexor">
            <div class="col-sm-4">
                <h4 class="name">{{keep.link}}</h4>
                <p>({{keep.name}})</p>
                <p>{{keep.description}}</p>
            </div>

            <div v-if="keep.userId == user._id">
                <button @click="deleteKeep(keep)" class="btn btn-link">Delete this Keep</button>
            </div>

        </div>
        <div class="results">
            <div class="card" style="width: 18rem;">
                <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                <div class="card-body">
                    <h5 class="card-title">Keep title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Views</a>
                    <a href="#" class="card-link">Keep</a>
                    <a href="#" class="card-link">Share</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Keep',
        props: ['keepProp'],

        data() {
            return {
                newVaultId: {

                },
                keep: {

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
                    _id: this.keepProp._id,
                    homeId: this.keepProp.homeId
                }

                this.$store.dispatch('moveKeep', { keep: updatedKeep, oldVaultId: this.keepProp.vaultId })
                console.log("results", updatedKeep)
            },
        },

        computed: {

            vaults() {
                return this.$store.state.vaults
            },

            user() {
                return this.$store.state.user
            }
        }
    }

</script>


<style>
</style>