import { setViewport, goTo } from './helpers'

describe('Cards', () => {
  it('PostVertical', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-vertical')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostHorizontal', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-horizontal')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostVideoVertical', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-video-vertical')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostVideoHorizontal', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-video-horizontal')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostVideoLarge', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-video-large')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostEventWide', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-event-wide')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostEventNarrow', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-event-narrow')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostStatistic', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-statistic')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('PostQuote', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--post-quote')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('ImageTop', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--image-top')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Link', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--link')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('LinkBorder', async () => {
    await setViewport(page)
    await goTo(page, 'layouts-cards--link-border')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
