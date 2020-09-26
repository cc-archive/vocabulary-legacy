<template>
<header>
      <nav class="navbar ">
        <div class="navbar-brand">
          <a class="has-text-black">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 212 40">
                <use href="logos/products/vocabulary.svg#vocabulary"></use>
            </svg></a>
          <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-end">
              <a class="navbar-item">
              What's new
            </a>
            <a class="navbar-item">
              Design
            </a>
            <a class="navbar-item">
              Development
            </a>
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
                <i class="icon github"></i>
            </a>    
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'

export default {
    name: 'Header',
}
</script>