document.addEventListener("DOMContentLoaded", () => {
  const xl = document.getElementById("xl") as HTMLInputElement;
  const s = document.getElementById("s") as HTMLInputElement;
  const m = document.getElementById("m") as HTMLInputElement;
  const l = document.getElementById("l") as HTMLInputElement;
  const x = document.getElementById("x") as HTMLInputElement;
  const white = document.getElementById("color-white") as HTMLInputElement;
  const black = document.getElementById("color-black") as HTMLInputElement;
  const pink = document.getElementById("color-pink") as HTMLInputElement;
  const red = document.getElementById("color-red") as HTMLInputElement;
  const purple = document.getElementById("color-purple") as HTMLInputElement;
  const container = document.getElementById("list-product")!;
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

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const xlproduct: Product[] = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126.0,
    image: "./img/xl.png",
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337.0,
    image:
      "https://demositefiles.blob.core.windows.net/images/catalog/9804/3444/plv1919-Purple-listing.png",
  },
];

const lproduct: Product[] = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126.0,
    image: "./img/nike-002.png",
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337.0,
    image:
      "https://demositefiles.blob.core.windows.net/images/catalog/9804/3444/plv1919-Purple-listing.png",
  },
];

const mproduct: Product[] = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126.0,
    image: "./img/nike-003.png",
  },
];

const xproduct: Product[] = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126.0,
    image: "./img/xl.png",
  },
  {
    id: 2,
    name: "Swift run x shoes",
    price: 337.0,
    image: "./img/nike-005.png",
  },
];

const sproduct: Product[] = [
  {
    id: 1,
    name: "Continental 80 shoes",
    price: 126.0,
    image:
      "https://demositefiles.blob.core.windows.net/images/catalog/1840/2713/plv2390-Red-listing.png",
  },
];

const whiteProducts: Product[] = [
  {
    id: 1,
    name: "White Sneakers",
    price: 120.0,
    image: "./img/xl.png",
  },
  {
    id: 2,
    name: "Taylor 002",
    price: 620.0,
    image: "./img/nike-005.png",
  },
];

const blackProducts: Product[] = [
  {
    id: 1,
    name: "Black Running Shoes",
    price: 350.0,
    image: "./img/black.png",
  },
  {
    id: 2,
    name: "Black Running Shoes",
    price: 1250.0,
    image: "./img/black-001.png",
  },
];

const pinkProducts: Product[] = [
  {
    id: 3,
    name: "Pink Shoes",
    price: 135.0,
    image: "./img/nike-002.png",
  },
];

const redProducts: Product[] = [
  {
    id: 11,
    name: "Red Sneakers",
    price: 140.0,
    image:
      " https://demositefiles.blob.core.windows.net/images/catalog/1840/2713/plv2390-Red-listing.png",
  },
];

const purpleProducts: Product[] = [
  {
    id: 4,
    name: "Red Sneakers",
    price: 140.0,
    image:
      "https://demositefiles.blob.core.windows.net/images/catalog/9804/3444/plv1919-Purple-listing.png",
  },
];

function renderProducts(products: Product[]) {
  const container = document.getElementById("list-product");
  if (!container) return;

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

function rendercolor(products: Product[]) {
  const container = document.getElementById("list-product");
  if (!container) return;

  container.innerHTML = "";

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

  container.appendChild(fragment);
}
