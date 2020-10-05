<template>
<div id="pagi-wrap">
     <div class="white-bg">
      <h5 class="b-header padding-vertical-big"></h5>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <ul class="pagination-list">
          <li class="inactive">
            <a class="pagination-link inactive-link" aria-label="Goto previous"><i class="icon chevron-left"></i></a>
          </li>
          <li class="inactive">
            <a class="pagination-link inactive-link" aria-label="Goto page 1">1</a>
          </li>
          <li class="common">
            <a class="pagination-link is-current common-link" aria-label="Goto page 2" aria-current="page">2</a>
          </li>
          <li class="inactive">
            <a class="pagination-link inactive-link" aria-label="Goto page 3">3</a>
          </li>
           <li class="inactive">
            <a class="pagination-link inactive-link" aria-label="Goto next"><i class="icon chevron-right"></i></a>
          </li>
        </ul>
      </nav>
    </div>
    </div>
</template>

<style scoped>
#pagi-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 25px;
}
</style>

<script>
export default {
    name: 'Pagination'
}
</script>

