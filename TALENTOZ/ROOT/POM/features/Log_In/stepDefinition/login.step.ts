//import { Given } from "@wdio/cucumber-framework";

import { Given, Then } from "@wdio/cucumber-framework";
import loginPage from "../pageObject/LogIn.page.js";


Given(/^the user has opened the browser and naivgate to the page$/,async function (){
    //await LogInPage.open();
      await loginPage.open();
      await browser.maximizeWindow();
    
    const mailid=await $("//input[@id='email']");
    await mailid.setValue("mariyam@deel.com");
    const enterImg = await $("#enterimg");
    await enterImg.click();
    await browser.pause(7000);
});