import { goTo } from './helpers'

describe('Footer', () => {
  it('Default', async () => {
    await goTo(page, 'patterns-footer--default-story')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
