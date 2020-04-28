import { goTo, pause } from './helpers'

describe('License badge', () => {
  it('BY', async () => {
    await goTo(page, 'assets-license-badge--by')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY SA', async () => {
    await goTo(page, 'assets-license-badge--by-sa')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY ND', async () => {
    await goTo(page, 'assets-license-badge--by-nd')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC', async () => {
    await goTo(page, 'assets-license-badge--by-nc')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC SA', async () => {
    await goTo(page, 'assets-license-badge--by-nc-sa')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC ND', async () => {
    await goTo(page, 'assets-license-badge--by-nc-nd')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Zero', async () => {
    await goTo(page, 'assets-license-badge--cc-zero')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Public domain', async () => {
    await goTo(page, 'assets-license-badge--public-domain')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
