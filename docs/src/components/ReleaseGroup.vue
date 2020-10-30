<template>
    <div id="carousel">
        <Carousel :per-page="perPage" :autoplay='true' :loop='true' :speed=1000 :autoplayTimeout=4000 :scrollPerPage='false'>
            <Slide v-for="(item,index) in releaseList" :key="index">
                <Release :releaseItem="item"/>
            </Slide>
        </Carousel>
    </div>
</template>

<style scoped>
    #carousel {
        padding: 0.25rem;
        margin: 0.25rem;
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
            releaseList: null,
            perPage: 0
        }
    },
    created(){
        fetch('https://api.github.com/repos/creativecommons/vocabulary/releases')
        .then(response => response.json())
        .then(data => {
            this.releaseList=data.splice(0,10)
            this.perPage=window.innerWidth/550
        });
    }
}
</script>
