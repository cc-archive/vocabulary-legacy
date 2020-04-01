export const setViewport = async (page) => {
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 })
}

export const goTo = async (page, id) => {
  let storybookOrigin = process.env.STORYBOOK_ORIGIN
  if (storybookOrigin === undefined) {
    storybookOrigin = 'http://localhost:8080'
  }
  await page.goto(`${storybookOrigin}/iframe.html?id=${id}`)
}

export const pause = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms))
