import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";

function _drawSnacks() {
    let snacks = ProxyState.snacks
    console.log("drawing snacks", snacks);
    let template = ''
    snacks.forEach(d => template += d.Template)
    document.getElementById('snack-card').innerHTML = template
}
_drawSnacks()//logged successful

export class SnacksController {
    constructor(){
        console.log("Controller Loaded")
    }
    drawOrder(name){
        snackService.drawOrder(name)
        //update or draw
    }

    drawTotal(name) {
        snackService.drawTotal(name)
        //update or draw
    }

    clickToOrder(name) {
        snackService.clickToOrder(name)
        //update or draw
    }

    clearOrders() {
        snackService.clearOrders(name)
        //update or draw
    }

}




