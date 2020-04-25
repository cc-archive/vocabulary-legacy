import { goTo, pause } from './helpers'

describe('Footer', () => {
  it('Default', async () => {
    await goTo(page, 'patterns-footer--default-story')
    await pause(1000)
    const image = await page.$('footer.main-footer')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
