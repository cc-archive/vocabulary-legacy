export const setViewport = async (page) => {
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 })
}

export const goTo = async (page, id) => {
  await page.goto(`http://localhost:8080/iframe.html?id=${id}`)
}
