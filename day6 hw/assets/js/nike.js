const productContainer = document.querySelector(".product-container")
const searchInput = document.querySelector("#search-input")

const productList = [

    {
        id: 1,
        name: 'Nike Air Jordan 1 JBalvin',
        price: "$750",
        image: './assets/images/1.webp.webp'
    },
    {
        id: 2,
        name: 'Nike Air Jordan 4 Retro Pale Citron',
        price: "$750",
        image: './assets/images/2.webp.webp'
    },
    {
        id: 3,
        name: 'Nike Air Jordan 6 Retro Travis Scott',
        price: "$500",
        image: './assets/images/3.webp.webp'
    },
    {
        id: 4,
        name: 'Nike Air Jordan 1 Mid Chicago White Toe',
        price: "$700",
        image: './assets/images/4.webp.webp'
    },
    {
        id: 5,
        name: 'Nike Air Jordan 1 High Dark Mocha',
        price: "$900",
        image: './assets/images/5.webp.webp'
    },
    {
        id: 6,
        name: 'Nike Air Jordan 1 Retro High Lost and Found',
        price: "$900",
        image: './assets/images/6.webp.webp'
    },
    {
        id: 7,
        name: 'Nike Air Jordan 4 Retro Off White Sail',
        price: "$700",
        image: './assets/images/7.webp.webp'
    },
    {
        id: 8,
        name: 'Nike Air Jordan 1 Mid SE Sail Light Blue',
        price: "$600",
        image: './assets/images/8.webp.webp'
    },
    {
        id: 9,
        name: 'Nike Air Jordan 6 Retro Travis Scott British',
        price: "$900",
        image: './assets/images/9.webp.webp'
    },
    {
        id: 10,
        name: 'Nike Air Jordan 1 High Golf x Michelle',
        price: "$700",
        image: './assets/images/10.webp.webp'
    },
    {
        id: 11,
        name: 'Nike Air Jordan 4 Retro Pine Green',
        price: "$500",
        image: './assets/images/11.webp.webp'
    },
    {
        id: 12,
        name: 'Nike Air Jordan 1 High University Blue',
        price: "$500",
        image: './assets/images/12.webp'
    },
]

function renderProductList(listProduct) {
    let htmls = "";
    for (let i = 0; i < listProduct.length; i++) {
        htmls += `
      <div class = "product-item">  
        <img src=${listProduct[i].image}> </img>
        <h3>${listProduct[i].name}</h3>
        <h3>${listProduct[i].price}
      </div>
      `
    }
    productContainer.innerHTML = htmls

}
renderProductList(productList)


function searchProducts(searchString) {

    let foundProduct = productList.filter(function (product) {


        return product.name.toLowerCase().includes(searchString.toLowerCase());
    })

    renderProductList(foundProduct)
}

searchInput.addEventListener("input", function (event) {
    searchProducts(event.target.value)
})