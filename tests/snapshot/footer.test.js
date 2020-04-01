import { setViewport, goTo, pause } from './helpers'

describe('Footer', () => {
  it('Default', async () => {
    await setViewport(page)
    await goTo(page, 'patterns-footer--default-story')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
