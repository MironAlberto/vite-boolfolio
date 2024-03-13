<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import Axios from 'axios';

export default {
    data() {
        return {

        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
    mounted(){
        Axios.get.apply().then((response) => {
            console.log(response);
        });
    }
}
</script>

<template>
    <h1>
        Template Vite 
    </h1>

    <AppHeader/>

    <AppMain/>

    <AppFooter/>
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
