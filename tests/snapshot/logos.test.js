import { setViewport, goTo } from './helpers'

describe('Logos', () => {
  it('CC Logomark', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-logomark')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Logomark Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-logomark-inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Lettermark', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-lettermark')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Lettermark Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-lettermark-inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Letterheart', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-letterheart')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Letterheart Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-letterheart-inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Global Network', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-global-network')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Global Network Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-global-network-inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Open Source', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-open-source')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Open Source Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-open-source-inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Vocabulary', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-vocabulary')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Vocabulary Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-vocabulary-inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Search', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-search')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Search Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-search-inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Colorful', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-certificates-colorful')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Monochrome', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-certificates-monochrome')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Monochrome Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-certificates-monochrome-inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
