<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    data() {
        return {
            projects: []
        };
    },
    methods: {

    },
    created(){
        axios.get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                // console.log(response.data);

                this.projects = response.data.results.projects.data;
            })
    },
    components: {
        ProjectCard
    }
}
</script>

<template>
    <main>
        <h2 class="text-center my-2">
            My Projects
        </h2>

        <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </main>
</template>

<style lang="scss" scoped>
</style>