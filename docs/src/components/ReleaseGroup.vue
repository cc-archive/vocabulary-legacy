<template>
    <div id="carousel">
        <Carousel :per-page="3">
            <Slide v-for="(item,index) in releaseList" :key="index">
                <Release :releaseItem="item"/>
            </Slide>
        </Carousel>
    </div>
</template>

<style scoped>
    #carousel {
        padding: 0.5rem;
        margin: 0.5rem;
    }
</style>

<script>
import Release from './Release'
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'ReleaseGroup',
    components: {
        Release,
        Carousel,
        Slide
    },
    data(){
        return {
            releaseList: null
        }
    },
    created(){
        fetch('https://api.github.com/repos/creativecommons/vocabulary/releases')
        .then(response => response.json())
        .then(data => {
            this.releaseList=data
        });
    }
}
</script>