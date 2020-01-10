import Table from '@/layouts/Table/Table'
import TableCell from '@/layouts/Table/TableCell'

import Indicating from '@/knobs/indicating'

export default { title: 'Layouts|TableCell' }

const content = `
  <template #head>
    <tr>
      <TableCell is-heading>Prop</TableCell>
      <TableCell is-heading>Effect</TableCell>
    </tr>
  </template>
  <tr>
    <TableCell is-heading label="Prop:">Indication</TableCell>
    <TableCell label="Effect:" :indication="indication">{{ indication }}</TableCell>
</tr>
`

export const indicating = () => ({
  mixins: [Indicating],
  components: { Table, TableCell },
  template: `
    <Table is-fixed>${content}</Table>
  `
})
