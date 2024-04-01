import { setWorldConstructor } from "@cucumber/cucumber";
import chai from "chai"

class CustomWorld {
    TESTID: string
    constructor() {
        this.TESTID = "";
  
    }
  }
  setWorldConstructor(CustomWorld);