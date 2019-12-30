import Table from '@/layouts/Table/Table'
import TableCell from '@/layouts/Table/TableCell'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Simplified from '@/knobs/simplified'

import Invertible from '@/knobs/invertible'

import { boolean, optionsKnob as options } from '@storybook/addon-knobs'

export default { title: 'Layouts|Table' }

const content = `
  <template #head>
    <tr>
      <TableCell is-heading>Item</TableCell>
      <TableCell is-heading>Taste</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading label="Item:">Mango</TableCell>
    <TableCell label="Taste:">Sweetest</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Grapes</TableCell>
    <TableCell label="Taste:">Sweet</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Apple</TableCell>
    <TableCell label="Taste:">Meh</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Orange</TableCell>
    <TableCell label="Taste:">Sour</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Lemon</TableCell>
    <TableCell label="Taste:">Sourest</TableCell>
  </tr>
  <template #foot>
    <tr>
      <TableCell is-heading label="Item:">Juice</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
    <tr>
      <TableCell is-heading label="Item:">Shake</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
    <tr>
      <TableCell is-heading label="Item:">Jam</TableCell>
      <TableCell label="Taste:">Sweet</TableCell>
    </tr>
  </template>
`

export const bordered = () => ({
  components: { Table, TableCell },
  props: {
    borders: {
      default: options('Borders', {
        Edge: 'edge',
        Row: 'row',
        Column: 'column'
      }, ['edge', 'row', 'column'], {
        display: 'inline-check'
      })
    }
  },
  template: `
    <Table :border-list="borders">${content}</Table>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Table, TableCell },
  template: `
    <Table :brand="brand">${content}</Table>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Table, TableCell },
  template: `
    <Table :color="color" :shade="shade">${content}</Table>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { Table, TableCell },
  template: `
    <Table :simplicity="simplicity">${content}</Table>
  `
})

export const compactable = () => ({
  components: { Table, TableCell },
  props: {
    isCompact: {
      default: () => boolean('Is compact?', true)
    }
  },
  template: `
    <Table :is-compact="isCompact">${content}</Table>
  `
})

export const fixable = () => ({
  components: { Table, TableCell },
  props: {
    isFixed: {
      default: boolean('Is fixed?', true)
    }
  },
  template: `
    <Table :is-fixed="isFixed">${content}</Table>
  `
})

export const followable = () => ({
  components: { Table, TableCell },
  props: {
    isFollowing: {
      default: boolean('Is following?', true)
    }
  },
  template: `
    <Table :is-following="isFollowing">${content}</Table>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Table, TableCell },
  template: `
    <Table :is-inverted="isInverted">${content}</Table>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const stripable = () => ({
  components: { Table, TableCell },
  props: {
    isStriped: {
      default: boolean('Is striped?', true)
    }
  },
  template: `
    <Table :is-striped="isStriped">${content}</Table>
  `
})
