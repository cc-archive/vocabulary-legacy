<template>
  <div class="vocab tabbed" :class="tabbedClasses">
    <ul class="tabs">
      <li
        v-for="(tabPane, index) in tabPaneList"
        :key="index"
        class="tab"
        :class="{ active: index === activeTabIndex}"
        v-on:click="changeTab(index)">
        <span
          v-if="tabPane.title && !tabPane.$slots.tab">
          {{ tabPane.title }}
        </span>
        <SlotRenderer
          v-if="tabPane.$slots.tab"
          :component="tabPane"
          name="tab"
          tag="span"/>
      </li>
    </ul>
    <!-- Cannot use Section component because $parent used in TabbedPane -->
    <div class="vocab section contents" :class="sectionClasses">
      <slot/>
    </div>
  </div>
</template>

<script>
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
      SlotRenderer
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
      },
      sectionClasses: function () {
        return [
          this.color,
          this.shade,
          {
            'raised': this.isRaised,
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
