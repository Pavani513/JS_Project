const kissesCards = [{
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/z/e/i/150-hershey-s-kisses-milk-chocolate-truffles-1-hersheys-original-imaggrcgv6xjgyhr.jpeg?q=90&crop=false',
    title: 'Milk Chocolate Kisses',
    description: 'Classic milk chocolate Kisses for a smooth, creamy taste.',
    price: "$99"
  },
  {
    image: 'https://i5.walmartimages.com/seo/Hershey-s-Kisses-Special-Dark-Mildly-Sweet-Chocolate-Candy-38-4-Oz_5bc3bdee-50b0-4ef4-8784-f4650a0fc26e_3.c4a17cf7aea3dd42cf817d6a4ff80c63.png',
    title: 'Dark Chocolate Kisses',
    description: 'Rich and bold dark chocolate Kisses.',
    price: "$159"
  },
  {
    image: 'https://rukminim2.flixcart.com/image/850/1000/k2krekw0/chocolate/v/u/r/403-2-kisses-cookies-n-cr-me-chocolates-33-3g-pack-of-12-hershey-original-imafd8xqqyrt2jd2.jpeg?q=90&crop=false',
    title: 'White Chocolate Kisses',
    description: 'Creamy and sweet white chocolate Kisses.',
    price: "$139"
  },
  {
    image: 'https://images.freshop.com/00034000157341/2555d1b05cef0d6552f6b46086744234_large.png',
    title: 'Hazelnut Chocolate Kisses',
    description: 'Smooth milk chocolate with a hazelnut center.',
    price: "$169"
  },
  {
    image: 'https://img.perfumerflavorist.com/files/base/allured/all/image/2021/03/pf.kisses_strawberry.png?auto=format&fill=solid&fit=fill&h=720&q=70&w=1280',
    title: 'Strawberry Cream Kisses',
    description: 'Delicious Kisses filled with strawberry cream.',
    price: "$112"
  },
  {
    image: 'https://s7d1.scene7.com/is/image/hersheyprodcloud/0_34000_14072_5_701_14072_002_Item_Front?fmt=webp-alpha&hei=908&qlt=75',
    title: 'Mint Chocolate Kisses',
    description: 'Refreshing mint-flavored chocolate Kisses.',
    price: "$79"
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKMPxB_e3azPcNpRUVew1aWfTQf6h49znB04kQs0SYz37WE4q-lYDhNkvdQQzHlK0CZI&usqp=CAU',
    title: 'Caramel Chocolate Kisses',
    description: 'Rich milk chocolate filled with gooey caramel.',
    price: "$120"
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3s35xhz_L89u_pyt79FzKjo3g0pNai4MjKw&s',
    title: 'Almond Chocolate Kisses',
    description: 'Crunchy almonds covered in milk chocolate.',
    price: "$187"
  },
  {
    image: 'https://www.cookiemadness.net/wp-content/uploads/2020/03/hersheyskissesmacaroons-360x361.jpg',
    title: 'Coconut Cream Kisses',
    description: 'Milk chocolate Kisses with a coconut cream filling.',
    price: "$88"
  },
  {
    image: 'https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/00074013003082/6fec5f128339a8b9e5d7cf307a0d8834_large.png&width=256&type=webp&quality=80',
    title: 'Peanut Butter Kisses',
    description: 'Chocolate Kisses with a creamy peanut butter center.',
    price: "$59"
  },
  {
    image: 'https://junkfoodbetty.com/wp-content/uploads/2011/12/Hersheys-Kisses-Milk-Chocolates-filled-with-Cherry-Cordial-Cr%C3%A8me-Bag.jpg',
    title: 'Cherry Chocolate Kisses',
    description: 'Milk chocolate with a burst of cherry flavor.',
    price: "$149"
  },
  {
    image: 'https://i.pinimg.com/564x/1b/86/57/1b8657b3885c46262cc147a8c6867806.jpg',
    title: 'Orange Chocolate Kisses',
    description: 'Milk chocolate infused with a zesty orange flavor.',
    price: "$135"
  },
  {
    image: 'https://www.ohnuts.com/noapp/showImage.cfm/zoom/_MG_8377.jpg',
    title: 'Salted Caramel Kisses',
    description: 'A blend of sweet chocolate and salted caramel.',
    price: "$107"
  },
  {
    image: 'https://shop.hersheys.com/on/demandware.static/-/Sites-master-us/default/dw8471ad7f/images/hi-res/032284016477_3.jpg',
    title: 'Coffee Chocolate Kisses',
    description: 'Bold coffee flavor wrapped in milk chocolate.',
    price: "$200"
  }
];

let span = document.getElementById("count")
let kisses = document.getElementById("cardContainer");
kisses.style.display = "flex";
kisses.style.flexWrap = "wrap";
kisses.style.gap = "20px";
kisses.style.justifyContent = "center";
let totalItems = JSON.parse(localStorage.getItem("totalItems")) || 0;
span.textContent = `${totalItems}`

function addToCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === kissesCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...kissesCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent = totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
}

kissesCards.forEach((item, index) => {
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

  kisses.appendChild(candy);

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
