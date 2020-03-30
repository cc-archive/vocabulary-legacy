import { setViewport, goTo } from './helpers'

describe('Logos', () => {
  it('CC Logomark', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Logomark')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Logomark Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Logomark-Inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Lettermark', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Lettermark')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Lettermark Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Lettermark-Inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Letterheart', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Letterheart')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Letterheart Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Letterheart-Inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Global Network', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Global-Network')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Global Network Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Global-Network-Inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Open Source', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Open-Source')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Open Source Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Open-Source-Inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Vocabulary', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Vocabulary')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Vocabulary Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Vocabulary-Inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Search', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Search')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Search Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Search-Inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Colorful', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Certificates-Colorful')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Monochrome', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Certificates-Monochrome')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Monochrome Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-Logos-CC-Certificates-Monochrome-Inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
