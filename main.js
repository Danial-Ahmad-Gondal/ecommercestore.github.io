const open = document.getElementById('open');
const close = document.getElementById('close');
const list = document.getElementById('list');

open.addEventListener("click", () => {
    close.style.display = "block";
    list.style.display = "block";
    open.style.display = "none";
});

close.addEventListener("click", () => {
    open.style.display = "block";
    list.style.display = "none";
    close.style.display = "none";
});

const large = document.getElementById('large');
const small = document.getElementById('small-1');
const small_1 = document.getElementById('small-2');
const small_2 = document.getElementById('small-3');
const small_3 = document.getElementById('small-4');
small.addEventListener("click" , () =>{
    large.style.backgroundImage = "url(images/bag-1.png)";
});
small_1.addEventListener("click" , () =>{
  large.style.backgroundImage = "url(images/cloth-1.jpg)";
});
small_2.addEventListener("click" , () =>{
   large.style.backgroundImage = "url(images/jacket-sale.jpg)";
});
small_3.addEventListener("click" , () =>{
   large.style.backgroundImage = "url(Images/bag-own-removebg-preview.png)";
});
//Function to display orders of the user//
//Main function of adding the relative information in the cart page//
/*const product_name = document.getElementById('product_name');
const price = document.getElementById('total');
const amount = document.getElementById('get-quantity');
const shop = document.getElementById('cart');
const big = document.getElementById('large');

shop.addEventListener("click", () => {
    const backgroundImage = window.getComputedStyle(large).backgroundImage;
    // Create an object to store product information
    const productInfo = {
        productName: product_name.innerText,
        quantity: amount.value,
        total: parseInt(price.innerText) * parseInt(amount.value),        
        image:backgroundImage,
        // Add other details as needed
    };

    // Store the product information in localStorage
    localStorage.setItem('productInfo', JSON.stringify(productInfo));
    console.log("Product information stored:", localStorage.getItem('productInfo'));
});*/
