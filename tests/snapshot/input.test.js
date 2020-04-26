import { goTo } from './helpers'

describe('Input', () => {
  it('Normal', async () => {
    await goTo(page, 'form-input--normal')
    const image = await page.$('input')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('Medium', async () => {
    await goTo(page, 'form-input--medium')
    const image = await page.$('input')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('Large', async () => {
    await goTo(page, 'form-input--large')
    const image = await page.$('input')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
