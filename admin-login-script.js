// Xử lý đăng nhập admin
function loginAdmin() {
    // Lấy giá trị từ các trường đăng nhập admin
    var adminUsername = document.getElementById('admin-username').value;
    var adminPassword = document.getElementById('admin-password').value;

    // Kiểm tra tính hợp lệ (có thể thêm kiểm tra bằng Ajax với backend)
    if (adminUsername && adminPassword) {
        // Thực hiện đăng nhập admin
        alert('Đăng nhập admin thành công!');
    } else {
        alert('Vui lòng nhập đầy đủ thông tin đăng nhập!');
    }
}
