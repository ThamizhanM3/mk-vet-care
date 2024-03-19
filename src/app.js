const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "GROWTH",
    price: 1500,
    desc: "These products are designed to improve the overall health, weight gain, and feed efficiency of the birds, ultimately increasing their market value and productivity. Growth promoter poultry medicine can include various pharmaceuticals, vitamins, minerals, and other nutritional supplements that are administered to poultry to optimize their growth and overall well-being.",
    
},
{
    id: 2,
    title: "LIVER",
    price: 600,
    desc: "Hepave liver tonics are typically formulated to provide essential nutrients and support liver function. They may contain a combination of vitamins, minerals, amino acids, and other compounds that help maintain a healthy liver in birds. These tonics can be especially useful during times of stress, illness, or when birds are raised under suboptimal conditions.",
    
},
{
    id: 3,
    title: "ANTIBIOTICS",
    price: 250,
    desc: "Immno boost are given to poultry when they are diagnosed with bacterial infections or diseases, such as respiratory infections or enteric diseases. This helps to cure sick birds and prevent the spread of illness within the flock",
    
},
{
    id: 4,
    title: "FEED SUPLEMENTRY",
    price: 1000,
    desc: "These supplements are added to poultry feed to ensure that the birds receive all the essential vitamins and minerals required for their growth and health. Common supplements include calcium, phosphorus, vitamins A, D, and E, among others.",
    
},
{
    id: 5,
    title: "WATER SANITIZER",
    price: 600,
    desc: "Acid MK ensures that  a proper maintenance of water distribution systems and routine cleaning of water containers are essential to prevent contamination. Veterinary guidance and best practices should be followed to ensure the health and well-being of the poultry flock.",
   
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
let prodimg = document.getElementById("prodimg");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductDesc.textContent = choosenProduct.desc;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});