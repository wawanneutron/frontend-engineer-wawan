import { test, expect } from '@playwright/test'

test('home to users list to detail flow', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(
    page.getByRole('heading', { name: /Frontend Engineer Test/i })
  ).toBeVisible()

  await page.getByRole('link', { name: /Enter Users Management/i }).click()

  await expect(
    page.getByRole('heading', { name: /Users Management/i })
  ).toBeVisible()

  await page.getByText('Chelsey Dietrich').first().click()

  await expect(page).toHaveURL(/.*\/users\/5/)

  await expect(page.getByText('Contact Information')).toBeVisible()

  await expect(page.getByText('Address')).toBeVisible()

  await expect(page.getByText('Company')).toBeVisible()

  await expect(page.getByText('Recent Posts')).toBeVisible()

  await expect(page.getByText('Recent Todo')).toBeVisible()
})
