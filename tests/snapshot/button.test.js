import { setViewport, goTo } from './helpers'

describe('Buttons', () => {
  it('MediumButton', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-MediumButton')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BigButton', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-BigButton')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('SmallButton', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-SmallButton')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('TinyButton', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-TinyButton')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonPrimary', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-ButtonPrimary')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonDonate', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-ButtonDonate')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonSuccess', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-ButtonSuccess')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonInfo', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-ButtonInfo')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonWarning', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-ButtonWarning')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonError', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-ButtonError')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Tag', async () => {
    await setViewport(page)
    await goTo(page, 'Elements-Buttons-Tag')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
