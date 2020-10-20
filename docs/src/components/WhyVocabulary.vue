<template>
    <div id="page-section">
        <span class="card-content has-bottom-link">
            <h2 class="card-title">Why Vocabulary?</h2>
        </span>
    <div id="point-table">    
    <div class="table-of-progress top-container">
      <ul>
       <Step number=1 name="Responsive Components"/>
       <Step number=2 name="Easy to Use & Adapt"/>
      </ul>
      <br>
    </div>
    <div class="table-of-progress top-container">
        <ul>
         <Step number=3 name="Extensive Documentation"/>
         <Step number=4 name="Active Community Support"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
    #page-section {
        border: 3px solid lightgray;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: white;
    }

    #point-table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>

<script>
import Step from './Step.vue'

export default {
    name:'WhyVocabulary',
    components: {
        Step
    }
}
</script>