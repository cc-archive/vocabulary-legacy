import { goTo } from './helpers'

describe('Tab', () => {
  it('Tab', async () => {
    await goTo(page, 'layouts-tabs--tab')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
