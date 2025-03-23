// src/shop-kid.ts
document.addEventListener("DOMContentLoaded", () => {
  const xl = document.getElementById("xl");
  const s = document.getElementById("s");
  const m = document.getElementById("m");
  const l = document.getElementById("l");
  const x = document.getElementById("x");
  const container = document.getElementById("list-product");
  const defaultHTML = container.innerHTML;
  if (xl.checked) {
    renderProducts(xlproduct);
  }
  xl.addEventListener("change", () => {
    if (xl.checked) {
      renderProducts(xlproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  if (l.checked) {
    renderProducts(lproduct);
  }
  l.addEventListener("change", () => {
    if (l.checked) {
      renderProducts(lproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  if (m.checked) {
    renderProducts(mproduct);
  }
  m.addEventListener("change", () => {
    if (m.checked) {
      renderProducts(mproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  if (x.checked) {
    renderProducts(xproduct);
  }
  x.addEventListener("change", () => {
    if (x.checked) {
      renderProducts(xproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  if (s.checked) {
    renderProducts(sproduct);
  }
  s.addEventListener("change", () => {
    if (s.checked) {
      renderProducts(sproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
});
var xlproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "./img/xl.png",
    link: "/kids/continental-80-shoes"
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337,
    image: "https://demositefiles.blob.core.windows.net/images/catalog/9804/3444/plv1919-Purple-listing.png",
    link: "/kids/swift-run-x-shoes"
  }
];
var lproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "./img/nike-002.png",
    link: "/kids/continental-80-shoes"
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337,
    image: "https://demositefiles.blob.core.windows.net/images/catalog/9804/3444/plv1919-Purple-listing.png",
    link: "/kids/swift-run-x-shoes"
  }
];
var mproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "./img/nike-003.png",
    link: "/kids/continental-80-shoes"
  }
];
var xproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "./img/xl.png",
    link: "/kids/continental-80-shoes"
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337,
    image: "./img/nike-005.png",
    link: "/kids/swift-run-x-shoes"
  }
];
var sproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "https://demositefiles.blob.core.windows.net/images/catalog/1840/2713/plv2390-Red-listing.png",
    link: "/kids/continental-80-shoes"
  }
];
function renderProducts(products) {
  const container = document.getElementById("list-product");
  if (!container)
    return;
  const fragment = document.createDocumentFragment();
  for (const product of products) {
    const productCard = document.createElement("div");
    productCard.className = "product-card p-4 rounded-lg";
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.className = "w-full h-40 object-cover";
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productName.className = "font-bold mt-2";
    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;
    productPrice.className = "text-lg font-semibold";
    productCard.append(productImage, productName, productPrice);
    fragment.appendChild(productCard);
  }
  container.replaceChildren(fragment);
}
document.addEventListener("DOMContentLoaded", () => {
  const white = document.getElementById("white");
  const black = document.getElementById("black");
  const pink = document.getElementById("pink");
  const red = document.getElementById("red");
  const purple = document.getElementById("purple");
  const container = document.getElementById("list-product");
  const defaultHTML = container.innerHTML;
  if (white.checked) {
    renderProducts(whiteProducts);
  }
  white.addEventListener("change", () => {
    if (white.checked) {
      renderProducts(whiteProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  if (black.checked) {
    renderProducts(blackProducts);
  }
  black.addEventListener("change", () => {
    if (black.checked) {
      renderProducts(blackProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  if (pink.checked) {
    renderProducts(pinkProducts);
  }
  pink.addEventListener("change", () => {
    if (pink.checked) {
      renderProducts(pinkProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  if (red.checked) {
    renderProducts(redProducts);
  }
  red.addEventListener("change", () => {
    if (red.checked) {
      renderProducts(redProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  if (purple.checked) {
    renderProducts(purpleProducts);
  }
  purple.addEventListener("change", () => {
    if (purple.checked) {
      renderProducts(purpleProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
});
var whiteProducts = [
  {
    id: 1,
    name: "White Sneakers",
    price: 120,
    image: "./img/xl.png",
    link: "/kids/white-sneakers"
  },
  {
    id: 2,
    name: "Taylor 002",
    price: 620,
    image: "./img/nike-005.png",
    link: "/kids/white-sneakers"
  }
];
var blackProducts = [
  {
    id: 2,
    name: "Black Running Shoes",
    price: 150,
    image: "./img/black.png",
    link: "/kids/black-running-shoes"
  }
];
var pinkProducts = [
  {
    id: 3,
    name: "Pink Shoes",
    price: 135,
    image: "./img/nike-002.png",
    link: "/kids/pink-shoes"
  }
];
var redProducts = [
  {
    id: 4,
    name: "Red Sneakers",
    price: 140,
    image: "./img/red.png",
    link: "/kids/red-sneakers"
  }
];
var purpleProducts = [
  {
    id: 5,
    name: "Purple Shoes",
    price: 145,
    image: "./img/purple.png",
    link: "/kids/purple-shoes"
  }
];
