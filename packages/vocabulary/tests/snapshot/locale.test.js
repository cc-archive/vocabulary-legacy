import { goTo, customSnapshotIdentifier } from './helpers'

describe('Locale', () => {
  it('Default', async () => {
    await goTo(page, 'patterns-locale--default-story')
    const component = await page.$('div.locale')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
