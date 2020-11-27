<!--
  Component: PostStatisticGroup
  Description: Groups the 3 PostStatistic cards and grids them
  Props: None
  Nested Components: [ PostStatistic ]
-->

<template>
    <div class="container group post-group padding-section-margin">
      <PostStatistic 
        :number="stars"
        caption="Stars"
        description="Like our work? Star the repository!"
        href="https://github.com/creativecommons/vocabulary"/>
      <PostStatistic 
        :number="forks"
        caption="Forks"
        description="Want to contribute? Fork the repository!"
        href="https://github.com/creativecommons/vocabulary"/>
      <PostStatistic
        :number="watchers"
        caption="Watchers"
        description="Want to stay updated with all our activity?"
        href="https://github.com/creativecommons/vocabulary"/>
    </div>
</template>

<style scoped>
    .post-group {
        justify-content: space-evenly;
    }
</style>

<script>
import PostStatistic from './PostStatistic'

export default {
    name:'PostStatisticGroup',
    components: {
        PostStatistic
    },
    data(){
        return {
            stars: 0,
            forks: 0,
            watchers: 0
        }
    },
    created(){
        fetch('https://api.github.com/repos/creativecommons/vocabulary')
        .then(response => response.json())
        .then(data => {
            this.stars=data.stargazers_count
            this.forks=data.forks_count
            this.watchers=data.watchers_count-25
        });
    }
}
</script>
