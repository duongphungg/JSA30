/** Local storage ( Local và Global)
 * Là nơi lưu trữ dữ liệu cục bộ
 * Lưu lượng: 5MB
 * 
 */

// Lưu dữ liệu vào localstorage 
// Cú pháp: localStorage.setItem( "key", value)
let name = "Phùng Nam Dương"; 
localStorage.setItem("name", name)

//Lấy dữ liệu trong localStorage ra ngoài:
let nameInLS = localStorage.getItem("name");
console.log("lấy tên từ LS ra: ", nameInLS)


const productList = [
    {
      id: 1,
      name: 'Nike AF1 07',
      description: 'Bestseller',
      price: 500
    },
    {
      id: 2,
      name: 'Nike Air Jordan 1 Mid',
      description: 'Trending 2023',
      price: 300
    },
    {
      id: 1,
      name: 'Nike Air Max 90 GORE-TEX',
      description: 'Trending 2023',
      price: 350
    },
    {
      id: 1,
      name: 'Nike Zion 3PF',
      description: 'Trending 2023',
      price: 700
    },
    {
      id: 1,
      name: 'Nike Full Force Low',
      description: 'Trending 2023',
      price: 1000
    },
  ]
localStorage.setItem("productList", JSON.stringify(productList), )



// Lưu ý: Dữ liệu ở trong localStorage lưu ở dạng JSON

//____________________________________________________

// Do đó trước khi lưu dữ liệu vào LS, thì phải chuyển đổi dữ liệu từ JS thành JSON
// Cách chuyển dữ liệu từ JS thành JSON: JSON.stringify

// Lấy mảng dữ liệu produclist ra JS (product-list)
// let productlistinLS = localStorage.getItem("productList")

let productlistinLS = JSON.parse(localStorage.getItem("product-list"));

console.log("Danh sách sản phẩm trong LS: ", productlistinLS)
console.log("Danh sách sản phẩm trong JS: ", productList)


//DOM 
let myinfo = {
    name: "PND",
    age: 16,
    email: "PND@gmail.com",
}

localStorage.setItem("myinfo", JSON.stringify(myinfo))
let myInfoSaved = JSON.parse(localStorage.getItem("my-info"));

const nameHTML = document.getElementById("name"); // DOM

nameHTML.innerText = myInfoSaved.name;


myinfo.length