const chocolateCards = [{
    image: 'https://neelamfoodlandmumbai.com/cdn/shop/files/IMG_9069_1ae3eb55-ad72-4fe9-b86a-b713696c35f6.jpg?v=1707200764',
    title: 'Almond Chocolate Delight',
    description: 'Crunchy almonds coated in rich milk chocolate.',
    price: "$149"
  },
  {
    image: 'https://www.theconsciousplantkitchen.com/wp-content/uploads/2021/05/Hazelnut-Balls-3-500x500.jpg',
    title: 'Hazelnut Chocolate Bliss',
    description: 'Creamy milk chocolate with roasted hazelnuts.',
    price: "$199"
  },
  {
    image: 'https://nutriholist.com/wp-content/uploads/2018/05/Cashew-Butter-Chocolate-Fudge-Bites.jpg',
    title: 'Cashew Nut Chocolate Bites',
    description: 'Smooth chocolate with roasted cashew nuts.',
    price: "$220"
  },
  {
    image: 'https://www.thesugarcoatedcottage.com/wp-content/uploads/2017/12/Salted-Walnut-Buttercrunch-3.jpg',
    title: 'Walnut Chocolate Crunch',
    description: 'Milk chocolate infused with crunchy walnuts.',
    price: "$270"
  },
  {
    image: 'https://i.etsystatic.com/53427186/r/il/6d7781/6109078514/il_fullxfull.6109078514_soyh.jpg',
    title: 'Pistachio Chocolate Delight',
    description: 'Rich chocolate with crunchy pistachios.',
    price: "$280"
  },
  {
    image: 'https://i.pinimg.com/736x/2e/f5/a9/2ef5a9ad99a3ca9aaae1205baeaaea79.jpg',
    title: 'Peanut Chocolate Treats',
    description: 'Classic chocolate with roasted peanuts.',
    price: "$112"
  },
  {
    image: 'https://www.takaski.com/wp-content/uploads/2017/01/Meiji-Macadamia-Chocolate.jpg',
    title: 'Macadamia Chocolate Bites',
    description: 'Buttery macadamia nuts in smooth milk chocolate.',
    price: "$200"
  },
  {
    image: 'https://eatbetterco.com/cdn/shop/files/HC_1.jpg?v=1725259684',
    title: 'Dark Chocolate Hazelnut',
    description: 'Bold dark chocolate with roasted hazelnuts.',
    price: "$160"
  },
  {
    image: 'https://i5.walmartimages.com/seo/Freshness-Guaranteed-Dark-Chocolate-Almonds-12-5-oz_1573c306-cdf3-40cf-aa63-dda9f2e357de.c8455a34cc3eeb3cc81571594882a535.jpeg',
    title: 'Dark Chocolate Almond',
    description: 'Rich dark chocolate paired with crunchy almonds.',
    price: "$189"
  },
  {
    image: 'https://ruchoks.com/wp-content/uploads/2023/06/1-47.jpg',
    title: 'Dark Chocolate Cashew Crunch',
    description: 'Velvety dark chocolate with roasted cashews.',
    price: "$167"
  },
  {
    image: 'https://www.wearesantos.com/cdn/shop/files/PistachioWhiteChoc_2a823585-2809-47b9-abd7-7cabd00b8e98.jpg?v=1692858815',
    title: 'White Chocolate Pistachio',
    description: 'Creamy white chocolate with pistachio bits.',
    price: "$299"
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqiY1ANOaqL1meE3Iu8x9Nw5Vrm2OC7J9TOA-lGREJlGbyAb7AnAi6Z0bhdWCt_tlJ_Q&usqp=CAU',
    title: 'Peanut Butter Chocolate Bites',
    description: 'Milk chocolate filled with peanut butter.',
    price: "$88"
  },
  {
    image: 'https://5.imimg.com/data5/ANDROID/Default/2021/12/XL/XV/TG/143743783/1639542896073-jpg-500x500.jpg',
    title: 'White Chocolate Hazelnut',
    description: 'White chocolate with roasted hazelnuts.',
    price: "$190"
  },
  {
    image: 'https://www.healthyseasonalrecipes.com/wp-content/uploads/2017/01/vegan-dark-chocolate-walnut-bites-sq-040-640x480.jpg',
    title: 'Dark Chocolate Walnut Treats',
    description: 'Dark chocolate paired with crunchy walnuts.',
    price: "$250"
  },
  {
    image: 'https://macadamiasaustralia.com/cdn/shop/files/whiteclusters110g.jpg?v=1714704757&width=2048',
    title: 'White Chocolate Macadamia',
    description: 'Creamy white chocolate with macadamia nuts.',
    price: "$120"
  },
  {
    image: 'https://prd-upmarket.s3.ap-south-1.amazonaws.com/AA0001/generated/ar1x1/large/ChocolateDelightsforAllHamper-Large.jpg',
    title: 'Trail Mix Chocolate Delight',
    description: 'Mixed nuts and dried fruit coated in chocolate.',
    price: "$799"
  }
];

let span = document.getElementById("count")
let chocolate = document.getElementById("cardContainer");
chocolate.style.display = "flex";
chocolate.style.flexWrap = "wrap";
chocolate.style.gap = "20px";
chocolate.style.justifyContent = "center";
let totalItems = JSON.parse(localStorage.getItem("totalItems")) || 0;
span.textContent = `${totalItems}`

function addToCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === chocolateCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...chocolateCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent = totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
}

chocolateCards.forEach((item, index) => {
  let candy = document.createElement("div");
  candy.classList.add("candy-card");

  candy.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <h4>${item.title}</h4>
    <p>${item.description}</p>
    <span>${item.price}</span>
    <button class="add-to-cart">Add to Cart</button>
    <button class="buy-now">Buy Now</button>
  `;

  chocolate.appendChild(candy);

  candy.querySelector(".add-to-cart").addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    addToCart(index);
    Swal.fire({
      text: "The item has been successfully added to your cart.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });
  });

  candy.querySelector(".buy-now").addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = "../Addtocart/cart.html";
  });

  candy.addEventListener("click", () => {
    localStorage.setItem("eachItem", JSON.stringify(item));
    window.location.href = "../Singlecard_page/eachitem.html";
  });
});
