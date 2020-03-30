import { setViewport, goTo } from './helpers'

describe('License badge', () => {
  it('BY', async () => {
    await setViewport(page)
    await goTo(page, 'assets-license-badge--by')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY SA', async () => {
    await setViewport(page)
    await goTo(page, 'assets-license-badge--by-sa')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY ND', async () => {
    await setViewport(page)
    await goTo(page, 'assets-license-badge--by-nd')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC', async () => {
    await setViewport(page)
    await goTo(page, 'assets-license-badge--by-nc')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC SA', async () => {
    await setViewport(page)
    await goTo(page, 'assets-license-badge--by-nc-sa')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC ND', async () => {
    await setViewport(page)
    await goTo(page, 'assets-license-badge--by-nc-nd')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC ZERO', async () => {
    await setViewport(page)
    await goTo(page, 'assets-license-badge--cc-zero')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PUBLIC DOMAIN', async () => {
    await setViewport(page)
    await goTo(page, 'assets-license-badge--public-domain')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
