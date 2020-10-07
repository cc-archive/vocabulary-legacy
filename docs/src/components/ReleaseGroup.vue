<template>
    <div>
        <Carousel :per-page="3">
            <Slide v-for="(item,index) in releaseList" :key="index">
                <Release :releaseItem="item"/>
            </Slide>
        </Carousel>
    </div>
</template>

<script>
import Release from './Release'
import { Carousel, Slide } from 'vue-carousel';
import '@creativecommons/vocabulary/css/vocabulary.css'

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
            console.log(data)
            this.releaseList=data
        });
    }
}
</script>