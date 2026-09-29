/* 
   Hàm upDate: Kích hoạt khi người dùng rơ chuột lên hình ảnh (onmouseover)
   Tham số previewPic: Đối tượng thẻ <img> được di chuột qua
*/
function upDate(previewPic) {
    // Step 1: Kiểm tra sự kiện kích hoạt thành công
    console.log("-> Sự kiện mouseover đã hoạt động!");

    // Step 2: In thông tin alt và src của biến previewPic ra console
    console.log("Alt text:", previewPic.alt);
    console.log("Image Source:", previewPic.src);

    // Lấy phần tử khung hiển thị có id="image"
    let imageDisplay = document.getElementById("image");

    // Step 3: Thay đổi nội dung văn bản thành alt của ảnh
    imageDisplay.innerHTML = previewPic.alt;

    // Step 4: Thay đổi hình nền (background-image) thành src của ảnh
    imageDisplay.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* 
   Hàm unDo: Kích hoạt khi người dùng di chuột ra khỏi hình ảnh (onmouseout)
*/
function unDo() {
    // Lấy phần tử khung hiển thị có id="image"
    let imageDisplay = document.getElementById("image");

    // Step 1: Đặt lại hình nền về giá trị ban đầu url('')
    imageDisplay.style.backgroundImage = "url('')";

    // Step 2: Đặt lại văn bản về câu hướng dẫn gốc
    imageDisplay.innerHTML = "Hover over an image below to display here.";
}