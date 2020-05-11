import { goTo, customSnapshotIdentifier } from './helpers'

describe('Input', () => {
  it('Normal', async () => {
    await goTo(page, 'form-input--normal')
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('Medium', async () => {
    await goTo(page, 'form-input--medium')
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('Large', async () => {
    await goTo(page, 'form-input--large')
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
