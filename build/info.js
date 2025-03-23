// src/info.ts
var params = new URLSearchParams(window.location.search);
var infoimg = document.querySelector("#info-img");
var infoname = document.querySelector("#info-name");
var infoprice = document.querySelector("#info-price");
var name = params.get("name");
var price = params.get("price");
var image = params.get("img");
infoimg?.setAttribute("src", `${image}`);
infoname.innerText = `${name}`;
infoprice.innerText = `${price}$`;
