<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container">
                    <router-link :to="{ name: 'welcome'}" class="navbar-brand">
                        <a href="" class="nav-link">
                            <span>
                                Welcome
                            </span>
                        </a>
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#nogo">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'projects.index'}" class="text-decoration-none">
                                    <a href="" class="nav-link">
                                        <span>
                                            My Projects
                                        </span>
                                    </a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#nogo">
                                    <div class="text-center">
                                        <i class="fa-solid fa-plus fa-xl"></i>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nogo">My Types</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nogo">My Technologies</a>
                            </li>
                        </ul>

                        <button type="submit" class="btn btn-outline-light fw-bolder">
                            Log Out
                        </button>
                    </div>
                </div>
            </nav>
    </header>
</template>

<style lang="scss" scoped>
</style>