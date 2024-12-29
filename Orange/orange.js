const orangeCards = [{
    image: "https://media.istockphoto.com/id/545119500/photo/colorful-jelly-candies-closeup.jpg?s=612x612&w=0&k=20&c=JaT2vfSB4APCHDmjiKXV8FcGnQ2kY8ZD5ZFizXhaCLQ=",
    title: "Citrus Gummy Bears",
    description: "Soft gummy bears with refreshing orange flavor.",
    price: "$59"
  },
  {
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/o/w/7/360-fruit-slice-shape-orange-flovoured-lollipop-for-kid-s-baby-original-imah33tge3f2tpat.jpeg?q=20&crop=false",
    title: "Tangy Orange Lollipops",
    description: "Classic orange-flavored lollipops for a sweet treat.",
    price: "$39"
  },
  {
    image: "https://rukminim2.flixcart.com/image/850/1000/koad9jk0/candy-mouth-freshener/t/t/s/84-sugar-free-mints-orange-pack-of-6-impact-mints-original-imag2sygm6q9fh4s.jpeg?q=20&crop=false",
    title: "Orange Sherbet Mints",
    description: "Cooling mints with a hint of orange sherbet.",
    price: "$50"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9_8Xg7fpR99RPlqHolCzazIUr0HTSQkIHQ&s",
    title: "Orange Fruit Slices",
    description: "Sugary jelly fruit slices with a zesty orange flavor.",
    price: "$70"
  },
  {
    image: "https://www.jiomart.com/images/product/original/490008743/parle-orange-bite-candy-214-5-g-product-images-o490008743-p490008743-0-202404151952.jpg?im=Resize=(1000,1000)",
    title: "Orange Taffy Bites",
    description: "Soft, chewy taffy with a burst of orange flavor.",
    price: "$35"
  },
  {
    image: "https://www.lorentanuts.com/wp-content/uploads/2020/10/Orange-Licorice-Jelly-Belly-Front-1-www.lorentanuts.com_.jpg",
    title: "Zesty Orange Licorice",
    description: "Twisted licorice with a tangy orange taste.",
    price: "$99"
  },
  {
    image: "https://shop.old-mill.com/cdn/shop/products/2450-DEFAULT-l.jpg?v=1547132963",
    title: "Orange Sugar Sticks",
    description: "Crunchy sugar sticks packed with orange goodness.",
    price: "$20"
  },
  {
    image: "https://sapphireconfectionery.com/cdn/shop/products/1_b3d9788f-67fa-4bfc-b208-0f1b0346caa5_1200x1200.jpg?v=1632297405",
    title: "Crispy Orange Wafers",
    description: "Light, crispy wafers filled with creamy orange filling.",
    price: "$100"
  },
  {
    image: "https://5.imimg.com/data5/SM/YM/IZ/SELLER-46615966/chupachups.jpg",
    title: "Orange Sour Belts",
    description: "Tangy sour belts with a zingy orange kick.",
    price: "$75"
  },
  {
    image: "https://doscherscandies.com/cdn/shop/files/Doschers_OrangeSlices3_comp_1800x1800.jpg?v=1716292749",
    title: "Fizzy Orange Hard Candy",
    description: "Hard candy that fizzes with an orange explosion.",
    price: "$35"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKy1JySrjObDYEwYJrn7BBfHa7CcEC42Ojg&s",
    title: "Orange Candy Canes",
    description: "A citrus twist on the traditional candy cane.",
    price: "$99"
  },
  {
    image: "https://i.pinimg.com/736x/b4/32/b2/b432b24cbecca72f303ad2f08325f58f.jpg",
    title: "Orange Pop Rocks",
    description: "Popping candy that crackles with orange flavor.",
    price: "$49"
  }
];

let span = document.getElementById("count")
let orange = document.getElementById("cardContainer");
orange.style.display = "flex";
orange.style.flexWrap = "wrap";
orange.style.gap = "20px";
orange.style.justifyContent = "center";
let totalItems = JSON.parse(localStorage.getItem("totalItems")) || 0;
span.textContent = `${totalItems}`

function addToCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let found = false;


  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === orangeCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...orangeCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent = totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
}

orangeCards.forEach((item, index) => {
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

  let orangeCards = document.getElementsByClassName("orange")
  orange.appendChild(candy);

  candy.querySelector(".add-to-cart").addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    addToCart(index);
    Swal.fire({
      title: "Added to Cart!",
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