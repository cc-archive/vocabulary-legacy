import { sizes } from '@/utils/values'

export const sized = {
  props: {
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return sizes.includes(value)
      }
    }
  },
  computed: {
    sizeClasses () {
      const classes = {}
      if (this.size) {
        classes[this.size] = true
      }
      return classes
    }
  }
}
