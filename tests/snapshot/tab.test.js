import { goTo, customSnapshotIdentifier } from './helpers'

describe('Tab', () => {
  it('Tab', async () => {
    await goTo(page, 'layouts-tabs--tab')
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
