<template>
  <div id="app">
    <Header/>
    <Monorepo/>
    <PackageGroup/>  
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Monorepo from './components/Monorepo.vue'
import PackageGroup from './components/PackageGroup.vue'

export default {
  name: 'App',
  components: {
    Header,
    Monorepo,
    PackageGroup,
    Footer
  }
}
</script>
