import { goTo, pause } from './helpers'

describe('Header', () => {
  it('Big', async () => {
    await goTo(page, 'patterns-header--big')
    pause(1000)
    const image = await page.$('header')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('Small', async () => {
    await goTo(page, 'patterns-header--small')
    pause(1000)
    const image = await page.$('header')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
