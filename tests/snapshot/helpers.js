export const goTo = async (page, id) => {
  let storybookOrigin = process.env.STORYBOOK_ORIGIN
  if (!storybookOrigin) {
    storybookOrigin = 'http://localhost:8080'
  }
  await page.goto(`${storybookOrigin}/iframe.html?id=${id}`, { waitUntil: 'load' })
}
