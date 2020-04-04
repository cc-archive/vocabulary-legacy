import { goTo } from './helpers'

describe('Input', () => {
  it('Normal', async () => {
    await goTo(page, 'form-input--normal')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Big', async () => {
    await goTo(page, 'form-input--big')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Huge', async () => {
    await goTo(page, 'form-input--huge')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
