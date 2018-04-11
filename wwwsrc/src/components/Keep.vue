<template>
    <div class="keep">
<h2>This is the Keep screen</h2>
<div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
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