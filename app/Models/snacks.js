export class Snack {
    constructor(name, price, img) {
        this.name = name,
        this.price = price,
        this.img = img
    }


get Template (){
    return `
    <div class="card" style="width: 18rem;" onclick="app.snacksController.clickToOrder('${this.name}')" id="${this.name}">
        <img class="card-img-top" src="https://thiscatdoesnotexist.com/" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="price">$${this.price}</h6>
        </div>
  </div>
    `
}
}