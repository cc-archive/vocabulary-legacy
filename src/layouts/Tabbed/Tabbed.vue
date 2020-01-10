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
      :brand="processedBrand"
      :color="processedColor"
      :shade="processedShade"
      :indication="processedIndication"
      color-side="bottom"
      :roundness="roundness ? 'rounded' : null"
      :is-raised="isRaised"
      :is-inverted="isInverted"
      :simplicity="simplicity"
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

  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Rounded from '@/mixins/rounded'
  import Simplified from '@/mixins/simplified'

  import Invertible from '@/mixins/invertible'
  import Raisable from '@/mixins/raisable'

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
      Branded,
      Colored,
      Indicating,
      Rounded,
      Simplified,

      Invertible,
      Raisable
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
      },
      /**
       * _whether to have curvature on the vertices of the component_
       */
      isRounded: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        tabPaneList: [],
        activeTabIndex: this.initialActiveTabIndex
      }
    },
    computed: {
      processedBrandedClasses: function () {
        try {
          let activeTab = this.activeTab
          if (activeTab.brand) {
            return activeTab.brandedClasses
          }
        } catch (e) {
          // Do nothing
        }
        return this.brandedClasses
      },
      processedColoredClasses: function () {
        try {
          let activeTab = this.activeTab
          if (activeTab.color) {
            return activeTab.coloredClasses
          }
        } catch (e) {
          // Do nothing
        }
        return this.coloredClasses
      },
      processedIndicatingClasses: function () {
        try {
          let activeTab = this.activeTab
          if (activeTab.indication) {
            return activeTab.indicatingClasses
          }
        } catch (e) {
          // Do nothing
        }
        return this.indicatingClasses
      },

      tabbedClasses: function () {
        return [
          ...this.simplifiedClasses,

          ...this.invertibleClasses,

          ...this.processedBrandedClasses,
          ...this.processedColoredClasses,
          ...this.processedIndicatingClasses,
          {
            'rounded': this.isRounded
          }
        ]
      },

      processedBrand: function () {
        try {
          let activeTab = this.activeTab
          if (activeTab.brand) {
            return activeTab.brand
          }
        } catch (e) {
          // Do nothing
        }
        return this.brand
      },
      processedColor: function () {
        try {
          let activeTab = this.activeTab
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
          let activeTab = this.activeTab
          if (activeTab.shade) {
            return activeTab.shade
          }
        } catch (e) {
          // Do nothing
        }
        return this.shade
      },
      processedIndication: function () {
        try {
          let activeTab = this.activeTab
          if (activeTab.indication) {
            return activeTab.indication
          }
        } catch (e) {
          // Do nothing
        }
        return this.indication
      },

      activeTab: function () {
        return this.tabPaneList[this.activeTabIndex]
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

<style src="@creativecommons/vocabulary/css/layouts/Tabbed.css">
</style>
