/** Setting the custom action here */
import chai from "chai";
import supertest from "supertest";
import { format, parse, differenceInCalendarDays } from "date-fns";
import { error } from "winston";
import masterXPaths from "../POM/features/masterXPaths.page.js";
import reporter from "./reporter.js";

//Veriable details here
let baseUrl = process.env.API_BASE_URL;
const request = supertest(baseUrl);
let response: supertest.Response;

export const EnterTheText = async (
  Selector: Promise<WebdriverIO.Element>,
  Value: string | number
) => {
  // Verify the truthyness of function arrgument
  if (!Selector && !Value) {
    throw new Error(
      `The Xpath selector and Input values are required. It's missing here`
    );
  }
  //wait until to load the field item
  await (await Selector).waitUntil(
    async function () {
      return (await this.isClickable()) === true;
    },
    {
      timeout: 10000,
      timeoutMsg: "Expected Selector element is not clickable within 10s",
    }
  );

  // validation of given input value
  let clickable = await (await Selector).isClickable();
  if (clickable === true) {
    await (await Selector).click();
    await (await Selector).setValue(Value);
  } else {
    throw new Error(`The filed is not visible hence not able to excute`);
  }

  // Varifying the entered value and displayed values to be same or not
  let enteredValue = await (await Selector).getValue();
  chai.expect(enteredValue).to.be.equal(Value);
};

export const SelectTheDropdown = async (
  FromSelector: Promise<WebdriverIO.Element>,
  ToSelector: Promise<WebdriverIO.Element>
) => {
  // Verify the truthyness of function arrgument
  if (!FromSelector && !ToSelector) {
    throw new Error(`The Xpath selectors are required. It's missing here`);
  }

  //waituntil to load the dropdown item
  await (
    await FromSelector
  ).waitUntil(
    async function () {
      return (await this.isClickable()) === true;
    },
    {
      timeout: 10000,
      timeoutMsg: "Expected Selector element is not clickable within 10s",
    }
  );

  // validation of given selector element is clickable than click
  let clickable = await (await FromSelector).isClickable();
  if (clickable === true) {
    await (await FromSelector).click();
  } else {
    throw new Error(
      `The filed is not visible hence not able to click on the field`
    );
  }

  //waituntil to load the dropdown item
  await (
    await ToSelector
  ).waitUntil(
    async function () {
      return (await this.isClickable()) === true;
    },
    {
      timeout: 8000,
      timeoutMsg: "Expected Selector element is not clickable within 7s",
    }
  );
  // validation of given selector element is clickable than click
  let clickableDropdown = await (await ToSelector).isClickable();
  if (clickableDropdown === true) {
    await (await ToSelector).click();
  } else {
    throw new Error(
      `The dropdown item is not visible hence not able to click on the dropdown item`
    );
  }
};

export const ClickThreeDropdown = async (
  FromSelector: Promise<WebdriverIO.Element>,
  SecndSelector: Promise<WebdriverIO.Element>,
  ToSelector: Promise<WebdriverIO.Element>
) => {
  // Verify the truthyness of function arrgument
  if (!FromSelector && !ToSelector && !SecndSelector) {
    throw new Error(`The Xpath selectors are required. It's missing here`);
  }
  //waituntil to load the dropdown item
  await (
    await FromSelector
  ).waitUntil(
    async function () {
      return (await this.isClickable()) === true;
    },
    {
      timeout: 10000,
      timeoutMsg: "Expected Selector is not clickable within 10s",
    }
  );

  // validation of given input value
  // console.log(`>>>>>>> Verifying the field is clickable or not`)
  let clickable = await (await FromSelector).isClickable();
  if (clickable === true) {
    await (await FromSelector).click();
  } else {
    throw new Error(
      `The filed is not visible hence not able to click on the field`
    );
  }
  //waituntil to load the dropdown item
  await (
    await SecndSelector
  ).waitUntil(
    async function () {
      return (await this.isClickable()) === true;
    },
    {
      timeout: 10000,
      timeoutMsg: "Expected Second Selector is not clickable within 10s",
    }
  );

  // console.log(`>>>>>>> Verifying the field is clickable or not`)
  let clickableDropdown = await (await SecndSelector).isClickable();
  if (clickableDropdown === true) {
    await (await SecndSelector).click();
  } else {
    throw new Error(
      `The dropdown item is not visible hence not able to click on the dropdown item`
    );
  }

  //waituntil to load the dropdown item
  await (
    await ToSelector
  ).waitUntil(
    async function () {
      return (await this.isClickable()) === true;
    },
    {
      timeout: 10000,
      timeoutMsg: "Expected Second Selector is not clickable within 10s",
    }
  );

  // console.log(`>>>>>>> Verifying the field is clickable or not`)
  let clickableDropdownThree = await (await ToSelector).isClickable();
  if (clickableDropdownThree === true) {
    await (await ToSelector).click();
  } else {
    throw new Error(
      `The dropdown item is not visible hence not able to click on the dropdown item`
    );
  }
  await browser.takeScreenshot();
};

export function generateRandomAlphabets(length: number): string {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let randomText = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    randomText += alphabets.charAt(randomIndex);
  }
  return randomText;
}

export function generateRandomNumber(length: number): string {
  const number = "0123456789";
  let randomNumber = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * number.length);
    randomNumber += number.charAt(randomIndex);
  }
  return randomNumber;
}


