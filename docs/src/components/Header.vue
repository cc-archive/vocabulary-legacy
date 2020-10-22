<template>
<div>
  <header>
      <nav class="navbar ">
        <div class="navbar-brand">
          <a class="has-text-black">
            <img
              alt="Vocabulary logo"
              src="https://raw.githubusercontent.com/creativecommons/vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"/>
            </a>
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
              Development
            </a>  
             <a class="navbar-item">
              About
            </a>
            <a class="navbar-item" href="https://github.com/creativecommons/vocabulary" target="blank">
                <i class="icon github"></i>
            </a>    
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>
