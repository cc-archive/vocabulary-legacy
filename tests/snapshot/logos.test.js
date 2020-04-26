import { goTo, pause } from './helpers'

describe('Logos', () => {
  it('CC Logomark', async () => {
    await goTo(page, 'assets-logos--cc-logomark')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('CC Lettermark', async () => {
    await goTo(page, 'assets-logos--cc-lettermark')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('CC Letterheart', async () => {
    await goTo(page, 'assets-logos--cc-letterheart')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('CC Global Network', async () => {
    await goTo(page, 'assets-logos--cc-global-network')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('CC Open Source', async () => {
    await goTo(page, 'assets-logos--cc-open-source')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('CC Vocabulary', async () => {
    await goTo(page, 'assets-logos--cc-vocabulary')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('CC Search', async () => {
    await goTo(page, 'assets-logos--cc-search')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('CC Certificates Colorful', async () => {
    await goTo(page, 'assets-logos--cc-certificates-colorful')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('CC Certificates Monochrome', async () => {
    await goTo(page, 'assets-logos--cc-certificates-monochrome')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
