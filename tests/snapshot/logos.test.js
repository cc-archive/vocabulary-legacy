import { setViewport, goTo, pause } from './helpers'

describe('Logos', () => {
  it('CC Logomark', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-logomark')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Lettermark', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-lettermark')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Letterheart', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-letterheart')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Global Network', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-global-network')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Open Source', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-open-source')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Vocabulary', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-vocabulary')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Search', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-search')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Colorful', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-certificates-colorful')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Monochrome', async () => {
    await setViewport(page)
    await goTo(page, 'assets-logos--cc-certificates-monochrome')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
