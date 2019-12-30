import Container from '@/layouts/Container/Container'

export default { title: 'Layouts|Container' }

export const concept = () => ({
  components: { Container },
  template: `
    <Container
      style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; background-color: white;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Container>
  `
})
concept.story = {
  decorators: [
    () => ({
      template: `
        <div
          style="width:100%; background-image: linear-gradient(45deg, #ddd 25%, #fff 25%, #fff 50%, #ddd 50%, #ddd 75%, #fff 75%, #fff 100%); background-size: 8px 8px;">
          <story/>
        </div>
      `
    })
  ]
}
