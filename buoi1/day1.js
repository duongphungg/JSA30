//Các kiểu dữ liệu ở trong JS:
/*

*string: chuỗi => tập hợp của nhiều chữ cái và số được viết liền với nhau và được để trong ""
    VD: "abc123"
*number Số: chỉ chứa số
    VD: 123, 999999999, -123123, 12.5
*Boolean: true/false
*/
// 1.Khai báo biến: let, var, const
// Let: Biến được khai báo bởi từ let thì có thể gán cho chúng 1 giá trị mới
// Const: 1 Biến được khai báo bằng từ const thì sẽ không thể gán được giá trị mới
// let my_name = "PND";
// console.log("Tôi tên là " + my_name);

// let my_age = 30;
// console.log("Năm nay tôi " + my_age + " tuổi")
// console.log("Tôi tên là " + my_name + ", năm nay tôi " + my_age + " tuổi")

//2. Toán tử trong JS: +, -, *, /, %
// let a = 8
// let b = 2
// let plus = a + b;
// console.log("8 + 2 = " + plus);
// let minus = a - b;
// console.log("8 - 2 = " + minus)
// let times = a * b
// console.log("8 * 2 = " + times )
// let divide = a / b
// console.log("8 / 2 = " + divide)

//Dấu căn bậc 2: Math.sqrt(value) VD: Math.sqrt(100)
// let a = 10
// let b = 15
// let c = 25
// let p = 30
// let h = p * (p-a) * (p-b) * (p-c)
// let S = Math.sqrt(h)
// console.log("Diện tích tam giác ABC là: " + S)
// console.log('Diện tích tam giác có số đo 3 cạnh lần lượt là ${a}, ${b}, ${c} = ${S}')
//3. Hàm alert, prompt
// *String(value): Biến value từ kiểu giá trị nào đó --> kiểu giá trị string
// *Number(value): Biến value từ kiểu giá trị nào đó --> kiểu giá trị Number
// alert("hello")
// let input_value = prompt("Giá trị nửa chu vi tam giác ABC");
// let a = Number(prompt "Giá trị AB")
// let b = Number(prompt"()")
// let c = Number(c)
//4. Các phép so sánh trong JS: >, <, >=, <=, ==, !=
//Các cặp điều kiện trong JS: 
// &&: và
// ||: hoặc
let a = 10
let b = 10
let c = 8
let check = a == b || c > b;
console.log(check)