import { goTo } from './helpers'

describe('Locale', () => {
  it('Default', async () => {
    await goTo(page, 'patterns-locale--default-story')
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
