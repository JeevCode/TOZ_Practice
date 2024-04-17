import { ChainablePromiseElement } from "webdriverio";
import Page from "./Log_In/pageObject/page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class masterXPaths extends Page {
  
  public async EmpTap_LableWithInput(Lable:string, ActionType:string) {
    return $(`//div[contains(@id,'hdr_container_New_Emp_Tab')]//div[contains(@class,'grid-stack-item')][.//*[contains(.,'${Lable}')]]//${ActionType}`)
  }


}

export default new masterXPaths();
