import { ChainablePromiseElement } from "webdriverio";
import Page from "./Log_In/pageObject/page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class masterXPaths extends Page {
   getmailid()
   {
    return $("//input[@id='email']");
   }  
   
}

export default new masterXPaths();
