import { goTo, pause } from './helpers'

describe('Cards', () => {
  it('PostVertical', async () => {
    await goTo(page, 'layouts-cards--post-vertical')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostHorizontal', async () => {
    await goTo(page, 'layouts-cards--post-horizontal')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostVideoVertical', async () => {
    await goTo(page, 'layouts-cards--post-video-vertical')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostVideoHorizontal', async () => {
    await goTo(page, 'layouts-cards--post-video-horizontal')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostVideoLarge', async () => {
    await goTo(page, 'layouts-cards--post-video-large')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostEventWide', async () => {
    await goTo(page, 'layouts-cards--post-event-wide')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostEventNarrow', async () => {
    await goTo(page, 'layouts-cards--post-event-narrow')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostStatistic', async () => {
    await goTo(page, 'layouts-cards--post-statistic')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostQuote', async () => {
    await goTo(page, 'layouts-cards--post-quote')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ImageTop', async () => {
    await goTo(page, 'layouts-cards--image-top')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Link', async () => {
    await goTo(page, 'layouts-cards--link')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('LinkBorder', async () => {
    await goTo(page, 'layouts-cards--link-border')
    await pause(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
