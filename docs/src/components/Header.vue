<!--
  Component: Header
  Description: Standard CC Header (mandatory)
  Props: None
  Nested Components: None

  (To be replaced with the Vue Component shortly)
-->

<template>
  <header>
    <nav class="navbar container">
      <div class="navbar-brand">
        <div class="has-text-black">
          <img 
            src="https://unpkg.com/@creativecommons/vocabulary@2020.9.4/assets/logos/products/vocabulary.svg"
            alt="vocabulary logo"
            />
        </div>
        <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false" rel="noopener">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/creativecommons/vocabulary/releases" target="_blank" rel="noopener">
            Release Notes
            <i class="icon external-link"></i>
          </a>
          <a class="navbar-item" href="https://cc-vocabulary.netlify.app" target="_blank" rel="noopener">
            Documentation
            <i class="icon external-link"></i>
          </a>
          <a class="navbar-item" href="https://github.com/creativecommons/vocabulary" target="_blank" rel="noopener">
            GitHub
            <i class="icon github"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>
