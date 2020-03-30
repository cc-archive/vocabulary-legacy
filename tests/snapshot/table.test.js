import { setViewport, goTo } from './helpers'

describe('Table', () => {
  it('BasicContent', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-table--basic-content')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('RichContent', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-table--rich-content')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
