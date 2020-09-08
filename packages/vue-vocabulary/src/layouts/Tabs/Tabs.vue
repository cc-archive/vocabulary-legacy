<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabList"
          :key="index"
          :class="{ 'is-active': index === activeTabIndex }"
          @click="changeTab(index)">
          <SlotRenderer
            :component="tab"
            name="tab"
            tag="a">
            {{ tab.title }}
          </SlotRenderer>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <SlotRenderer
        v-for="(tab, index) in tabList"
        :key="index"
        :component="tab"
        tag="div"
        :classList="['tabs-panel', {'is-active': index === activeTabIndex }]"/>
    </div>
    <div v-show="false">
      <!-- @slot [`Tab`](#/Layouts/Tab) components go here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'

  export default {
    name: 'Tabs',
    provide: function () {
      return {
        tabList: this.tabList
      }
    },
    components: {
      SlotRenderer
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
        tabList: [],
        activeTabIndex: this.initialActiveTabIndex
      }
    },
    computed: {
      activeTab: function () {
        return this.tabList[this.activeTabIndex]
      }
    },
    methods: {
      changeTab: function (index) {
        this.tabList[this.activeTabIndex].isActive = false
        this.activeTabIndex = index
        this.tabList[this.activeTabIndex].isActive = true
      }
    },
    mounted: function () {
      this.tabList[this.activeTabIndex].isActive = true
    }
  }
</script>
