import { goTo } from './helpers'

describe('GitHub Corner', () => {
  it('Normal', async () => {
    await goTo(page, 'assets-github-corner--normal')
    const image = await page.$('a')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('Inverted', async () => {
    await goTo(page, 'assets-github-corner--inverted')
    const image = await page.$('a')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('Left aligned', async () => {
    await goTo(page, 'assets-github-corner--left-aligned')
    const image = await page.$('a')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
