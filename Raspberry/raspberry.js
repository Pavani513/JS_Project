const raspberryCards = [{
    image: 'https://borgat.com/images/products/Gummies/100g/rnb.png',
    title: 'Raspberry Gummies',
    description: 'Soft and chewy raspberry gummies bursting with flavor.',
    price: '$49'
  },
  {
    image: 'https://i.ebayimg.com/images/g/EH0AAOSwD75fRoau/s-l400.jpg',
    title: 'Raspberry Jelly Beans',
    description: 'Delicious raspberry-flavored jelly beans with a sweet center.',
    price: '$99'
  },
  {
    image: 'https://www.treasureislandsweets.co.uk/user/products/large/zoom-blue-raspberry-lolly-tongue-painter.jpg',
    title: 'Raspberry Lollipops',
    description: 'Tangy and sweet raspberry lollipops, perfect for any occasion.',
    price: '$20'
  },
  {
    image: 'https://m.media-amazon.com/images/I/41Gw1mB6h8L.AC_UF894,1000_QL80.jpg',
    title: 'Raspberry Hard Candies',
    description: 'Long-lasting raspberry hard candies with an intense flavor.',
    price: '$50'
  },
  {
    image: 'https://www.snackandbakery.com/ext/resources/2024/12/04/hi-chew-blue-raspberry.jpg?height=635&t=1733345390&width=1200',
    title: 'Raspberry Chews',
    description: 'Chewy raspberry candies for a quick fruity treat.',
    price: '$79'
  },
  {
    image: 'https://beerntsens.com/wp-content/uploads/raspberry_filled.jpg',
    title: 'Raspberry Caramels',
    description: 'Rich caramels infused with a delightful raspberry twist.',
    price: '$100'
  },
  {
    image: 'https://feastingonfruit.com/wp-content/uploads/2024/05/Chocolate-Raspberry-Tarts-8.jpg',
    title: 'Raspberry Chocolate Bites',
    description: 'Decadent dark chocolate bites with a raspberry filling.',
    price: '$170'
  },
  {
    image: 'https://i.ebayimg.com/images/g/Fj8AAOSwsKZl1Iv3/s-l400.png',
    title: 'Raspberry Sours',
    description: 'Tangy and sour raspberry candies that pack a punch.',
    price: '$90'
  },
  {
    image: 'https://www.ghirardelli.com/media/catalog/product/6/1/61868_base.jpeg?width=265&height=265&canvas=265,265&quality=80&fit=bounds',
    title: 'Raspberry Fudge Squares',
    description: 'Creamy fudge squares with a raspberry swirl.',
    price: '$120'
  },
  {
    image: 'https://nesweettreats.co.uk/cdn/shop/files/Photo-1712417024947.jpg?v=1712428678&width=1946',
    title: 'Raspberry Marshmallows',
    description: 'Fluffy marshmallows with a hint of raspberry flavor.',
    price: '$59'
  },
  {
    image: 'https://p16-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5c4f3f19a78d4520987b2b2603486eb0~tplv-omjb5zjo8w-resize-jpeg:800:800.jpeg?from=1826719393',
    title: 'Raspberry Candy Canes',
    description: 'Festive raspberry-flavored candy canes for the holidays.',
    price: '$99'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-p82jn6co/images/stencil/1280x1280/products/9959/54551/44843-waterbridge-fruit-pastilles-pouch-175g__02974.1707342684.jpg?c=2',
    title: 'Raspberry Pastilles',
    description: 'Classic raspberry pastilles for a refined sweet experience.',
    price: '$60'
  }
];

let span = document.getElementById("count")

let raspberry = document.getElementById("cardContainer");
raspberry.style.display = "flex";
raspberry.style.flexWrap = "wrap";
raspberry.style.gap = "20px";
raspberry.style.justifyContent = "center";
let totalItems = JSON.parse(localStorage.getItem("totalItems")) || 0;
span.textContent = `${totalItems}`

function addToCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === raspberryCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...raspberryCards[index],
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
    if (cartItems[i].title === raspberryCards[index].title) {
      cartItems[i].count += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push({
      ...raspberryCards[index],
      count: 1,
    });
  }
  totalItems++
  span.textContent = totalItems
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));

}

raspberryCards.forEach((item, index) => {
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

  raspberry.appendChild(candy);

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
