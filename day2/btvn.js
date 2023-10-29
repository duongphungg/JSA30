// // Bài 1
// for ( let i = 2; i<=60; i+=2) {
//     console.log(i)
// // // Câu lệnh kiểm tra điều kiện: chỉ chạy khối lệnh bên trong khi điều kiện trả về true
// // //  if(điều kiện) {
// //     Khối lệnh
// // }
// }
// Bài 1 cách 2
for ( i = 1; i <=60; i++) {
    if(i%2==0) {
        console.log(i)
    }
}
// Bài 2
let info = {
    FullName: "Phùng Nam Dương",
    Age:16,
    Gender: "Male", 
    Email: "namduongphung554@gmail.com",
    Phone: "0878606588",
    Address: "Tecco Diamond"
}
console.log("My full name is: ", info.FullName)
console.log("My age is: ", info.Age)
console.log("My gender is: ", info.Gender)
console.log("My email is: ", info.Email)
console.log("My phone number is: ", info.Phone)
console.log("My address is: ", info.Address)

// ==> Cập nhật code lên git khi đã khởi tạo dự án thành công:
// B1: Chạy lệnh: git add. để thêm những file vừa cập nhật
// B2: git commit-m "giải thích cho những thay đổi vừa rồi"
// B3: git push orgin tên_nhánh