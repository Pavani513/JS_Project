const ferreroCards = [{
    image: "https://m.media-amazon.com/images/I/81EOhijT59L._AC_UF894,1000_QL80_.jpg",
    title: "Ferrero Rocher Classic",
    description: "The iconic Ferrero Rocher with a crunchy hazelnut center wrapped in milk chocolate.",
    price: "$199"
  },
  {
    image: "https://camperdowncellars.com.au/cdn/shop/products/FerreroRocher35g3Pack.2_clipped_rev_1_1200x.png?v=1657692406",
    title: "Ferrero Rocher Dark",
    description: "A sophisticated take with dark chocolate coating and a hazelnut center.",
    price: "$250"
  },
  {
    image: "https://i0.wp.com/chocolate.lk/wp-content/uploads/2021/12/ferrero-rocher-white-90g-inside3.jpg?fit=600%2C600&ssl=1",
    title: "Ferrero Rocher White",
    description: "A delicate white chocolate version with a hazelnut core and wafer shell.",
    price: "$270"
  },
  {
    image: "https://s.alicdn.com/@sc04/kf/A5e81d2af494e4d5eb6d3a1619f7ce4d9Y.jpg_720x720q50.jpg",
    title: "Ferrero Rocher Raffaello",
    description: "A creamy coconut treat with a whole almond inside, covered in white chocolate.",
    price: "$90"
  },
  {
    image: "https://live.staticflickr.com/2021/2255238508_af933e623a_z.jpg",
    title: "Ferrero Rocher Pistachio",
    description: "Smooth pistachio filling with a crunchy chocolate coating and wafer shell.",
    price: "$99"
  },
  {
    image: "https://thankgoodnessfoods.com/cdn/shop/files/7_34e6b275-1c09-409e-855f-dce92f609bd7.jpg?v=1701094288",
    title: "Ferrero Rocher Hazelnut Dark",
    description: "Rich dark chocolate with a roasted hazelnut and crunchy wafer layers.",
    price: "$450"
  },
  {
    image: "https://snaktime.in/images/chocolates/ferrero-rocher-hazelnut-milk-chocolates-30-pcs-375-gm-1.jpg",
    title: "Ferrero Rocher Almond Delight",
    description: "Delicious milk chocolate surrounding an almond-filled core.",
    price: "$300"
  },
  {
    image: "https://belconi.com.my/wp-content/uploads/2024/05/89006138-e78c-4898-8410-4ec4cbc7948a.jpg",
    title: "Ferrero Rocher Espresso",
    description: "Coffee-infused milk chocolate with a roasted hazelnut center.",
    price: "$150"
  },
  {
    image: "https://5.imimg.com/data5/OT/TC/IX/GLADMIN-3461943/selection-019-500x500.png",
    title: "Ferrero Rocher Truffle",
    description: "A luxurious truffle chocolate with a smooth, creamy filling.",
    price: "$220"
  },
  {
    image: "https://images.cdn.smartandfinal.com/detail/1ca1b4de-5a7f-434b-b2c2-d1c004a2274e.jpeg",
    title: "Ferrero Rocher Caramel",
    description: "Gooey caramel inside a milk chocolate shell with a crunchy wafer.",
    price: "$179"
  },
  {
    image: "https://www.chocolate-brands.com/image/cache/catalog/Ferrero/ferrero-rocher-limited-edition-happy-holidays-easter-600g-700x700.jpg",
    title: "Ferrero Rocher Mint",
    description: "Refreshing mint filling wrapped in dark chocolate and crispy wafer.",
    price: "$129"
  },
  {
    image: "https://images.getrecipekit.com/20230930105610-img_0655-1024x1024.jpg?aspect_ratio=1:1&quality=90&",
    title: "Ferrero Rocher Strawberry",
    description: "Strawberry cream wrapped in white chocolate and a crunchy wafer shell.",
    price: "$199"
  }
];

let span = document.getElementById("count")
let ferrero = document.getElementById("cardContainer");
ferrero.style.display = "flex";
ferrero.style.flexWrap = "wrap";
ferrero.style.gap = "20px";
ferrero.style.justifyContent = "center";
let totalItems = JSON.parse(localStorage.getItem("totalItems")) || 0;
span.textContent = `${totalItems}`

function addToCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === ferreroCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...ferreroCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent = totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
}

ferreroCards.forEach((item, index) => {
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

  ferrero.appendChild(candy);

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


// let ferrero=document.getElementById("cardContainer")
// ferreroCards.forEach(x => {
//   let candy=document.createElement("div")
//   candy.innerHTML=`<img src="${x.image}">
//   <h3>${x.title}</h3>
//   <p>${x.description}</p>
//   <span>${x.price}</span>
//   <button id="addToCart">Add to cart</button>
//   <button id="buyNow">Buy Now</button>
//   `
// candy.style.border="2px solid black"
// candy.style.boxSizing="box-shadow"
// candy.style.padding="20px"
// candy.style.display="flex"
// candy.style.flexDirection="column"
// candy.style.justifyContent="center"
// candy.style.alignItems="center"
// let a=candy.getElementsByTagName("img")[0]
// a.style.width="25vw"
// a.style.height="30vh"
// ferrero.style.display="flex"
// ferrero.style.flexWrap="wrap"
// ferrero.style.gap="20px"
// ferrero.style.justifyContent="center"
// ferrero.style.alignItems="center"
//   cardContainer.append(candy)

//   candy.querySelector("#addToCart").addEventListener("click",(e)=>{
//     e.stopImmediatePropagation()
//    let confirmAddingCart=confirm("Do you wanna add item to cart?")
//    if(confirmAddingCart){
//     const allAddedItems=JSON.parse(localStorage.getItem("addItems")) || []
//    allAddedItems.push(x)
//     localStorage.setItem("addItems",JSON.stringify(allAddedItems))
//     alert("added item into cart")
//    }
//   })

//   candy.addEventListener("click",()=>{
//     localStorage.setItem("eachItem",JSON.stringify(x))
//     window.location.href="../Singlecard_page/eachitem.html"
//   })

//             // SEEMORE
//   // candy.querySelector("#seeMore").addEventListener("click",()=>{
//   //   // localStorage.setItem("seeMore",JSON.stringify(x))
//   //   window.location.href="../Ferrorocher/ferrorocher.html"
//   // })

// candy.querySelector("#buyNow").addEventListener("click",(e)=>{
//   e.stopImmediatePropagation()
//   window.location.href="../Addtocart/cart.html"
// })


//   // candy.addEventListener("click",()=>{
//   //   localStorage.setItem("seeMore",JSON.stringify(x))
//   //   window.location.href="ferrero.html"


// })