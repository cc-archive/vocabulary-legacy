import { setViewport, goTo } from './helpers'

describe('GitHub Corner', () => {
  it('Normal', async () => {
    await setViewport(page)
    await goTo(page, 'assets-github-corner--normal')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Inverted', async () => {
    await setViewport(page)
    await goTo(page, 'assets-github-corner--inverted')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Left aligned', async () => {
    await setViewport(page)
    await goTo(page, 'assets-github-corner--left-aligned')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
