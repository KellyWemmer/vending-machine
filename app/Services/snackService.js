import { ProxyState } from "../AppState.js";

class SnackService{
    orders = []

    drawOrder(name) {
        

    }

    drawTotal(name) {
        let subtotal = 0
        orders.forEach(order => subtotal += order.price)
        console.log('subtotal', subtotal)
    }

    clickToOrder(name) {//make sure snacksController passes same parameters!
        console.log("Is this running?") //logged successful
        let snack = ProxyState.snacks.find(s => s.name == name) //snack drawn from AppState snacks []
        console.log(snack); //logged successful
        orders.push(snack) 
        console.log(orders)
        // drawOrders()
        // drawTotal()
    }

    clearOrders() {
       
    }

}
export const snackService = new SnackService()