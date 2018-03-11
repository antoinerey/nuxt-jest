import puppeteer from 'puppeteer'
import Home from './index.vue'

describe('Home Page', () => {
  let browser, page, html

  const getStyle = async (selector, property) => {
    return await page.evaluate(
      ({ selector, property }) => {
        return getComputedStyle(document.querySelector(selector))[property]
      },
      { selector, property },
    )
  }

  beforeEach(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    await page.goto('http://localhost:3000')
  })

  test('renders correctly on mobile', async () => {
    await page.setViewport({ width: 400, height: 200 })

    const mobile = await getStyle('.mobile', 'display')
    expect(mobile).toBe('block')

    const desktop = await getStyle('.desktop', 'display')
    expect(desktop).toBe('none')
  })

  test('renders correctly on desktop', async () => {
    await page.setViewport({ width: 800, height: 200 })

    const mobile = await getStyle('.mobile', 'display')
    expect(mobile).toBe('none')

    const desktop = await getStyle('.desktop', 'display')
    expect(desktop).toBe('block')
  })

  test('updates count when clicked', async () => {
    html = await page.content()
    expect(html).toContain('Welcome back, 0 times !')

    await page.click('.container')
    html = await page.content()
    expect(html).toContain('Welcome back, 1 times !')

    await page.click('.container')
    html = await page.content()
    expect(html).toContain('Welcome back, 2 times !')
  })

  afterEach(async () => {
    await browser.close()
  })
})
