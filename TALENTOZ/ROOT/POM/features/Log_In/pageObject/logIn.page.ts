import { ChainablePromiseElement } from "webdriverio";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogInPage extends Page {
  /********************************************************************************************************************************
   * define selectors using getter or function methods
   */
  
  public async LogIn_Input(placeholderText:string) {
    return $(`//input[@placeholder="${placeholderText}"]`)
  };

  public get Enter_Btn() {
    return $(`#enterbtn`)
  };

  
  public open() {
    return super.open("");
  }
}

export default new LogInPage();
