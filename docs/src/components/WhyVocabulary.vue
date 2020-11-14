<!--
  Component: WhyVocabulary
  Description: A section describing why vocabulary?
  Props: None
  Nested Components: [ Step ]
-->

<template>
    <div class="page-section group special">
        <span class="card-content has-bottom-link">
            <h2 class="card-title has-text-white">Why Vocabulary?</h2>
        </span>
    <div class="point-table group">    
      <div class="table-of-progress top-container separator">
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
  .special {
    min-height: 20vmax;
    background-color: #333333;
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
