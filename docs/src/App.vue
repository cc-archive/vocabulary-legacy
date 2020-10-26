<template>
  <div id="app">
    <Header/>
    <SectionTitle
      id="home"
      title="THE DESIGN SYSTEM OF CC OPEN SOURCE"
      content="Design, Build and Develop with Creative Common’s very own design system!"
      pathtosvg="intro.svg"
      href="https://opensource.creativecommons.org/blog/entries/cc-vocabulary-new-design-system/"
      />
    <SubSectionTitle 
      title="OUR MISSION" 
      content="Our sole aim is to unite the web facing Creative Commons by providing a cohesive design system and component library under the banner of Creative Commons Open Source. Our code will remain to be freely available for anyone and everyone to inspect, modify & use for their own purposes."/>
    <WhyVocabulary/>
    <SectionTitle 
      title="SOMETHING NEW COMING UP THIS WEEK?"
      content="Love Vocabulary? Well then, you may not want to miss out on any of our releases!"
      id="whatsnew" 
      pathtosvg="releases.svg"
      href="https://github.com/creativecommons/vocabulary/releases"
      />
    <ReleaseGroup/>
    <SectionTitle 
      title="WE DESIGN & DEVELOP THE COMPONENTS YOU NEED"
      content="Here's a section for you to have a peak into our development process!"
      id="development"
      pathtosvg="designdevelop.svg"
      href="https://cc-vocabulary.netlify.app/?path=/story/vocabulary-contribution--page"
      />
    <Monorepo/>
    <PackageGroup/>
    <SectionTitle 
      title="WANT TO KNOW MORE ABOUT US? COME, SAY HI!"
      content="Would you like to get to know more about Vocabulary and the team behind it? We welcome your contributions!"
      id="about"
      pathtosvg="team.svg"
      href="https://creativecommons.slack.com/"
      />
    <SubSectionTitle 
      title="OUR JOURNEY" 
      content="Oh boy! We've come a long way to get here! Vocabulary started off as a project with the aim to build something that would unify the webface for organisations powered by Creative Commons. It has now matured into a well equipped & rather pretty looking library! (PS: This site is built using CC-Vocabulary!)"/>
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
import '@creativecommons/vocabulary/js/vocabulary.js'

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
