const emptyCart = document.querySelector(".cart-box");
const filledsCart = document.querySelector(".cart-box-filled");

const productcontain = document.querySelector(".productContainer");

const products = [
  {
    id: 1,
    name: "waffle with Berries",
    price: 10.99,
    category: "waffle",
    image: "image-waffle-tablet.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Vanilla Bean Crème Brûlée",
    price: 4.33,
    category: "Creme Brulee",
    image: "image-creme-brulee-tablet.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Macaron Mix of Five",
    price: 5.09,
    category: "Macaron",
    image: "image-macaron-desktop.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Classic Tiramisu",
    price: 5.99,
    category: "Tiramisu",
    image: "image-tiramisu-desktop.jpg",
    quantity: 1,
  },
  {
    id: 5,
    name: "istachio Baklavae",
    price: 6.29,
    category: "Baklava",
    image: "image-baklava-desktop.jpg",
    quantity: 1,
  },
  {
    id: 6,
    name: "Lemon Meringue Pie",
    price: 5.19,
    category: "Pie",
    image: "image-meringue-desktop.jpg",
    quantity: 1,
  },
  {
    id: 7,
    name: "Red Velvet Cake",
    price: 5.19,
    category: "Cake",
    image: "image-cake-mobile.jpg",
    quantity: 1,
  },
  {
    id: 8,
    name: "Salted Caramel Brownie",
    price: 4.99,
    category: "Brownie",
    image: "image-brownie-tablet.jpg",
    quantity: 1,
  },
  {
    id: 9,
    name: "Vanilla Panna Cotta",
    price: 6.59,
    category: "Panna Cotta",
    image: "image-panna-cotta-tablet.jpg",
    quantity: 1,
  },
];

productcontain.innerHTML = products
  .map(
    (product) => `
        <div>
          <div class="big" id="${product.id}">
            <img src="assets/images/${product.image}" alt="">
            <div class="add-to-cart ">
              <img src="assets/images/icon-add-to-cart.svg" alt="">
              <h3>Add to Cart </h3>
            </div>
            <div class="add-to-cart-1" >
              <img src="assets/images/icon-decrement-quantity.svg" alt="">
              <span class="orderCount">0</span>
             <img src="assets/images/icon-increment-quantity.svg" alt="">
          </div>

        </div>
        <p>${product.category}</p>
        <h4>${product.name}</h4>
        <h5>$${product.price}</h5>
      </div>`
  )
  .join(" ");

productcontain.addEventListener("click", (event) => {
  const addToCartBtn = event.target.closest(".add-to-cart");

  if (addToCartBtn) {
    const productId = addToCartBtn.parentNode.id;
    eachProduct = products.find((product) => product.id == productId);

    const productImage = addToCartBtn.previousElementSibling;
    productImage.style.border = "solid 2px hsl(14, 86%, 42%)";
    const notEmptyCartBtn = addToCartBtn.nextElementSibling;
    notEmptyCartBtn.style.display = "flex";
    addToCartBtn.style.display = "none";

    // Your Cart Added Value
    const orderValue = document.querySelector(".ordered-value");
    orderValue.innerHTML = Number(orderValue.textContent) + 1;

    const decBtn = notEmptyCartBtn.firstElementChild;
    const orderCount = decBtn.nextElementSibling;
    orderCount.innerHTML = 1;
    eachProduct.quantity = Number(orderCount.innerHTML);
    orderProducts.push(eachProduct);
    populateOrderList();
    const inBtn = notEmptyCartBtn.lastElementChild;

    // Decrease Button Setting
    decBtn.addEventListener("click", () => {
      const productId = addToCartBtn.parentNode.id;
      eachProduct = products.find((product) => product.id == productId);
      if (Number(orderCount.textContent) > 0) {
        orderCount.innerHTML = Number(orderCount.textContent) - 1;
        eachProduct.quantity = Number(orderCount.textContent);
        if (Number(orderCount.textContent) == 0) {
          decBtn.style.cursor = "pointer";
          notEmptyCartBtn.style.display = "none";
          addToCartBtn.style.display = "flex";
          productImage.style.border = "solid 2px transparent";

          decBtn.replaceWith(decBtn.cloneNode(true));
          inBtn.replaceWith(inBtn.cloneNode(true));
          orderProducts = orderProducts.filter((item) => item.id != productId);
        }
      }
      populateOrderList();
    });

    // Increase Button Setting
    inBtn.addEventListener("click", () => {
      const productId = addToCartBtn.parentNode.id;
      eachProduct = products.find((product) => product.id == productId);
      decBtn.style.cursor = "pointer";
      orderCount.innerHTML = Number(orderCount.textContent) + 1;
      eachProduct.quantity = Number(orderCount.textContent);
      populateOrderList();
    });
  }
});

