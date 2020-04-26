import { goTo, pause } from './helpers'

describe('Cards', () => {
  it('PostVertical', async () => {
    await goTo(page, 'layouts-cards--post-vertical')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('PostHorizontal', async () => {
    await goTo(page, 'layouts-cards--post-horizontal')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('PostVideoVertical', async () => {
    await goTo(page, 'layouts-cards--post-video-vertical')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('PostVideoHorizontal', async () => {
    await goTo(page, 'layouts-cards--post-video-horizontal')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('PostVideoLarge', async () => {
    await goTo(page, 'layouts-cards--post-video-large')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('PostEventWide', async () => {
    await goTo(page, 'layouts-cards--post-event-wide')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('PostEventNarrow', async () => {
    await goTo(page, 'layouts-cards--post-event-narrow')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('PostStatistic', async () => {
    await goTo(page, 'layouts-cards--post-statistic')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('PostQuote', async () => {
    await goTo(page, 'layouts-cards--post-quote')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('ImageTop', async () => {
    await goTo(page, 'layouts-cards--image-top')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('Link', async () => {
    await goTo(page, 'layouts-cards--link')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })

  it('LinkBorder', async () => {
    await goTo(page, 'layouts-cards--link-border')
    await pause(1000)
    const image = await page.$('div')
    const ss = await image.screenshot()
    expect(ss).toMatchImageSnapshot()
  })
})
