<template>
    <Carousel 
        :perPageCustom="[[280, 1],[320, 1],[360, 1],[400, 1], [500, 2], [1024, 3], [1199, 4], [2000, 6], [3000, 7]]"
        :minSwipeDistance="2"
        :autoplay='true'
        :loop='true'
        :scrollPerPage='false'>
            <Slide 
                v-for="(item,index) in releaseList" 
                :key="index">
                    <Release :releaseItem="item"/>
            </Slide>
    </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Release from './Release'

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
        });
    }
}
</script>
