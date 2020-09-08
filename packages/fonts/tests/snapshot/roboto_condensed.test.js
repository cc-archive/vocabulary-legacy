import { goTo, pause } from './helpers'

describe('Roboto Condensed', () => {
  it('Uppercase letters', async () => {
    await goTo(page, 'roboto-condensed--uppercase-letters')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Lowercase letters', async () => {
    await goTo(page, 'roboto-condensed--lowercase-letters')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Numbers', async () => {
    await goTo(page, 'roboto-condensed--numbers')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
