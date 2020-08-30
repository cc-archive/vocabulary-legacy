import { goTo, pause } from './helpers'

describe('Accidenz Commons', () => {
  it('Uppercase letters', async () => {
    await goTo(page, 'accidenz-commons--uppercase-letters')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Lowercase letters', async () => {
    await goTo(page, 'accidenz-commons--lowercase-letters')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Numbers', async () => {
    await goTo(page, 'accidenz-commons--numbers')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
