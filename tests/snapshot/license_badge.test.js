import { setViewport, goTo } from './helpers'

describe('License badge', () => {
  it('BY', async () => {
    await setViewport(page)
    await goTo(page, 'assets-License-Badge-BY')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY SA', async () => {
    await setViewport(page)
    await goTo(page, 'assets-License-Badge-BY-SA')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY ND', async () => {
    await setViewport(page)
    await goTo(page, 'assets-License-Badge-BY-ND')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC', async () => {
    await setViewport(page)
    await goTo(page, 'assets-License-Badge-BY-NC')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC SA', async () => {
    await setViewport(page)
    await goTo(page, 'assets-License-Badge-BY-NC-SA')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('BY NC ND', async () => {
    await setViewport(page)
    await goTo(page, 'assets-License-Badge-BY-NC-ND')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('CC Zero', async () => {
    await setViewport(page)
    await goTo(page, 'assets-License-Badge-CC-Zero')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Public Domain', async () => {
    await setViewport(page)
    await goTo(page, 'assets-License-Badge-Public-Domain')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
