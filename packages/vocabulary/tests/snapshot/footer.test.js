import { goTo, pause, customSnapshotIdentifier } from './helpers'

describe('Footer', () => {
  it('Default', async () => {
    await goTo(page, 'patterns-footer--default-story')
    await pause(1000)
    const component = await page.$('footer.main-footer')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
