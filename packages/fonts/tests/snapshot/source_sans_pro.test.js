import { goTo, pause } from './helpers'

describe('Source Sans Pro', () => {
  it('Uppercase letters', async () => {
    await goTo(page, 'source-sans-pro--uppercase-letters')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Lowercase letters', async () => {
    await goTo(page, 'source-sans-pro--lowercase-letters')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Numbers', async () => {
    await goTo(page, 'source-sans-pro--numbers')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
