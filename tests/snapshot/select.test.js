import { goTo } from './helpers'

describe('Select', () => {
  it('Default', async () => {
    await goTo(page, 'form-select--default-story')
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
