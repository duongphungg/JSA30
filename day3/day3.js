// vòng lặp for in
 let langs = [      //mảng
    "javascript",
    "C++",
    "java",
    "Ruby",
    "C#",
    "Python"
];
let student1 = {  //object
    name: "PND",
    age: 16,
    address: "Ha Noi",
    phone: "0878666777" }


// Vòng lặp for bình thường ( các phần tử của mảng có thể trùng nhau)
for (let index = 0; index < langs.length; index++) {
    console.log("vị trí thứ " + index + " là phần tử: " + langs[index]);
}
// Vòng lặp For-In
// - Đối với mảng: dùng để lấy ra chỉ số của các phần tử
// - Đối với object: dùng để lấy ra các thuộc tính của object
//  Cú pháp: 
// for (let tên_biến in tên_mảng/ tên object
for (let chi_so in langs) {
    console.log ("chỉ số các phần tử là: " + chi_so)
}

// object

for ( let i in student1) {
    console.log("Thuộc tính: " + i)
}


// for of
// Đối với mảng
for (a of langs) {
    console.log("Giá trị các phần tử trong mảng langs là: " + a);
 
 
 
 
 
//  Đối với object
    console.log(Object.values(student1))
    for (let gia_tri of Object.values(student1)) {
        console.log("Giá trị của object: ", gia_tri)
    }
}
// B1: Chạy lệnh: git add để thêm những file vừa cập nhật
// B2: git commit -m "Giải thích cho những thay đổi vừa rồi"
// B3: git push origin tên_nhánh
//(tên_nhánh là main, master,..)