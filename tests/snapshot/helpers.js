export const goTo = async (page, id) => {
  let storybookOrigin = process.env.STORYBOOK_ORIGIN
  if (!storybookOrigin) {
    storybookOrigin = 'http://localhost:8080'
  }
  await page.goto(`${storybookOrigin}/iframe.html?id=${id}`)
}

export const pause = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms))

export const customSnapshotIdentifier = (config) => {
  const counter = config.counter
  const defaultIdentifier = config.defaultIdentifier
  return `${defaultIdentifier}-${counter}`
}
