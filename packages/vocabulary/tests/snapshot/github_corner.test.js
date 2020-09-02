import { goTo, customSnapshotIdentifier } from './helpers'

describe('GitHub corner', () => {
  it('Normal', async () => {
    await goTo(page, 'assets-github-corner--normal')
    const component = await page.$('a.github-corner')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('Inverted', async () => {
    await goTo(page, 'assets-github-corner--inverted')
    const component = await page.$('a.github-corner')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })

  it('Left aligned', async () => {
    await goTo(page, 'assets-github-corner--left-aligned')
    const component = await page.$('a.github-corner')
    const ss = await component.screenshot()

    expect(ss).toMatchImageSnapshot({
      customSnapshotIdentifier
    })
  })
})
