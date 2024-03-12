// Tìm kiếm sinh viên
function searchStudent() {
    // Lấy giá trị từ trường tìm kiếm sinh viên
    var studentName = document.getElementById('student-name').value;

    // Xử lý tìm kiếm sinh viên (có thể thêm AJAX để gọi đến backend)
    alert('Đang tìm kiếm sinh viên: ' + studentName);
}

// Xuất báo cáo kết quả của sinh viên
function exportStudentReport(studentId) {
    // Thực hiện các thao tác cần thiết khi xuất báo cáo kết quả của sinh viên (có thể thêm AJAX để gọi đến backend)
    alert('Đang xuất báo cáo kết quả của sinh viên với ID: ' + studentId);
}
