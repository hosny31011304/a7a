let fristBranch = document.querySelector(".fristBranch");
let secondBranch = document.querySelector(".secondBranch");
let thirdBranch = document.querySelector(".thirdBranch");
let fourthBranch = document.querySelector(".fourthBranch");

async function fetchProducts() {
  try {
    const response = await fetch('fetch_products.php'); 
    const products = await response.json();

    addProductToLandingPage(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function addProductToLandingPage(array) {
  array.forEach((productData) => {
    let product = document.createElement("div");
    product.className = "product";

    product.addEventListener("click", () => {
      let productWindow = document.querySelector(".productFullScreenView");
      productWindow.className = "productFullScreenView";
      let img1 = document.querySelector(".img1");
      let img2 = document.querySelector(".img2");
      let img3 = document.querySelector(".img3");
      img1.src = productData.img1;
      img2.src = productData.img2;
      img3.src = productData.img3;
      let productTitle = document.querySelector(".productTitle");
      productTitle.textContent = productData.name;
      let productDescribtion = document.querySelector(".productDescribtion");
      productDescribtion.textContent = productData.description;
      let productPrice = document.querySelector(".productPrice");
      productPrice.textContent = `${productData.price} EG`;
    });

    let message = document.createElement("div");
    message.className = "massage";
    let h1Message = document.createElement("h1");
    h1Message.textContent = "Press to view";
    message.appendChild(h1Message);
    product.appendChild(message);

    let img = document.createElement("div");
    img.className = "img";
    let imgImg = document.createElement("img");
    imgImg.src = productData.img1;
    img.appendChild(imgImg);
    product.appendChild(img);

    let textInfo = document.createElement("div");
    textInfo.className = "textInfo";

    let title = document.createElement("h2");
    title.className = "product-title";
    title.textContent = productData.name;
    textInfo.appendChild(title);

    let price = document.createElement("p");
    price.className = "product-price";
    price.textContent = `${productData.price} EG`;
    textInfo.appendChild(price);

    product.appendChild(textInfo);

    if (productData.Type === "fristBranch") {
      fristBranch.appendChild(product);
    } else if (productData.Type === "secondBranch") {
      secondBranch.appendChild(product);
    } else if (productData.Type === "thirdBranch") {
      thirdBranch.appendChild(product);
    } else if (productData.Type === "fourthBranch") {
      fourthBranch.appendChild(product);
    }
  });
}

document.addEventListener("DOMContentLoaded", fetchProducts);

let productWindowCloser = document.querySelector(".productCloser");
let productWindow = document.querySelector(".productFullScreenView");

productWindowCloser.addEventListener("click", () => {
  productWindow.className = "productFullScreenView inactive";
});

let toggler = document.querySelector(".toggler");
let nav = document.querySelector("#nav");
let closer = document.querySelector(".closer");

toggler.addEventListener("click", () => {
  nav.classList.add("opened");
});


closer.addEventListener("click", () => {
  nav.classList.remove("opened");
});


document.addEventListener("DOMContentLoaded", () => {
  const whatsappButton = document.querySelector(".commCard:nth-child(1) span");
  whatsappButton.addEventListener("click", () => {
    window.open("https://wa.me/01000000000", "_blank");
  });
  const emailButton = document.querySelector(".commCard:nth-child(2) span");
  emailButton.addEventListener("click", () => {
    window.location.href = "mailto:*******@gmail.com";
  });
});