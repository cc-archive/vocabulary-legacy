import { setViewport, goTo } from './helpers'

describe('Select', () => {
  it('Default', async () => {
    await setViewport(page)
    await goTo(page, 'form-select--default-story')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
