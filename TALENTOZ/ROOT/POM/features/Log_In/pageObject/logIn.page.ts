import { ChainablePromiseElement } from "webdriverio";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogInPage extends Page {

 public open() {
    return super.open(process.env.WEB_BASE_URL);
  }
}

export default new LogInPage();
