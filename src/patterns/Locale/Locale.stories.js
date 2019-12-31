import Definition from '@/patterns/Definition/Definition'
import Locale from '@/patterns/Locale/Locale'

export default { title: 'Patterns|Locale' }

export const standard = () => ({
  components: {
    Definition,
    Locale
  },
  template: `
    <div>
      <Definition
        :pronunciation="$t('pronunciation')">
        <template #word>
          {{ $t('vue').toLocaleLowerCase() }}-{{ $t('vo_cab_u_lar_y') }}
        </template>
      </Definition>
      <Locale/>
    </div>
  `
})
