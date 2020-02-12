import Footer from '@/patterns/Footer/Footer'

import BrandImagery from '@/patterns/BrandImagery/BrandImagery'
import Locale from '@/patterns/Locale/Locale'

export default { title: 'Patterns|Footer' }

export const standard = () => ({
  components: { Footer },
  template: `
    <Footer/>
  `
})

export const customised = () => ({
  components: {
    Footer,

    BrandImagery,
    Locale
  },
  data: function () {
    let alternativeLinks = [
      {
        text: 'GitHub',
        href: 'https://github.com/creativecommons/vue-vocabulary'
      },
      {
        text: 'UMD Demo',
        href: 'https://codepen.io/dhruvkb/pen/dxRJYV'
      },
      {
        text: 'CSS Demo',
        href: 'https://codepen.io/dhruvkb/pen/bXmmZE'
      }
    ]
    let alternativeContacts = [
      {
        text: 'Report bug',
        href: 'https://github.com/creativecommons/vue-vocabulary/issues/new?labels=improvement%3A+bug&template=bug_report.md&title='
      },
      {
        text: 'Request feature',
        href: 'https://github.com/creativecommons/vue-vocabulary/issues/new?labels=improvement%3A+feature&template=feature_request.md&title='
      }
    ]

    return {
      alternativeContacts,
      alternativeLinks
    }
  },
  template: `
    <Footer>
      <template #logo>
        <BrandImagery brand="vocabulary" color="white"/>
      </template>

      <template #links>
        <ul>
          <li
            v-for="(link, index) in alternativeLinks"
            :key="index">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </template>

      <template #communication>
        <Quote
          attribution="Rumi"
          is-inverted>
          When you are everywhere, you are nowhere.<br/>
          When you are somewhere, you are everywhere.
        </Quote>
        <p>
          That is to say, all work is done on GitHub.
        </p>
      </template>

      <template #contacts>
        <ul>
          <li
            v-for="(contact, index) in alternativeContacts"
            :key="index">
            <a :href="contact.href">{{ contact.text }}</a>
          </li>
        </ul>
      </template>

      <h4>You really mean anything?</h4>
      <p>
        Yes, <em>literally</em> anything.
      </p>
      <p>
        <Locale/>
      </p>
    </Footer>
  `
})
