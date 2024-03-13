<script>
import axios from 'axios';

export default {
    data() {
        return {

        };
    },
    methods: {

    },
    created(){
        axios.get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                console.log(response.data);
            })
    }
}
</script>

<template>
    <main>
        MAIN
    </main>
</template>

<style lang="scss" scoped>
</style>