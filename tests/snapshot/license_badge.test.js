import { goTo, pause, customSnapshotIdentifier } from './helpers'

describe('License badge', () => {
  it('BY', async () => {
    await goTo(page, 'assets-license-badge--by')
    await pause(1000)
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('BY SA', async () => {
    await goTo(page, 'assets-license-badge--by-sa')
    await pause(1000)
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('BY ND', async () => {
    await goTo(page, 'assets-license-badge--by-nd')
    await pause(1000)
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('BY NC', async () => {
    await goTo(page, 'assets-license-badge--by-nc')
    await pause(1000)
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('BY NC SA', async () => {
    await goTo(page, 'assets-license-badge--by-nc-sa')
    await pause(1000)
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('BY NC ND', async () => {
    await goTo(page, 'assets-license-badge--by-nc-nd')
    await pause(1000)
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('CC Zero', async () => {
    await goTo(page, 'assets-license-badge--cc-zero')
    await pause(1000)
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('Public Domain', async () => {
    await goTo(page, 'assets-license-badge--public-domain')
    await pause(1000)
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
