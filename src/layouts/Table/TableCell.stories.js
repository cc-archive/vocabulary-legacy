import Table from '@/layouts/Table/Table'
import TableCell from '@/layouts/Table/TableCell'

import Indicating from '@/knobs/indicating'

export default { title: 'Layouts|TableCell' }

const content = `
  <template #head>
    <tr>
      <TableCell is-heading>Item</TableCell>
      <TableCell is-heading>Taste</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading label="Item:">Mango</TableCell>
    <TableCell label="Taste:" indication="positive">Sweetest</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Grapes</TableCell>
    <TableCell label="Taste:" indication="positive">Sweet</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Apple</TableCell>
    <TableCell label="Taste:" indication="probably">Meh</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Orange</TableCell>
    <TableCell label="Taste:" indication="negative">Sour</TableCell>
  </tr>
  <tr>
    <TableCell is-heading label="Item:">Lemon</TableCell>
    <TableCell label="Taste:" indication="negative">Sourest</TableCell>
  </tr>
`

export const indicating = () => ({
  mixins: [Indicating],
  components: { Table, TableCell },
  template: `
    <Table is-fixed>${content}</Table>
  `
})
