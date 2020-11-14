<!--
  Component: App
  Description: The landing page composed of many components
  Props: None
  Nested Components: [ Header, Footer, Monorepo, PackageGroup, PostStatisticGroup, ReleaseGroup, SectionTitle, SubSectionTitle, WhyVocabulary ]
-->

<template>
  <div id="app">
    <Header/>
    <Hero
      id="home"
      title=""
      content=""
      pathtosvg="intro.svg"
      href="https://opensource.creativecommons.org/blog/categories/cc-vocabulary/"
      hero="true"
      />
    <Monorepo/>
    <PackageGroup/>
    <WhyVocabulary/>
    <PostStatisticGroup/>
    <Footer/>
  </div>
</template>

<style>
  .section-margin {
    margin: 0.5rem;
  }

  .padding-section-margin {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .separator {
    margin-right: 1.5rem;
  }

  .page-section {
    padding: 6rem;

    justify-content: space-evenly;
    background-color: white;
  }

  .point-table {
      justify-content: space-between;
  }

  .hero {
    min-height: 40vmax;
  }

  .sub-title {
    font-weight: normal; 
    color: #767676; 
  }

  .spacer {
    margin-bottom: 1.5rem;
  }

  .group-card {
    width: 25rem;
    margin: 0.5rem;
  }

  .group-card-link {
    color:gray;
    text-transform: uppercase;
  }
</style>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Monorepo from './components/Monorepo'
import PackageGroup from './components/PackageGroup'
import PostStatisticGroup from './components/PostStatisticGroup'
import WhyVocabulary from './components/WhyVocabulary'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Footer,
    Monorepo,
    PackageGroup,
    PostStatisticGroup,
    WhyVocabulary,
  }
}
</script>
