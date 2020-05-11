import { goTo, customSnapshotIdentifier } from './helpers'

describe('Table', () => {
  it('Basic Content', async () => {
    await goTo(page, 'layouts-table--basic-content')
    const component = await page.$('table.table')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('Rich Content', async () => {
    await goTo(page, 'layouts-table--rich-content')
    const component = await page.$('table.table')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
