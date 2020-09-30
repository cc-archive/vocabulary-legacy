<template>
    <div id="page-section">
        <span class="card-content has-bottom-link">
            <h2 class="card-title">Why is Vocabulary a Monorepo?</h2>
            <span class="content">Description ultrices elementum metus ligula pharetra litora class massa.</span>
            <span class="link-arrow">Loren ipsum dolor</span>
        </span>
    <div class="table-of-progress top-container">
      <ul>
        <li class="step">
          <a class="link">
            <span class="number is-active">1</span>
            <span class="name">Step 1, active step</span>
          </a>
        </li>
        <li class="step">
          <a class="link">
            <span class="number is-active">2</span>
            <span class="name">Step 2</span>
          </a>
        </li>
        <li class="step">
          <a class="link">
            <span class="number is-active">3</span>
            <span class="name">Step 3</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="table-of-progress top-container">
        <ul>
              <li class="step">
          <a class="link">
            <span class="number is-active">4</span>
            <span class="name">Step 4</span>
          </a>
        </li>
         <li class="step">
          <a class="link">
            <span class="number is-active">5</span>
            <span class="name">Step 5</span>
          </a>
        </li>
         <li class="step">
          <a class="link">
            <span class="number is-active">6</span>
            <span class="name">Step 6</span>
          </a>
        </li>
        </ul>
    </div>
    </div>
</template>

<style scoped>
    #page-section {
        margin: 37.5px;
        padding-bottom: 25px;
        padding-top: 25px;
        border: 3px solid lightgray;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>

<script>
export default {
    name:'Monorepo'
}
</script>