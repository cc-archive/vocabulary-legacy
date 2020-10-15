<template>
  <div>
    <div :class="tabsClass">
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
    <div :class="tabsContentClass">
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
    provide () {
      return {
        tabList: this.tabList
      }
    },
    components: {
      SlotRenderer
    },
    props: {
      boxed: {
        type: Boolean,
        default: false
      },
      /**
       * The index of the tab which should be active when initialised.
       * Indices start at zero.
       */
      initialActiveTabIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        tabList: [],
        activeTabIndex: this.initialActiveTabIndex
      }
    },
    computed: {
      activeTab () {
        return this.tabList[this.activeTabIndex]
      },
      boxedClass () {
        return { 'is-boxed': this.boxed }
      },
      tabsClass () {
        return {
          tabs: true,
          ...this.boxedClass
        }
      },
      tabsContentClass () {
        return {
          'tabs-content': true,
          ...this.boxedClass
        }
      }
    },
    methods: {
      changeTab (index) {
        this.tabList[this.activeTabIndex].isActive = false
        this.activeTabIndex = index
        this.tabList[this.activeTabIndex].isActive = true
      }
    },
    mounted () {
      this.tabList[this.activeTabIndex].isActive = true
    }
  }
</script>
