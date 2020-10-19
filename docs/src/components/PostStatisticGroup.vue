<template>
    <div id="post-statistic-group">
      <PostStatistic :number="statisticList.stargazers_count" caption="Stars" description="Star the repository!" href="https://github.com/creativecommons/vocabulary"/>
      <PostStatistic :number="statisticList.forks_count" caption="Forks" description="Want to contribute? Fork the repository!" href="https://github.com/creativecommons/vocabulary"/>
      <PostStatistic :number="statisticList.watchers_count" caption="Watchers" description="Want to stay updated with all our activity?" href="https://github.com/creativecommons/vocabulary"/>
    </div>
</template>

<style scoped>
    #post-statistic-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        padding: 37.5px;
        justify-content: space-between;
    }
</style>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'
import PostStatistic from './PostStatistic'

export default {
    name:'PostStatisticGroup',
    components: {
        PostStatistic
    },
    data(){
        return {
            statisticList: null
        }
    },
    created(){
        fetch('https://api.github.com/repos/creativecommons/vocabulary')
        .then(response => response.json())
        .then(data => {
            this.statisticList=data
        });
    }
}
</script>