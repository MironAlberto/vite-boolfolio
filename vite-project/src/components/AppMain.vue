<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: 1
        };
    },
    methods: {
        getProjectsApi(page){
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: page
                }
            })
            .then(response => {
                // console.log(response.data);
                this.projects = response.data.results.projects.data;
                this.currentPage = response.data.results.projects.current_page;
                this.lastPage = response.data.results.projects.last_page;
            })
        },
        prevPage(){
            if (this.currentPage > 1){
                this.getProjectsApi(this.currentPage - 1);
            }
        },
        nextPage(){
            if (this.currentPage < this.lastPage){
                this.getProjectsApi(this.currentPage + 1);
            }
        }
    },
    created(){
        this.getProjectsApi(this.currentPage);
    },
    components: {
        ProjectCard
    }
}
</script>

<template>
    <main>
        <div class="container mt-3">
            <h5 class="d-flex justify-content-end fw-bolder mb-3">
                Page {{ currentPage }} of {{ lastPage }}
            </h5>
            <div class="d-flex justify-content-between">
                <button class="btn btn-dark text-dark" @click="prevPage()">
                    <a href="#nogo" class="link-light text-decoration-none">
                        Previous Page
                    </a>
                </button>
                <button class="btn btn-dark" @click="nextPage()">
                    <a href="#nogo" class="link-light text-decoration-none">
                        Next Page
                    </a>
                </button>
            </div>
            <h2 class="text-center my-2">
                My Projects
            </h2>
        </div>

        <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </main>
</template>

<style lang="scss" scoped>
</style>