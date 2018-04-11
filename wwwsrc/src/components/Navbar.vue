<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="col-sm-12">
            <div class="row justify-content-space-between">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Find a Keep" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Discover</button>
                </form>
                <div class="col-sm-4">

                </div>
                <div class="col-sm-2">
                    <!-- <p>Sign In</p> -->
                </div>
                <div class="col-sm-1">
                    <!-- <p>Register</p> -->
                </div>
                <div class="col-sm-1">
                    <p>Logout</p>
                </div>
            </div>
        </div>
    </nav>


</template>

<script>

    export default {
        name: 'Navbar',

        data() {
            return {

            }
        }
    }

</script>

<style>
    .navbar {
        color: white;
    }
</style>