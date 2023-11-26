//Khai báo DOM 
const mainTitle = document.getElementById("main-title");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn")
const todoContainer = document.getElementById('todo-container')
console.log(mainTitle)
//Thay đổi style thông qua DOM
mainTitle.style.color = "green"

//Thay đổi nội dung của thẻ thông qua DOM
mainTitle.innerText = "JSA 30 - Todo list"

//Hàm trong JS:
//VD Hàm Xin Chào
// Cú pháp: 
// function <tên_hàm(){
//Khối lệnh
//}

//Lưu ý: Muốn thực thi lệnh trong hàm thì phải gọi Hàm
// function sayHello() {
//     alert("Hello")
// }
// sayHello() //Gọi Hàm

//Tạo 1 mảng rỗng để lưu danh sách todo

//Lấy todoList trong localstorage ra và lưu vào biến todolist
let todoList = JSON.parse(localStorage.getItem("todo-list")) || [];
// Khi trong LS chưa có todo-list thì gắn bằng mảng rỗng

console.log(todoList);

function addTodo (event) {
    //Chặn sự kiện tải lại trang
    event.preventDefault()
    //lấy dữ liệu của ô input thông qua DOM
    let todoText = todoInput.value
    console.log(todoText)

    //Tạo 1 mảng để lưu danh sách todo
    let todoList = [];
    //Thêm phần tử todoText vào cuối mảng:
    todoList.push(todoText)

     //Lưu
     localStorage.setItem('todo-list',JSON.stringify(todoList))  
    //Khi 
}



//Hàm xử lý in ra danh sách todo
function renderTodoList() {
    let htmls = "";

    for ( let i = 0; i < todoList.length; i++) {
        htmls = htms + todoList[i]
    }
}

addBtn.addEventListener('click', function(event){
    addTodo(event)
})

html