const params = new URLSearchParams(window.location.search);

const infoimg = document.querySelector("#info-img");
const infoname: HTMLParagraphElement = document.querySelector("#info-name")!;
const infoprice: HTMLParagraphElement = document.querySelector("#info-price")!;

const name = params.get("name");
const price = params.get("price");
const image = params.get("img");

infoimg?.setAttribute("src", `${image}`);
infoname.innerText = `${name}`;
infoprice.innerText = `${price}$`;
