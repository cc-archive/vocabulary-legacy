import Welcome from '@/stories/Welcome.vue'

export default { title: 'Vocabulary|Welcome' }

export const welcome = () => ({
  components: { Welcome },
  template: '<Welcome/>'
})
