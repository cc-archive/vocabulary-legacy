import { goTo } from './helpers'

describe('Table', () => {
  it('BasicContent', async () => {
    await goTo(page, 'layouts-table--basic-content')
    const image = await page.$('table')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('RichContent', async () => {
    await goTo(page, 'layouts-table--rich-content')
    const image = await page.$('table')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
