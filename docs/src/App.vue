<template>
  <div id="app">
    <Header/>
    <SectionTitle
      id="home"
      title="THE DESIGN SYSTEM OF CC OPEN SOURCE"
      content="Design, Develop & Build with Creative Commons' very own design system!"
      pathtosvg="intro.svg"
      href="https://opensource.creativecommons.org/blog/categories/cc-vocabulary/"
      />
    <SubSectionTitle 
      title="OUR MISSION" 
      content="Our sole aim is to unite the web facing Creative Commons by providing a cohesive design system and component library under the banner of Creative Commons Open Source. Our code will remain to be freely available to anyone and everyone to inspect, modify & use for their own purposes."/>
    <WhyVocabulary/>
    <SectionTitle
      id="whatsnew"
      title="SOMETHING NEW COMING UP THIS WEEK?"
      content="Love Vocabulary? Well then, you may not want to miss out on any of our releases!"
      href="https://github.com/creativecommons/vocabulary/releases"
      pathtosvg="releases.svg"
      />
    <ReleaseGroup/>
    <SectionTitle
      id="development"
      title="WE DESIGN & DEVELOP THE COMPONENTS YOU NEED"
      content="Here's a section for you to have a peak into our development process!"
      href="https://github.com/creativecommons/vocabulary/blob/master/README.md"
      pathtosvg="designdevelop.svg"
      />
    <Monorepo/>
    <PackageGroup/>
    <SectionTitle
      id="about"
      title="WANT TO KNOW MORE ABOUT US? COME, SAY HI!"
      content="Would you like to get to know more about Vocabulary and the team behind it? We welcome your contributions!"
      href="https://opensource.creativecommons.org/community/"
      pathtosvg="team.svg"
      />
    <SubSectionTitle 
      title="OUR JOURNEY" 
      content="Oh boy! We've come a long way to get here! Vocabulary started off as a project with the aim to build something that would effectively unify the web facing front for organisations powered by Creative Commons. It has now transformed into a mature & well equipped library. (PS: This site is built using CC-Vocabulary!)"/>
    <PostStatisticGroup/>
    <Footer/>
  </div>
</template>

<style>
  .section-margin {
    margin: 0.5rem;
  }

  .padding-section-margin {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .separator {
    margin-right: 1.5rem;
  }
</style>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Monorepo from './components/Monorepo'
import PackageGroup from './components/PackageGroup'
import PostStatisticGroup from './components/PostStatisticGroup'
import ReleaseGroup from './components/ReleaseGroup'
import SectionTitle from './components/SectionTitle'
import SubSectionTitle from './components/SubSectionTitle'
import WhyVocabulary from './components/WhyVocabulary'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Monorepo,
    PackageGroup,
    PostStatisticGroup,
    ReleaseGroup,
    SectionTitle,
    SubSectionTitle,
    WhyVocabulary,
  }
}
</script>
