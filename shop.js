const productCards = document.getElementById("productCards")

const productController = new productController()




const displayproduct = function(){
    let productArr = productController.getLocalStorage()
    productCards.innerHTML = ''
    productArr.forEach(product => {
        let card = document.createElement("div")
        card.classList.add("col-3","m-4")
        card.innerHTML = `
        <div class="card">
        <img src="${product.url}" class="card-img-top" alt="Card image">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.desc}</p>
          <p class="card-text">${product.category}</p>
          <p class="card-text">${product.qty}</p>
          <p class="card-text">${product.price}</p>
         
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>`
        productCards.append(card)
    })

    console.log(productArr)

}

displayproduct()

