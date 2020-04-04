import { goTo } from './helpers'

describe('Locale', () => {
  it('Default', async () => {
    await goTo(page, 'patterns-locale--default-story')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
