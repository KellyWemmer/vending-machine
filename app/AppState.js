import { Snack } from "./Models/snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  //Leave the above code, put new array below.
/** @type {import('./Models/snacks.js').Snack[]} */ //singular Snack from snacks.js
snacks = [
  new Snack('Twix', 2.50),
  new Snack('Reeses', 2.00)
]
  
/** @type {import('./Models/snacks.js').Snack[]} */
orders =[] //new array to put clicked items into to checkout

}










//Keep the below code
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
