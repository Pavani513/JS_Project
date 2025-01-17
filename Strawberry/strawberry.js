const strawberryCards = [{
    image: 'https://candyfunhouse.ca/cdn/shop/products/tootsie-roll-frooties-strawberry-candy-candy-funhouse.jpg?v=1680789784',
    title: 'Classic Strawberry Candy',
    description: 'Delicious classic strawberry-flavored candy.',
    price: "₹99"
  },
  {
    image: 'https://i.redd.it/sugar-jacks-500-mg-thc-candy-gummies-strawberry-yogurt-v0-iflxhnnmrfkd1.jpg?width=4032&format=pjpg&auto=webp&s=e4f136d6414b913cc827ca9f442a4a6244b3864e',
    title: 'Strawberry Gummies',
    description: 'Soft and chewy strawberry gummies.',
    price: "₹129"
  },
  {
    image: 'https://iwholesalecandy.ca/cdn/shop/products/wonka-laffy-taffy-strawberry-retro-candy.jpg?v=1624030730',
    title: 'Strawberry Taffy',
    description: 'Chewy and flavorful strawberry taffy.',
    price: "₹75"
  },
  {
    image: 'https://i5.walmartimages.com/asr/0717ec7a-1703-4335-b137-ee13a912f1cc.c794d9691997be7262c136292e796532.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    title: 'Strawberry Hard Candies',
    description: 'Classic hard candies with strawberry flavor.',
    price: "₹59"
  },
  {
    image: 'https://static.wixstatic.com/media/d4fff1_0d1a1684cb624f88802a8c2825fb5e32~mv2.jpeg/v1/fill/w_760,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d4fff1_0d1a1684cb624f88802a8c2825fb5e32~mv2.jpeg',
    title: 'Strawberry Chocolate Coated',
    description: 'Strawberry candies coated in rich chocolate.',
    price: "₹199"
  },
  {
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/candy-mouth-freshener/h/a/w/-original-imagpzq69zeyxquy.jpeg?q=20',
    title: 'Strawberry Jellies',
    description: 'Juicy strawberry-flavored jelly candies.',
    price: "₹89"
  },
  {
    image: 'https://images-cdn.ubuy.co.in/6378584dffe4a474090be4d3-sour-punch-bites-9oz-bag-strawberry.jpg',
    title: 'Sour Strawberry Bites',
    description: 'Tangy strawberry-flavored sour bites.',
    price: "₹109"
  },
  {
    image: 'https://momsplaceglutenfree.com/cdn/shop/files/StrawberryLicroice_MockUpBag_JPG_63472ad3-f762-48ab-bb83-4ee1cebec4b9_1024x1024.jpg?v=1713378584',
    title: 'Strawberry Licorice',
    description: 'Delicious strawberry-flavored licorice twists.',
    price: "₹139"
  },
  {
    image: 'https://posylka-images.s3.eu-central-1.amazonaws.com/08/50/33/18/08503318_2.jpg',
    title: 'Strawberry Cream Candies',
    description: 'Creamy candies with a strawberry center.',
    price: "₹159"
  },
  {
    image: 'https://p16-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f708c9908019480cb155cfcad28adce5~tplv-omjb5zjo8w-resize-jpeg:800:800.jpeg?from=1826719393',
    title: 'Mini Strawberry Candies',
    description: 'Bite-sized strawberry-flavored treats.',
    price: "₹112"
  },
  {
    image: 'https://fosterschocolate.com/cdn/shop/products/strawberry_bon_bons_uk_ireland_300x.jpg?v=1609763643',
    title: 'Strawberry Bonbons',
    description: 'Delicious strawberry-filled bonbons.',
    price: "₹175"
  },
  {
    image: 'https://www.bigbearswife.com/wp-content/uploads/2022/02/overhead-shot-of-STRAWBERRY-CRUNCH-COOKIES-with-fresh-strawberries-on-the-side-1-480x480.jpg',
    title: 'Strawberry Crunch',
    description: 'Crunchy candies with a strawberry kick.',
    price: "₹55"
  },
  {
    image: 'https://images.cdn.shop.foodland.com/zoom/85168100805.jpg',
    title: 'Strawberry Fruit Chews',
    description: 'Delicious strawberry-flavored fruit chews.',
    price: "₹87"
  }
];

let span=document.getElementById("count")
let  strawberry= document.getElementById("cardContainer");
strawberry.style.display = "flex";
strawberry.style.flexWrap = "wrap";
strawberry.style.gap = "20px";
strawberry.style.justifyContent = "center";
let totalItems = JSON.parse(localStorage.getItem("totalItems")) || 0;
span.textContent = `${totalItems}`
function addToCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === strawberryCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...strawberryCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent=totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
}

function buyNow(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === strawberryCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...strawberryCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent=totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
}

strawberryCards.forEach((item, index) => {
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

  let strawberryCards=document.getElementsByClassName("strawberry")
  strawberry.appendChild(candy);

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
    buyNow(index);
    window.location.href = "../Addtocart/cart.html";
  });

  candy.addEventListener("click", () => {
    localStorage.setItem("eachItem", JSON.stringify(item));
    window.location.href = "../Singlecard_page/eachitem.html";
  });
});
