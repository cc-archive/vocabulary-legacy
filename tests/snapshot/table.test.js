import { goTo } from './helpers'

describe('Table', () => {
  it('BasicContent', async () => {
    await goTo(page, 'layouts-table--basic-content')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('RichContent', async () => {
    await goTo(page, 'layouts-table--rich-content')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
