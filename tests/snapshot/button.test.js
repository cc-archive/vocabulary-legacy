import { goTo } from './helpers'

describe('Buttons', () => {
  it('MediumButton', async () => {
    await goTo(page, 'elements-buttons--medium-button')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Bigbutton', async () => {
    await goTo(page, 'elements-buttons--big-button')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('SmallButton', async () => {
    await goTo(page, 'elements-buttons--small-button')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('TinyButton', async () => {
    await goTo(page, 'elements-buttons--tiny-button')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonPrimary', async () => {
    await goTo(page, 'elements-buttons--button-primary')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonDonate', async () => {
    await goTo(page, 'elements-buttons--button-donate')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonSuccess', async () => {
    await goTo(page, 'elements-buttons--button-success')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonInfo', async () => {
    await goTo(page, 'elements-buttons--button-info')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonWarning', async () => {
    await goTo(page, 'elements-buttons--button-warning')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ButtonError', async () => {
    await goTo(page, 'elements-buttons--button-error')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Tag', async () => {
    await goTo(page, 'elements-buttons--tag')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
