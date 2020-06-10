import { goTo, customSnapshotIdentifier } from './helpers'

describe('Select', () => {
  it('Default', async () => {
    await goTo(page, 'form-select--default-story')
    const component = await page.$('div#root')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
