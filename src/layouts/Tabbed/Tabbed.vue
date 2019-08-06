<template>
  <div class="vocab tabbed" :class="tabbedClasses">
    <ul class="tabs">
      <li
        v-for="(tabPane, index) in tabPaneList"
        :key="index"
        class="tab"
        :class="{ active: index === activeTabIndex}"
        @click="changeTab(index)">
        <SlotRenderer
          :component="tabPane"
          name="tab"
          tag="span">
          {{ tabPane.title }}
        </SlotRenderer>
      </li>
    </ul>
    <Section
      class="contents"
      :color="processedColor"
      :shade="processedShade"
      color-side="bottom"
      :is-raised="isRaised"
      :is-rounded="isRounded"
      :is-inverted="isInverted"
      :is-basic="isBasic"
      :is-ghost="isGhost"
      is-clingy>
      <SlotRenderer
        v-for="(tabPane, index) in tabPaneList"
        :key="index"
        :component="tabPane"
        tag="div"
        :classList="['content', {active: tabPane.isActive}]"/>
    </Section>
    <div v-show="false">
      <!-- @slot [`TabbedPane`](#/Layouts/TabbedPane) components go here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'

  import Section from '@/layouts/Section/Section'

  import Colored from '@/mixins/colored'
  import Invertible from '@/mixins/invertible'
  import Raisable from '@/mixins/raisable'
  import Roundable from '@/mixins/roundable'
  import Simplifiable from '@/mixins/simplifiable'

  /**
   * ### Tabbed views show menu-selected content.
   *
   * When there is a slot of data with the element of choice, a tabbed view
   * allows the user to choose a part of the information by making a selection
   * out of several tabs. Tabs can act as pseudo-navigation or in-page
   * navigation.
   */
  export default {
    name: 'Tabbed',
    mixins: [
      Colored,
      Invertible,
      Raisable,
      Roundable,
      Simplifiable
    ],
    provide: function () {
      return {
        tabPaneList: this.tabPaneList
      }
    },
    components: {
      SlotRenderer,
      Section
    },
    props: {
      /**
       * _the index of the tab which should be active when initialised_
       *
       * Indices start at zero.
       */
      initialActiveTabIndex: {
        type: Number,
        default: 0
      }
    },
    data: function () {
      return {
        tabPaneList: [],
        activeTabIndex: this.initialActiveTabIndex
      }
    },
    computed: {
      processedColoredClasses: function () {
        try {
          let activeTab = this.tabPaneList[this.activeTabIndex]
          if (activeTab.color) {
            return activeTab.coloredClasses
          }
        } catch (e) {
          // Do nothing
        }
        return this.coloredClasses
      },

      tabbedClasses: function () {
        return [
          ...this.invertibleClasses,
          ...this.roundableClasses,
          ...this.simplifiableClasses,

          ...this.processedColoredClasses
        ]
      },

      processedColor: function () {
        try {
          let activeTab = this.tabPaneList[this.activeTabIndex]
          if (activeTab.color) {
            return activeTab.color
          }
        } catch (e) {
          // Do nothing
        }
        return this.color
      },
      processedShade: function () {
        try {
          let activeTab = this.tabPaneList[this.activeTabIndex]
          if (activeTab.shade) {
            return activeTab.shade
          }
        } catch (e) {
          // Do nothing
        }
        return this.shade
      }
    },
    methods: {
      changeTab: function (index) {
        this.tabPaneList[this.activeTabIndex].isActive = false
        this.activeTabIndex = index
        this.tabPaneList[this.activeTabIndex].isActive = true
      }
    },
    mounted: function () {
      this.tabPaneList[this.activeTabIndex].isActive = true
    }
  }
</script>

<style lang="stylus" src="./Tabbed.styl">
</style>
