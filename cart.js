/*document.addEventListener("DOMContentLoaded", () => {
    console.log("Cart page loaded");

    const storedProductInfo = localStorage.getItem('productInfo');
    console.log("Stored product information:", storedProductInfo);

    if (storedProductInfo) {
        const productInfo = JSON.parse(storedProductInfo);

        console.log("Parsed product information:", productInfo);

        document.getElementById('realproduct_name').innerText = "" + productInfo.productName;
        document.getElementById('quantity').innerText = " " + productInfo.quantity;
        document.getElementById('price-real').innerText = " " + productInfo.total +"$";
        document.getElementById('object-image').style.backgroundImage = productInfo.image;
    } else {
        console.error("No product information found in localStorage");
    }
});*/
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