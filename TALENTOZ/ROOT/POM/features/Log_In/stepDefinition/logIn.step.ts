import { Given, When, Then } from "@wdio/cucumber-framework";
import logInPage from "../pageObject/logIn.page.js";

Given(/^the user is opned the browser and navigated to url$/, async function () {
    await logInPage.open();

    //Enter the user Email address
    await (await logInPage.LogIn_Input("E mail")).setValue(process.env.QA_ADMIN_USERNAME);
    await (await logInPage.LogIn_Input("Password")).setValue(process.env.QA_PASSWORD);
    await logInPage.Enter_Btn.click();
    await browser.pause(3000);

});