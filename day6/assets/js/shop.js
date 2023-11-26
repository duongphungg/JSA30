
//DOM
const productContainer = document.querySelector(".product-container")
const searchInput = document.querySelector("#search-input")

//Tạo một mảng chứa các đối tượng sản phẩm 
const productList = [
  {
    id: 1,
    name:'LeBron Witness 8 EP',
    price: 500,
    image: './assets/images/1.webp'
  },
  {
    id: 2,
    name: 'Nike Ultrafly',
    price: 700,
    image: './assets/images/2.webp'
  },
  {
    id: 3,
    name: 'Nike Air Zoom TR 1',
    price: 1000,
    image: './assets/images/3.webp'
  },
  {
    id: 4,
    name: 'JA 1 EP Hunger',
    price: 590,
    image: './assets/images/4.webp'
  },
  {
    id: 5,
    name: 'Nike Cortez SE',
    price: 590,
    image: './assets/images/5.webp'
  },
  {
    id: 6,
    name:'Nike Air Max 1',
    price: 1000,
    image: './assets/images/6.webp'
  },
  {
    id: 7,
    name: 'Nike Air Max 1 86 OG G',
    price: 570,
    image: './assets/images/7.webp'
  },
  {
    id: 8,
    name: 'Nike Revolution 6',
    price: 690,
    image: './assets/images/8.webp'
  },
  {
    id: 9,
    name: 'Nike Metcon 8',
    price: 750,
    image: './assets/images/9.webp'
  },
  {
    id: 10,
    name: 'Sabrina 1 Magnetic EP',
    price: 900,
    image: './assets/images/10.webp'
  },
]

function renderProductList(listProduct) {
  let htmls = "";
  for (let i = 0; i < listProduct.length; i++) {
    //Qua mỗi lần dùng vòng lặp thì nối thêm sản phẩm vào htmls
    //Dấu ` ở dưới dấu ESC
    htmls += `
    <div class = "product-item">  
      <img src=${listProduct[i].image}> </img>
      <h3>${listProduct[i].name}</h3>
    </div>
    `
 }
    //Sau khi nhận được chuỗi htmls thì sẽ gắn chuỗi htmls vào thẻ DOM productContainer
    productContainer.innerHTML = htmls
    
}
//Gọi hàm renderProductList để chạy 
renderProductList(productList)

//Hàm xử lí tìm kiếm sản phẩm
function searchProducts (searchString) {
  // Tạo một biến gán bằng những sản phẩm mà có tên sản phẩm bao gồm chuỗi tìm kiếm nhập từ ô input
  let foundProduct = productList.filter( function (product) {
    //Trả về những sản phẩm mà có tên bao gồm về ô input
    //toLowerCase() => chuyển chuỗi thành chữ viết thường. Mục đích là khi người dùng nhập chữ hoa hay chữ thường thì đều tìm kiếm đc.
    return product.name.toLowerCase().includes(searchString.toLowerCase()) 
  } )

}
//Gọi hàm renderProductList và truyền tham số thật 
renderProductList(foundProduct)


searchInput.addEventListener("input", function(event) {
  //event.target.value là chuỗi mà người dùng nhập vào ô input
  searchProducts(event.target.value)
})
