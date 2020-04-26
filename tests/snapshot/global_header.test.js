import { goTo } from './helpers'

describe('GlobalHeader', () => {
  it('Inactive', async () => {
    await goTo(page, 'patterns-global-header--inactive')
    const image = await page.$('header')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('Active', async () => {
    await goTo(page, 'patterns-global-header--active')
    const image = await page.$('header')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
