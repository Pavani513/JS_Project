const candyCards = [{
        image: 'https://thefudgeshoppe.com/cdn/shop/products/germanraspberries.jpg?v=1672668441&width=2048',
        title: 'Raspberry Candies',
        description: 'Delightful soft Real Fruitful treat Raspberry flavoured Candies.',
        page: "../Raspberry/raspberry.html"
    },
    {
        image: 'https://www.bokksumarket.com/cdn/shop/files/BG11743_CandyKawaguchiMikanCandy_Texture.jpg?v=1689099200&width=1080',
        title: 'Orange Candies',
        description: 'Delicious real-fruitful juicy tangful Orange Flavoured Candies.',
        page: "../Orange/orange.html"
    },
    {
        image: 'https://vegetarianmamma.com/wp-content/uploads/2022/10/Christmas-Chocolate-Covered-Strawberries-4.jpg',
        title: 'Strawberry Candies',
        description: 'Strawberry fresh fruitful rich delicious soft creamy flavoured Candies.',
        page: "../Strawberry/strawberry.html"
    },
    {
        image: 'https://clickcuisineuae.com/cdn/shop/products/Hershey-s-Kisses-Milk-Chocolate-325gm-Kisses-1667800442.jpg?v=1667800444&width=1946',
        title: 'Chocolate Kisses',
        description: 'Creamy delicious milk chocolate and is delicately wrapped kisses.',
        page: "../Chocolates/kisses.html"
    },
    {
        image: 'https://c4.wallpaperflare.com/wallpaper/226/838/327/chocolate-brown-food-sweet-wallpaper-preview.jpg',
        title: 'Nuts Candies',
        description: 'Mixed various nutty chocolate candies topped with dryfruits.',
        page: "../Nuts/nuts.html"
    },
    {
        image: 'https://m.media-amazon.com/images/I/815qJkPc2-L.jpg',
        title: 'Lollipops',
        description: 'Yummylicious various flavoured real fruit Lollipops.',
        page: "../Lollipops/lollipop.html"
    },
    {
        image: 'https://i2-prod.devonlive.com/whats-on/article9747866.ece/ALTERNATES/s615/0_cadbury.jpg',
        title: 'Cadbury',
        description: 'Sweet, juicy, and refreshing, with a subtle hint of tanginess',
        page: "../Cadbury/cadbury.html"
    },
    {
        image: 'https://saboreandocr.com/cdn/shop/products/D_NQ_NP_767243-MLA43908559138_102020-O.jpg?v=1627075379',
        title: 'Ferroro rocher',
        description: 'A fruity flavor that can be sweet, juicy, and floral',
        page: "../Ferrorocher/ferrorocher.html"
    }
];

if (sessionStorage.getItem("islogin") !== "true") {
    location.href = "../Login_page/Login.html";
}
let span = document.getElementById("count")
let boxContainer = document.getElementById("boxContainer");
let cartBtn = document.getElementsByTagName("button")[0];
for (let i = 0; i < candyCards.length; i++) {
    let x = candyCards[i];
    let cards = document.createElement("div");
    cards.className = "card";
    cards.innerHTML = `
<img src="${x.image}"> <br>
<h3 id="title">${x.title}</h3>
<button id="seeMore">See More</button>
`

    let btn = cards.getElementsByTagName("button")[0];
    btn.addEventListener("click", () => {
        window.location.href = x.page;
    });

    boxContainer.append(cards);
}
boxContainer.className = "box-container";

let input = document.querySelector("input");
input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let inputValue = input.value;
        for (let i = 0; i < candyCards.length; i++) {
            if (candyCards[i].title.toLowerCase() === inputValue.toLowerCase()) {
                location.href = candyCards[i].page;
            }
        }
    }
});


const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
        text: 'You will be logged out of your account.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, Logout',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                text: 'You have been successfully logged out.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = "../Login_page/Login.html";
            });
        }
    });
});