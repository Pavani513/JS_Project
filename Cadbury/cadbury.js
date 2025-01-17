const cadburyCards = [{
    image: "https://m.media-amazon.com/images/I/61LYBD8wkCL.jpg",
    title: "Dairy Milk",
    description: "Classic creamy milk chocolate.",
    price: "₹20"
  },
  {

    image: "https://m.media-amazon.com/images/I/71of1TmVioL.jpg",
    title: "Dairy Milk Fruit & Nut",
    description: "Milk chocolate with fruits and nuts.",
    price: "₹45"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh3rX_f5TUlydT0DurOSE8izr3jOcu0ohFQ&s",
    title: "Dairy Milk Roast Almond",
    description: "Rich roasted almonds filled chocolate.",
    price: "₹49"
  },
  {
    image: "https://backoffice.cadburygifting.in/media/catalog/product/b/o/bournvile_600x600.png?optimize=high&fit=bounds&height=&width=",
    title: "Bournville Dark",
    description: "Dark chocolate with intense flavor.",
    price: "₹99"
  },
  {
    image: "https://m.media-amazon.com/images/I/71ZufuSGmVL._AC_UF1000,1000_QL80_.jpg",
    title: "5 Star",
    description: "Chewy caramel and nougat bars.",
    price: "₹50"
  },
  {
    image: "https://m.media-amazon.com/images/I/61lDkOHFpmL.jpg",
    title: "Flake",
    description: "Crumbly milk chocolate.",
    price: "₹79"
  },
  {
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/t/n/i/95-bista-wispa-1-cadbury-original-imaghg2zagcjgqaf.jpeg?q=20&crop=false",
    title: "Wispa",
    description: "Light and airy chocolate bar.",
    price: "₹50"
  },
  {

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo44e24XwWi4Z6kpGg7swX4sRA9p6v6WqmTA&s",
    title: "Twirl",
    description: "Delicate swirls of chocolate.",
    price: "₹20"
  },
  {

    image: "https://cadbury.co.za/sites/default/files/2022-09/CrunchieIndividual_0.png",
    title: "Crunchie",
    description: "Honeycomb center coated in chocolate.",
    price: "₹40"
  },
  {
    image: "https://cococart.in/cdn/shop/files/1CH2569.png?v=1728473395",
    title: "Dairy Milk Oreo",
    description: "Chocolate with Oreo filling.",
    price: "₹159"
  },
  {

    image: "https://groceries.morrisons.com/images-v3/4b85987b-1398-4173-a0c1-3546047c9d74/6c3722af-1b1a-4007-a29a-b45a2d782d89/500x500.jpg",
    title: "Fudge",
    description: "Smooth chocolate with a fudge center.",
    price: "₹50"
  },
  {
    image: "https://m.media-amazon.com/images/I/51nVWh5IOOL._AC_UF894,1000_QL80_.jpg",
    title: "Picnic",
    description: "Nuts, raisins, and wafer bar.",
    price: "₹150"
  },
  {

    image: "https://www.thecandybar.ca/cdn/shop/products/Cadbury_Double_Decker_20e30f95-fecc-467f-bd46-b718b6d7efca_1024x1024.jpg?v=1526270214",
    title: "Double Decker",
    description: "Nougat and crispy cereal layers.",
    price: "₹30"
  },
  {

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTyNuiUIBlS5cBF_xxN3j71kt6VZD5v5Rmg&s",
    title: "Marvellous Creations",
    description: "Unique candy-filled chocolate.",
    price: "₹80"
  },
  {
    image: "https://rukminim2.flixcart.com/image/750/900/xif0q/chocolate/o/z/0/-original-imah2yr8tysp2bwm.jpeg?q=20&crop=false",
    title: "Dairy Milk Silk Mousse",
    description: "Smooth,dark, silky chocolate bar.",
    price: "₹200"
  }
];

let span = document.getElementById("count")
let cadbury = document.getElementById("cardContainer");
cadbury.style.display = "flex";
cadbury.style.flexWrap = "wrap";
cadbury.style.gap = "20px";
cadbury.style.justifyContent = "center";
let totalItems = JSON.parse(localStorage.getItem("totalItems")) || 0;
span.textContent = `${totalItems}`

function addToCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === cadburyCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...cadburyCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent = totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
}

function buyNow(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === cadburyCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...cadburyCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent = totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
}

cadburyCards.forEach((item, index) => {
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

  cadbury.appendChild(candy);

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
    buyNow(index) 
    window.location.href = "../Addtocart/cart.html";
  });

  candy.addEventListener("click", () => {
    localStorage.setItem("eachItem", JSON.stringify(item));
    window.location.href = "../Singlecard_page/eachitem.html";
  });
});
