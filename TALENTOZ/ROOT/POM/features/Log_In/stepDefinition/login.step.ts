//import { Given } from "@wdio/cucumber-framework";

import { Given, Then,When } from "@wdio/cucumber-framework";
import loginPage from "../pageObject/LogIn.page.js";


Given(/^the user has opened the browser and naivgate to the page$/, async function () {

  await loginPage.open();
  await browser.maximizeWindow();
});

When(/^i enter the mailID in the feild$/,async function () {
  const entermailid = await $("//input[@id='email']"); 
  await entermailid.setValue("mariyam@deel.com");
});

Then(/^i can see the signup page$/, async function () {
  const Login = await $("#enterimg");
  await Login.click();
  await browser.pause(7000);
});
