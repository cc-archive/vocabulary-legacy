import { goTo, pause, customSnapshotIdentifier } from './helpers'

describe('Logos', () => {
  it('CC Logomark', async () => {
    await goTo(page, 'assets-logos--cc-logomark')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Lettermark', async () => {
    await goTo(page, 'assets-logos--cc-lettermark')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Letterheart', async () => {
    await goTo(page, 'assets-logos--cc-letterheart')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Global Network', async () => {
    await goTo(page, 'assets-logos--cc-global-network')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Legal Database', async () => {
    await goTo(page, 'assets-logos--cc-legal-database')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Open Source', async () => {
    await goTo(page, 'assets-logos--cc-open-source')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Vocabulary', async () => {
    await goTo(page, 'assets-logos--cc-vocabulary')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Search', async () => {
    await goTo(page, 'assets-logos--cc-search')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Certificates Colorful', async () => {
    await goTo(page, 'assets-logos--cc-certificates-colorful')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Certificates Monochrome', async () => {
    await goTo(page, 'assets-logos--cc-certificates-monochrome')
    await pause(1000)
    const component = await page.$('svg')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
