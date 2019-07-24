<template>
  <div class="vocab tabbed" :class="tabbedClasses">
    <ul class="tabs">
      <li
        v-for="(tabPane, index) in tabPaneList"
        :key="index"
        class="tab"
        :class="{ active: index === activeTabIndex}"
        v-on:click="changeTab(index)">
        <SlotRenderer
          :component="tabPane"
          name="tab"
          tag="span">
          {{ tabPane.title }}
        </SlotRenderer>
      </li>
    </ul>
    <!-- Cannot use Section component because $parent used in TabbedPane -->
    <Section
      :color="color"
      :shade="shade"
      :isRaised="isRaised"
      :isRounded="isRounded"
      :isInverted="isInverted"
      class="contents">
      <SlotRenderer
        v-for="(tabPane, index) in tabPaneList"
        :key="index"
        :component="tabPane"
        tag="div"
        :classList="['content', {active: tabPane.isActive}]"/>
    </Section>
    <div style="display: none;">
      <!-- @slot [`TabbedPane`](#/Layouts/TabbedPane) components go here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  import Section from '@/layouts/Section/Section'

  import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'

  import Colorable from '@/mixins/colorable'
  import Invertible from '@/mixins/invertible'
  import Basicable from '@/mixins/basicable'
  import Raisable from '@/mixins/raisable'
  import Roundable from '@/mixins/roundable'

  /**
   * ## Tabbed views show menu-selected content.
   *
   * When there is a slot of data with the element of choice, a tabbed view
   * allows the user to choose a part of the information by making a selection
   * out of several tabs. Tabs can act as pseudo-navigation or in-page
   * navigation.
   */
  export default {
    name: 'Tabbed',
    mixins: [
      Colorable,
      Invertible,
      Basicable,
      Raisable,
      Roundable
    ],
    components: {
      SlotRenderer,
      Section
    },
    data: function () {
      return {
        tabPaneList: [],
        activeTabIndex: this.initialActiveTabIndex
      }
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
    computed: {
      tabbedClasses: function () {
        return [
          this.color,
          this.shade,
          {
            'basic': this.isBasic,
            'inverted': this.isInverted,
            'rounded': this.isRounded
          }
        ]
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
