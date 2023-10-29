// // // // // // Mảng: Là 1 biến có thể lưu nhiều giá trị cùng lúc
// // // // // // Cú pháp khai báo mảng: let/ var/ const <tên_mảng> = [<giá trị_1>, ...]
// // // // // // vd
// // // let list = ["sdf", "sfsdfdf", "dsfsdf"]

// // // // // // Lưu ý: Các phần tử của mảng phải cùng một kiểu dữ liệu
// // // // // // Chỉ số của mảng n phần tử bắt đầu từ 0, kết thúc là n-1
// // // // // // Truy cập phần tử của mảng 
// // // // // name [0]
// // // // // console.log("Phần tử ở vị trí thứ 2 là:", name[0])
// // // // // // Tính số phần tử của mảng
// // // // // console.log("Số phần tử của mảng: ", name[name.length-1])
// // // // Thêm phần tử vào cuối mảng: 
// // // list.push("LMFAO")

// // // for( let index = 0; index < list.length; index ++ ){
// // //     console.log(list[index])
// // // }
// // // // // Vòng lặp for
// // // // // KNiem: Thực hiện 1 đoạn code nào đó lặp lại nhiều lần với số lần biết trước
// // // // // Cú pháp: for ( let biến_đếm(điểm bắt đầu), điều_kiện_dừng_vòng(điểm kết thúc), bước_nhảy) {
// // // // //      Khối lệnh 
// // // // // }
// // // // // Toán tử logic: >, <, >=, <= , ==
// // // // // => Kết quả trả về là 2 giá trị: true/ false (boo)
// // // // // for (let i = 0; i <=50; i++)
// // // // // {
// // // // //     console.log(i)
// // // // // }

// // // // // let n = 50
// // // // // console.log("check", n > 60)
// // // // // for (let i = 0, i < 3, i++) {
// // // // //     console.log(name[index])
// // // // // }
// // // // // Lần lặp đầu tiên: index = 0 => name[0] = sdf
// // // // // lần lặp thứ hai: index = 1 => name[1] sfsdfdf
// // // // // ...

// // // // // Vòng lặp while: chỉ chạy thực thi code bên trong khi điều kiện trả về true
// // // // // Cú pháp: While (điều kiện) {
// // // //     khối lệnh
// // // // }
// // // // VD:
// // // while(19 >= 18) {
// // //     alert("Bạn đã đủ tuổi")
// // //     break
// // // }
// // // // break: dừng vòng lặp
// // // // Tìm hiểu thêm: do while()

// // // kiểu dữ liệu object: đối tượng
// // // Tên: PND 
// // // Tuổi: 16
// // // đchi: dfdsfdsfd
// // // cú pháp: let/ var const = {
// //     (key)tên_thuộc_tính_1: (value)giá trị_1
// //     tên_thuộc_tính_2: giá trị_2
// // }
// let student1 = {
//     name: "PND",
//     age: 16,
//     address: "Ha Noi",
//     phone: "0878666777"
// }
// console.log("name của student1 là: ", student1.name)
// console.log("age của student1 là: ", student1.age)
// console.log("address của student1 là: ", student1.address)
// console.log("phone của student1 là: ", student1.phone)

// // BTVN:
// Bài 1: Dùng vòng lặp for để in ra các số chẵn từ 1 đến 60
// Bài 2: Tạo ra một đối tượng my info chứa các thông tin cá nhân của mình: fullname, age. gender, email, phone, address
//        In ra màn hình các thông tin trên màn hình console