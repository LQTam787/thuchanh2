// Xử lý đăng nhập
function loginUser() {
    // Lấy giá trị từ các trường đăng nhập
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra tính hợp lệ (có thể thêm kiểm tra bằng Ajax với backend)
    if (username && password) {
        // Thực hiện đăng nhập
        alert('Đăng nhập thành công!');
    } else {
        alert('Vui lòng nhập đầy đủ thông tin đăng nhập!');
    }
}

// Xử lý đăng ký
function registerUser() {
    // Lấy giá trị từ các trường đăng ký
    var newUsername = document.getElementById('new-username').value;
    var email = document.getElementById('email').value;
    var newPassword = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra tính hợp lệ (có thể thêm kiểm tra bằng Ajax với backend)
    if (newUsername && email && newPassword && confirmPassword && newPassword === confirmPassword) {
        // Thực hiện đăng ký
        alert('Đăng ký thành công!');
    } else {
        alert('Vui lòng nhập đầy đủ và chính xác thông tin đăng ký!');
    }
}
