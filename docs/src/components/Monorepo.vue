<template>
    <div id="page-section">
        <span class="card-content has-bottom-link">
            <h2 class="card-title">Vocabulary, a Monorepo?</h2>
            <span class="content">Does vocabulary really have to be a monorepo?</span>
        </span>
    <div class="table-of-progress top-container">
      <ul>
        <li class="step">
          <a class="link">
            <span class="number is-active">1</span>
            <span class="name">Structure</span>
          </a>
        </li>
        <li class="step">
          <a class="link">
            <span class="number is-active">2</span>
            <span class="name">Association</span>
          </a>
        </li>
        <li class="step">
          <a class="link">
            <span class="number is-active">3</span>
            <span class="name">All In One</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="table-of-progress top-container">
        <ul>
              <li class="step">
          <a class="link">
            <span class="number is-active">4</span>
            <span class="name">Release Process</span>
          </a>
        </li>
         <li class="step">
          <a class="link">
            <span class="number is-active">5</span>
            <span class="name">Progress Tracking</span>
          </a>
        </li>
         <li class="step">
          <a class="link">
            <span class="number is-active">6</span>
            <span class="name">Issue Management</span>
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
        padding-top: 35px;
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