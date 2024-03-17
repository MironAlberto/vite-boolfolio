<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null
        };
    },
    methods: {
        getProjectsApi(){
            axios.get('http://127.0.0.1:8000/api/projects/' + this.$route.params.id)
            .then(response => {
                if (response.data.message) {
                    this.project = response.data.results.project.data;
                    // console.log(this.project);
                }
                else {
                    this.$router.push({ name: 'not-found'});
                }
            })
        }
    },
    created(){
        this.getProjectsApi()
    }
}
</script>

<template>
    <div class="container" v-if="project != null">
        <div class="card text-white bg-dark mb-3">
            <div class="card-header">
                Title: {{ project.title }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-if="project.cover_image != null">
                    <div class="img-box">
                        <img :src="'http://127.0.0.1:8000/storage/' + project.cover_image" :alt="project.title">
                    </div>
                </li>
                <li class="list-group-item">
                    Type: {{ project.type.title }}
                </li>
                <li class="list-group-item">
                    Technologies: 
                    <span v-for="technology in project.technologies" :key="technology.id" class="badge rounded-pill m-1 text-bg-dark text-light">
                        {{ technology.title }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-box{
    max-width: 200px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>