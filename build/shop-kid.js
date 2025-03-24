// src/shop-kid.ts
document.addEventListener("DOMContentLoaded", () => {
  const xl = document.getElementById("xl");
  const s = document.getElementById("s");
  const m = document.getElementById("m");
  const l = document.getElementById("l");
  const x = document.getElementById("x");
  const white = document.getElementById("color-white");
  const black = document.getElementById("color-black");
  const pink = document.getElementById("color-pink");
  const red = document.getElementById("color-red");
  const purple = document.getElementById("color-purple");
  const container = document.getElementById("list-product");
  const defaultHTML = container.innerHTML;
  xl.addEventListener("change", () => {
    if (xl.checked) {
      renderProducts(xlproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  l.addEventListener("change", () => {
    if (l.checked) {
      renderProducts(lproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  m.addEventListener("change", () => {
    if (m.checked) {
      renderProducts(mproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  x.addEventListener("change", () => {
    if (x.checked) {
      renderProducts(xproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  s.addEventListener("change", () => {
    if (s.checked) {
      renderProducts(sproduct);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  white.addEventListener("change", () => {
    if (white.checked) {
      renderProducts(whiteProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  black.addEventListener("change", () => {
    if (black.checked) {
      renderProducts(blackProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  pink.addEventListener("change", () => {
    if (pink.checked) {
      renderProducts(pinkProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  red.addEventListener("change", () => {
    if (red.checked) {
      renderProducts(redProducts);
    } else {
      container.innerHTML = defaultHTML;
    }
  });
  purple.addEventListener("change", () => {
    if (purple.checked) {
      renderProducts(purpleProducts);
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
    image: "./img/xl.png"
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337,
    image: "https://demositefiles.blob.core.windows.net/images/catalog/9804/3444/plv1919-Purple-listing.png"
  }
];
var lproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "./img/nike-002.png"
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337,
    image: "https://demositefiles.blob.core.windows.net/images/catalog/9804/3444/plv1919-Purple-listing.png"
  }
];
var mproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "./img/nike-003.png"
  }
];
var xproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "./img/xl.png"
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337,
    image: "./img/nike-005.png"
  }
];
var sproduct = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126,
    image: "https://demositefiles.blob.core.windows.net/images/catalog/1840/2713/plv2390-Red-listing.png"
  }
];
var whiteProducts = [
  {
    id: 1,
    name: "White Sneakers",
    price: 120,
    image: "./img/xl.png"
  },
  {
    id: 2,
    name: "Taylor 002",
    price: 620,
    image: "./img/nike-005.png"
  }
];
var blackProducts = [
  {
    id: 1,
    name: "Black Running Shoes",
    price: 350,
    image: "./img/black.png"
  },
  {
    id: 2,
    name: "Black Running Shoes",
    price: 1250,
    image: "./img/black-001.png"
  }
];
var pinkProducts = [
  {
    id: 3,
    name: "Pink Shoes",
    price: 135,
    image: "./img/nike-002.png"
  }
];
var redProducts = [
  {
    id: 11,
    name: "Red Sneakers",
    price: 140,
    image: " https://demositefiles.blob.core.windows.net/images/catalog/1840/2713/plv2390-Red-listing.png"
  }
];
var purpleProducts = [
  {
    id: 4,
    name: "Red Sneakers",
    price: 140,
    image: "https://demositefiles.blob.core.windows.net/images/catalog/9804/3444/plv1919-Purple-listing.png"
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
