import { goTo } from './helpers'

describe('Logos', () => {
  it('CC Logomark', async () => {
    await goTo(page, 'assets-logos--cc-logomark')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Lettermark', async () => {
    await goTo(page, 'assets-logos--cc-lettermark')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Letterheart', async () => {
    await goTo(page, 'assets-logos--cc-letterheart')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Global Network', async () => {
    await goTo(page, 'assets-logos--cc-global-network')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Open Source', async () => {
    await goTo(page, 'assets-logos--cc-open-source')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Vocabulary', async () => {
    await goTo(page, 'assets-logos--cc-vocabulary')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Search', async () => {
    await goTo(page, 'assets-logos--cc-search')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Colorful', async () => {
    await goTo(page, 'assets-logos--cc-certificates-colorful')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Certificates Monochrome', async () => {
    await goTo(page, 'assets-logos--cc-certificates-monochrome')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
