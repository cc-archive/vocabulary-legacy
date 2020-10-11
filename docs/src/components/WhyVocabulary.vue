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
    <div style="width:25px;"/>
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
        margin: 37.5px;
        padding-bottom: 25px;
        padding-top: 35px;
        border: 3px solid lightgray;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: white;
    }

    #point-table {
        margin-left: 25px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #table-of-progress top-container {
      padding: 10px;
    }
</style>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'
import Step from './Step.vue'

export default {
    name:'WhyVocabulary',
    components: {
        Step
    }
}
</script>