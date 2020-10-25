<template>
<div>
  <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="has-text-black" href="/">
            <img
              alt="Vocabulary logo"
              src="https://raw.githubusercontent.com/creativecommons/vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"
              />
            </a>
          <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-end">
              <a class="navbar-item" href="#whatsnew">
              What's new
            </a>
            <a class="navbar-item" href="#development">
              Development
            </a>  
            <a class="navbar-item" href="#about">
              About
            </a>
            <a class="navbar-item" href="https://cc-vocabulary.netlify.app" target="_blank">
              Documentation
            </a>
            <a class="navbar-item" href="https://github.com/creativecommons/vocabulary" target="_blank">
                <i class="icon github"></i>
            </a>    
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import '@creativecommons/vocabulary/js/vocabulary.js'

export default {
    name: 'Header',
}
</script>
