<template>
  <div id="app" style="background-color:#f8f9fd;">
    <Header/>
    <SectionTitle title="THE DESIGN SYSTEM OF CREATIVE COMMONS OPEN SOURCE" content="Design, Build and Develop with Creative Common’s very own design system!"/>
    <SubSectionTitle title="OUR LEGACY, MISSION AND INSPIRATION" content="To unite the web facing Creative Commons by providing a cohesive design system and component library under the banner of Creative Commons Open Source."/>  
    <WhyVocabulary/>
    <SectionTitle title="SOMETHING NEW COMING UP THIS WEEK?" content="Love Vocabulary? Well then, you may not want to miss out on any of our releases!"/>
    <ReleaseGroup/>
    <SectionTitle title="WE DEVELOP THE COMPONENTS YOU NEED (& A LOT MORE!)" content="Here's a section for you to have a peak into our development process!"/>
    <Monorepo/>
    <PackageGroup/>
    <SectionTitle title="WANT TO KNOW MORE ABOUT US? COME, SAY HI!" content="How would you like to get to know more about Vocabulary and the team behind it?"/>
    <PostStatisticGroup/>   
    <Footer/>
  </div>
</template>

<style scoped>
#sub-section-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-evenly;
}
</style>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Monorepo from './components/Monorepo'
import PackageGroup from './components/PackageGroup'
import SectionTitle from './components/SectionTitle'
import SubSectionTitle from './components/SubSectionTitle'
import WhyVocabulary from './components/WhyVocabulary'
import ReleaseGroup from './components/ReleaseGroup'
import PostStatisticGroup from './components/PostStatisticGroup'

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
    PostStatisticGroup
  }
}
</script>
