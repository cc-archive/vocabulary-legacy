describe('left_aligned_github', () => {
it('visually looks correct', async () => {
  // APIs from jest-puppeteer
  await page.goto('http://localhost:8080/iframe.html?id=assets-github-corner--left-aligned');
  const image = await page.screenshot();

  // API from jest-image-snapshot
  expect(image).toMatchImageSnapshot();
});
});
