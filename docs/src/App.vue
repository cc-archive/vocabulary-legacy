<template>
  <div id="app">
    <Header/>
    <SectionTitle title="THE DESIGN SYSTEM OF CREATIVE COMMONS OPEN SOURCE" content="Design, Build and Develop with Creative Common’s very own design system."/>
    <div id="sub-section-group">
      <SubSectionTitle title="OUR GOAL, MISSION AND INTENT" content="To unite the web facing Creative Commons by providing a cohesive design system and component library under the banner of Creative Commons Open Source."/>
    </div>
    <WhyVocabulary/>
    <SectionTitle title="VOCABULARY IN NUMBERS" content="How does Vocabulary stack up?"/>
    <br> <!--Content to be added here, todo-->
    <SectionTitle title="WHAT'S NEW" content="Catch up to our latest releases!"/>
    <ReleaseGroup/>
    <SectionTitle title="DESIGN" content="Design, Build and Develop with Creative Common’s very own design system!"/>
    <div id="sub-section-group">
      <SubSectionTitle title="INSPIRATION & HOW WE DO IT" content="This is what inspires us & This is what keeps us going"/>
    </div>
    <Monorepo/>
    <SectionTitle title="DEVELOPMENT" content="Have a peak into our development process!"/>
    <SubSectionTitle title="OUR PACKAGES" content="Fonts, Vocabulary & Vue-Vocabulary"/>
    <PackageGroup/>
    <SectionTitle title="GETTING STARTED" content="How to get started with using vocabulary"/>
    <br>
    <Footer/>
  </div>
</template>

<style scoped>
#sub-section-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 25px;
}
</style>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Monorepo from './components/Monorepo'
import PackageGroup from './components/PackageGroup'
import SectionTitle from './components/SectionTitle'
import SubSectionTitle from './components/SubSectionTitle'
import WhyVocabulary from './components/WhyVocabulary'
import ReleaseGroup from './components/ReleaseGroup'

export default {
  name: 'App',
  components: {
    Header,
    SectionTitle,
    Monorepo,
    SubSectionTitle,
    PackageGroup,
    WhyVocabulary,
    Footer,
    ReleaseGroup,
  }
}
</script>
