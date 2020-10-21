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
       <Step number=2 name="Weak Association"/>
       <Step number=3 name="Single Source of Truth"/>
      </ul>
      <br>
    </div>
    <div style="width:25px;"/>
    <div class="table-of-progress top-container">
        <ul>
         <Step number=4 name="Straightforward Release Process"/>
         <Step number=5 name="Easier Progress Tracking"/>
         <Step number=6 name="Simplified Issue Management"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
    #page-section {
        border: 3px solid lightgray;
        padding: 2rem;
        margin: 1rem;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
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
    name:'Monorepo',
    components: {
        Step
    }
}
</script>