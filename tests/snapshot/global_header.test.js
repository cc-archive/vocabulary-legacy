import { goTo, customSnapshotIdentifier } from './helpers'

describe('Global header', () => {
  it('Inactive', async () => {
    await goTo(page, 'patterns-global-header--inactive')
    const component = await page.$('div#root') // As header.cc-global-header is y-translated out of the page
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('Active', async () => {
    await goTo(page, 'patterns-global-header--active')
    const component = await page.$('header.cc-global-header')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
