// for Age Verification //
function proceed() {
    // Proceed with viewing the website
    document.querySelector('.overlayAge').style.display = 'none';
  }
  
  function redirect() {
    // Redirect to a different page for underage users
    window.location = 'https://jackjewan.samsonproperties.net/';
  }

  //DOM VARIABLES
const productForm= document.getElementById("productForm")
const productRows= document.getElementById("productRows")

  const productController = new productController()


  const displayProduct = function(){
let ProductArr = productController.getLocalStorage()
productRows.innerHTML = ''
ProductArr.forEach(product => {
  let row = document.createElement("tr")
  row.setAttribute("data-id", product.id)
  row.innerHTML =`
  <td><img src="${product.url}"></td>
         <td>${product.title}</td>
        <td>${product.category}</td>
        <td>${product.desc}</td>
        <td>${product.qty}</td>
        <td>${product.price}</td>
        `
        productRows.append(row)
})
        console.log(productArr)

  }


  //EVENT LISTENERS
productForm.addEventListener("submit", function(event){
  event.preventDefault()
  const productUrl = document.getElementById("productUrl").value 
  const productTitle = document.getElementById("productTitle").value 
  const productDesc = document.getElementById("productDesc").value 
  const productQty = document.getElementById("productQty").value 
  const productPrice = document.getElementById("productPrice").value 
  const productCategory = document.getElementById("productCategory").value 

  productController.addProduct(productUrl, productTitle,productCategoty, productDesc, productQty, productPrice)
  productController.setLocalStorage()

  displayProduct()

  productForm.reset()

})

displayProduct()