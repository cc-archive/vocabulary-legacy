import { goTo, pause } from './helpers'

describe('Header', () => {
  it('Big', async () => {
    await goTo(page, 'patterns-header--big')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Small', async () => {
    await goTo(page, 'patterns-header--small')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
