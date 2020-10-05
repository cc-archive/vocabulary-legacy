<template>
    <div id="page-section">
        <span class="card-content has-bottom-link">
            <h2 class="card-title">Vocabulary, a Monorepo?</h2>
            <span class="content">Does vocabulary really have to be a monorepo?</span>
        </span>
    <div id="point-table">    
    <div class="table-of-progress top-container">
      <ul>
       <Step number=1 name="Better Structure"/>
        <li class="step">
          <a class="link">
            <span class="number is-active">2</span>
            <span class="name">Weak Association</span>
          </a>
        </li>
        <li class="step">
          <a class="link">
            <span class="number is-active">3</span>
            <span class="name">Single Source of Truth</span>
          </a>
        </li>
      </ul>
      <br>
    </div>
    <div style="width:25px;"/>
    <div class="table-of-progress top-container">
        <ul>
          <li class="step">
          <a class="link">
            <span class="number is-active">4</span>
            <span class="name">Straightforward Release Process</span>
          </a>
        </li>
         <li class="step">
          <a class="link">
            <span class="number is-active">5</span>
            <span class="name">Easier Progress Tracking</span>
          </a>
        </li>
         <li class="step">
          <a class="link">
            <span class="number is-active">6</span>
            <span class="name">Simplified Issue Management</span>
          </a>
        </li>
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
    name:'Monorepo',
    components: {
        Step
    }
}
</script>