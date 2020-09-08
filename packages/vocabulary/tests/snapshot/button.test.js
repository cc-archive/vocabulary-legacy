import { goTo, customSnapshotIdentifier } from './helpers'

describe('Buttons', () => {
  it('MediumButton', async () => {
    await goTo(page, 'elements-buttons--medium-button')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('BigButton', async () => {
    await goTo(page, 'elements-buttons--big-button')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('SmallButton', async () => {
    await goTo(page, 'elements-buttons--small-button')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('TinyButton', async () => {
    await goTo(page, 'elements-buttons--tiny-button')
    const component = await page.$('button.button')
    const ss = await component.screenshot()
    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('ButtonPrimary', async () => {
    await goTo(page, 'elements-buttons--button-primary')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('ButtonDonate', async () => {
    await goTo(page, 'elements-buttons--button-donate')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('ButtonSuccess', async () => {
    await goTo(page, 'elements-buttons--button-success')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('ButtonInfo', async () => {
    await goTo(page, 'elements-buttons--button-info')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('ButtonWarning', async () => {
    await goTo(page, 'elements-buttons--button-warning')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('ButtonError', async () => {
    await goTo(page, 'elements-buttons--button-error')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('Tag', async () => {
    await goTo(page, 'elements-buttons--tag')
    const component = await page.$('button.button')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
