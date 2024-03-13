<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="container">
        <div class="card text-white bg-dark mb-3">
            <div class="card-header">
                Title: {{ project.title }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    Type: {{ project.type.title }}
                </li>
                <li class="list-group-item">
                    Technologies: 
                    <span v-for="technology in project.technologies" :key="technology.id" class="badge rounded-pill text-bg-dark text-light">
                        {{ technology.title }}
                    </span>
                </li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>