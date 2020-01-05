<template>
  <span class="vocab license-icons">
    <template v-for="(icon, index) in processedIconList">
      <template v-if="showsPopup(index)">
        <Popup
          :key="index"
          v-bind="$attrs">
          <FontAwesomeIcon
            :icon="['fab', icon]"
            fixed-width/>
          <template #popup>
            <!-- @slot Popup content goes here -->
            <slot :name="index">{{ computedStrings[index] }}</slot>
          </template>
        </Popup>
      </template>
      <template v-else>
        <FontAwesomeIcon
          :key="index"
          :icon="['fab', icon]"
          fixed-width/>
      </template>
    </template>
  </span>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faCreativeCommons,
    faCreativeCommonsBy,
    faCreativeCommonsNc,
    faCreativeCommonsNcEu,
    faCreativeCommonsNcJp,
    faCreativeCommonsNd,
    faCreativeCommonsSa,
    faCreativeCommonsPd,
    faCreativeCommonsZero,
    faCreativeCommonsRemix,
    faCreativeCommonsSampling,
    faCreativeCommonsSamplingPlus,
    faCreativeCommonsShare
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Popup from '@/patterns/Popup/Popup'

  library.add(
    faCreativeCommons,
    faCreativeCommonsBy,
    faCreativeCommonsNc,
    faCreativeCommonsNcEu,
    faCreativeCommonsNcJp,
    faCreativeCommonsNd,
    faCreativeCommonsSa,
    faCreativeCommonsPd,
    faCreativeCommonsZero,
    faCreativeCommonsRemix,
    faCreativeCommonsSampling,
    faCreativeCommonsSamplingPlus,
    faCreativeCommonsShare
  )

  /**
   * ### License icons are hieroglyphs for the aspects of a license.
   *
   * A license icon represents an aspect of a license such as shareability and
   * commercial usability in pictorial form.
   */
  export default {
    name: 'LicenseIconography',
    components: {
      FontAwesomeIcon,
      Popup
    },
    inheritAttrs: false,
    props: {
      /**
       * _the list of icons to display_
       *
       * ⊂ {`''`, `'by'`, `'nc'`, `'nd'`, `'sa'`, `'nc-eu'`, `'nc-jp'`,
       * `'sampling'`, `'sampling-plus'`, `'remix'`, `'share'`, `'zero'`,
       * `'pd'`}
       */
      iconList: {
        type: Array,
        required: true,
        validator: val => val.every(
          icon => [
            '',
            'by',
            'nc',
            'nd',
            'sa',
            'nc-eu',
            'nc-jp',
            'sampling',
            'sampling-plus',
            'remix',
            'share',
            'zero',
            'pd'
          ].includes(icon)
        )
      },
      /**
       * _the list of strings to show in the popups corresponding to the icons_
       *
       * If the length is not equal to the length of `iconList`, the list will
       * be extended or cropped as needed.
       */
      stringList: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      processedIconList: function () {
        return this.iconList.map(icon => {
          return `creative-commons${icon ? '-' : ''}${icon}`
        })
      },
      computedStrings: function () {
        let arrayLength = this.stringList.length
        let max = this.iconList.length
        let stringList = this.stringList.map(string => string.trim())
        if (arrayLength < max) {
          let addendumLength = max - arrayLength
          return stringList.concat(
            Array(addendumLength).fill(this.stringList[arrayLength - 1])
          )
        } else {
          return stringList.slice(0, max)
        }
      }
    },
    methods: {
      showsPopup: function (index) {
        return this.computedStrings[index] || this.$slots[index]
      }
    }
  }
</script>
