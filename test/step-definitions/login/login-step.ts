import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../../page-objects/login/login-page'

Given('I am on the onboarding page', async () => {
})

When('I click masuk sekarang', async () => {
    loginPage.masukSekarang.isDisplayed()
    loginPage.masukSekarang.click()
})

When('I input username {string}', async (s: string) => {
    await loginPage.username.isDisplayed()
    await loginPage.username.click()
    await loginPage.username.setValue(s)
})

When('I input password {string}', async (s: string) => {
    await loginPage.password.click()
    await loginPage.password.setValue(s)
})

When('I click login', async () => {
    loginPage.login.click()
})

When('I input phone number {string}', async (s: string) => {
    await loginPage.phoneNumber.click()
    await loginPage.phoneNumber.setValue(s)
})

When('I click lanjut', async () => {
    loginPage.lanjut.click()
})

Then('I am on the dashboard', async() => {
    await browser.pause(5000)
})