// orderList Box Container
const orderList = document.querySelector(".order-list-box");

let orderProducts = [
  // {
  //   id: 1,
  //   name: 'waffle with Berries',
  //   price: 10.99,
  //   category: 'waffle',
  //   image: "image-waffle-tablet.jpg",
  //   quantity: 1,
  // },
  // {
  //   id: 2,
  //   name: 'Vanilla Bean Crème Brûlée',
  //   price: 4.33,
  //   category: 'Creme Brulee',
  //   image: "image-creme-brulee-tablet.jpg",
  //   quantity: 4,
  // },
  // {
  //   id: 3,
  //   name: 'Macaron Mix of Five',
  //   price: 10.99,
  //   category: 'Macaron',
  //   image: "image-macaron-desktop.jpg",
  //   quantity: 2,
  // },
];

function populateOrderList() {
  if (orderProducts.length) {
    console.log(orderProducts);

    emptyCart.style.display = "none";
    filledsCart.style.display = "block";
    const cartTotalH3 = document.querySelector(".cart-total-h3");
    let total = 0;

    for (let i = 0; i < orderProducts.length; i++) {
      total += orderProducts[i].price * orderProducts[i].quantity;
    }
    cartTotalH3.innerHTML = total.toFixed(2, 0);
    orderList.innerHTML = orderProducts
      .map(
        (foodItem) =>
          `
      <div class="food-box" id="${foodItem.id}">
            <div>
              <h4>${foodItem.name}</h4>
              <div class="food-price">
                <h6>${foodItem.quantity}x</h6>
                <span class="span-1">@$${foodItem.price}</span>
                <span class="span-2">@$${(
                  foodItem.price * foodItem.quantity
                ).toFixed(2)}</</span>
              </div>
            </div>
            <img src="assets/images/icon-remove-item.svg" alt="" class="cancle-button">
          </div>
   `
      )
      .join(" ");
  } else {
    emptyCart.style.display = "block";
    filledsCart.style.display = "none";
  }
}

orderList.addEventListener("click", (event) => {
  const cancleButton = event.target.closest(".cancle-button");

  if (cancleButton) {
    const foodId = cancleButton.parentNode.id;
    orderProducts = orderProducts.filter((item) => item.id != foodId);
    populateOrderList();

    const elementId = document.getElementById(foodId);
    const nextElementId = elementId.firstElementChild;
    // console.log(nextElementId);

    const addToCart = elementId.querySelector(".add-to-cart");
    const addToCart1 = elementId.querySelector(".add-to-cart-1");

    addToCart.style.display = "flex";
    addToCart1.style.display = "none";
    nextElementId.style.border = "2px solid transparent";

    const orderValue = document.querySelector(".ordered-value");
    orderValue.innerHTML = Number(orderValue.textContent) - 1;
  }
});

const confirmBtn = document.querySelector(".confirm-order-btn");
const confirmBox = document.querySelector("section");
const bottonDiv = document.querySelector(".button-div");
console.log(bottonDiv);

const itemBox = document.querySelector(".item-box");
console.log(itemBox);


