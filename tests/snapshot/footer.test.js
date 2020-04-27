import { goTo, pause } from './helpers'

describe('Footer', () => {
  it('Default', async () => {
    await goTo(page, 'patterns-footer--default-story')
    await pause(1000)
    const el = await page.$('footer')
    const image = await el.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
